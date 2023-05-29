import express from "express";
import { userSignUp ,userLogIn } from "../controllers/userController.js";
import { getPrducts , getProductById} from "../controllers/productsController.js";
import { addPaymentGateway, paymentResponse } from "../controllers/payment-controller.js";
const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogIn)



router.get('/products', getPrducts);
router.get('/product/:id', getProductById)

router.post('/payment',addPaymentGateway)
router.post('/callback',paymentResponse)
export default router;