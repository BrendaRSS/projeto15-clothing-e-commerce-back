import { ObjectId } from "mongodb";
import { collectionCategories, collectionInventory } from "../database/db.js";

export async function postCategories(req, res) {
    const body = req.body;

    try {
        await collectionCategories.insertOne(body);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getCategories(req, res) {
    try {
        const hallCategories = await collectionCategories.find().toArray();
        return res.status(200).send(hallCategories);
    } catch(error){
        console.log(error);
    };
}

export async function getInventory(req, res){
    const categoria = req.headers.categoria;
    const cart = req.headers.cart;
    const {category} = req.query;

    try{
        // if(cart){
        //     const inventory = await collectionInventory.find().toArray();
        //     const array = [];
        //     console.log(cart[0]._id)
        //     for(let i=0; i<cart.length; i++){
        //         inventory.forEach((produto)=>{
        //             if(cart[i]._id === produto._id){
        //                 console.log(produto) ;
        //             }
        //     })
        //     }
        //     return res.status(200).send(array);
        // }

        if(category){
            const products = await collectionInventory.
            find({ category: { $regex: category, $options: "i" } }).toArray();
        
            return res.status(200).send(products);
        }
        
        const inventory = await collectionInventory.find({category: categoria}).toArray();
        return res.status(200).send(inventory);
    }catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getOneProduct(req, res) {
    const productId = new ObjectId(req.params.id);

    try {
        const productData = await collectionInventory.findOne({ _id: productId })
        return res.status(200).send(productData);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}