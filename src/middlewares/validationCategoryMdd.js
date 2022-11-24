import { categorySchema } from "../index.js";
import { collectionCategories } from "../database/db.js";

export async function validationCategoryMdd(req, res, next){
    const body = req.body;

    const categoryExist = await collectionCategories.findOne(body);
    if(categoryExist){
        return res.status(409).send({message: "Categoria já existente no database!"});
    }

    const {error} = categorySchema.validate(body, {abortEarly: false});
    if (error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    }

    req.body = body;

    next();
}