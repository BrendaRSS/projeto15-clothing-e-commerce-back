import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";

//configs
const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(productsRoutes);
dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running in port: ${port}`));