import { Router } from "express";
import {postSignUp, postSignIn} from "../controllers/authControllers.js"

const router = Router();

router.post("/sign-up", postSignUp);

router.post("/sign-in", postSignIn);

export default router;