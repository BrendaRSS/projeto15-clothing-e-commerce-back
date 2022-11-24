import bcrypt from "bcrypt";
import { collectionUsers } from "../database/db.js";

export async function validationSignInMeddleware(req, res, next) {
    const { email, password } = req.body;

    const userExist = await collectionUsers.findOne({email});
    if(!userExist){
        return res.status(401).send("Usuário não cadastrado!");
    }

    const passwordOK = bcrypt.compareSync(password, userExist.password);
    if(!password){
        return res.status(401).send("Senha incorreta!")
    }

    req.userExist = userExist;

    next();
}