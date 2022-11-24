import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joi from "joi";
import authRoutes from "./routes/authRoutes.js";

//configs
const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);
dotenv.config();

//validações joi
export const userSchema = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "br"]}}).required(),
    password: joi.string().min(4).required(),
    confirm_password: joi.ref("password"),
    cpf: joi.string().min(11).max(11).required(),
    birth_year: joi.number().integer().min(1900).max(2008).required(),
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running in port: ${port}`));