import { Router } from "express";
import { postSignUp, postSignIn } from "../controllers/authControllers.js";
import { validationSignUpMeddleware } from "../middlewares/validationSignUpMeddleware.js";
import { validationSignInMeddleware } from "../middlewares/validationSignInMeddleware.js";

const router = Router();

router.post("/sign-up", validationSignUpMeddleware, postSignUp);

router.post("/sign-in", validationSignInMeddleware, postSignIn);

export default router;