import { Router } from "express";
import {postCategories, getCategories} from "../controllers/productsControllers.js";
import {validationCategoryMdd} from "../middlewares/validationCategoryMdd.js";

const router = Router();

router.post("/categories", validationCategoryMdd, postCategories);

router.get("/categories", getCategories);

export default router;