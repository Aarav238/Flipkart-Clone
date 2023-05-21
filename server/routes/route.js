import express from "express";
import { userSignUp ,userLogIn } from "../controllers/userController.js";
import { getPrducts } from "../controllers/productsController.js";
const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogIn)



router.get('/products', getPrducts);


export default router;