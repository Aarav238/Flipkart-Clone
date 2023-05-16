import express from "express";
import { userSignUp ,userLogIn } from "../controllers/userController.js";

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogIn)


export default router;