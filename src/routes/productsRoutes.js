import { Router } from "express";
import {
  postCategories,
  getCategories,
  getOneProduct
} from "../controllers/productsControllers.js";
import { validationCategoryMdd } from "../middlewares/validationCategoryMdd.js";

const router = Router();

router.post("/categories", validationCategoryMdd, postCategories);

router.get("/categories", getCategories);

router.get('/products/:id', getOneProduct);

export default router;