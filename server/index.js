import express from "express";
import db  from "./database.js";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid";
import defaultData from "./data.js";
import Router from "./routes/route.js"


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({
    extended: true
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);


const PORT = process.env.PORT;
const URL = process.env.URL;
db(URL);

app.listen(PORT, () => 
console.log(`server is running on port ${PORT}`)
)
//defaultData();
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback'
paytmParams['EMAIL'] = 'aarav8090shukla@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'