import bcrypt from "bcrypt";
import { userSchema } from '../schema/user.schema.js';
import {collectionUsers} from "../database/db.js";

export async function validationSignUpMeddleware(req, res, next){
    const bodyUser = req.body;

    const userExist = await collectionUsers.findOne({email: bodyUser.email});
    if(userExist){
        return res.status(409).send({ message: "Usuário já cadastrado!" });
    }

    const {error} = userSchema.validate(bodyUser, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    }

    const hashPassword = bcrypt.hashSync(bodyUser.password, 10);

    const bodyUserHashPassword = {...bodyUser, password: hashPassword};

    req.bodyUserHashPassword = bodyUserHashPassword;

    next();
}