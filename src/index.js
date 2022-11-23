import express from "express";
import cors from "cors";
import joi from "joi";

//configs
const app = express();
app.use(cors());
app.use(express.json());

//validações joi