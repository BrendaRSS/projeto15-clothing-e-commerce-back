import { Router } from "express";
import {postCategories, getCategories, getInventory} from "../controllers/productsControllers.js";
import {validationCategoryMdd} from "../middlewares/validationCategoryMdd.js";

const router = Router();

router.post("/categories", validationCategoryMdd, postCategories);

router.get("/categories", getCategories);

// router.post("/inventory", postInventory);

router.get("/inventory", getInventory);

export default router;