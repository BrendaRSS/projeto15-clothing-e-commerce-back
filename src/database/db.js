import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//configs
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
    console.log("MongoDB conectado!");
} catch (error){
    console.log(error);
}

const db = mongoClient.db("DbEcommerce");
export const collectionUsers = db.collection("users");
export const collectionSessions = db.collection("sessions");