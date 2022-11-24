import {collectionCategories} from "../database/db.js";

export async function postCategories(req, res){
    const body = req.body;

    try{
        await collectionCategories.insertOne(body);
        return res.sendStatus(201);
    } catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getCategories(req, res){
    try{
        const hallCategories = await collectionCategories.find().toArray();
        return res.status(200).send(hallCategories);
    } catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}