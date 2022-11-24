import { collectionUsers, collectionSessions } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function postSignUp(req, res) {
    const bodyUserHashPassword = req.bodyUserHashPassword;

    try {
        await collectionUsers.insertOne(bodyUserHashPassword);
        return res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Algum erro ocorreu!");
    }
}

export async function postSignIn(req, res) {
    const userExist = req.userExist;

    const token = uuidV4();

    try {
        await collectionSessions.insertOne({
            token,
            userId: userExist._id
        })

        delete userExist.password;

        return res.status(201).send({ token, userExist });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}