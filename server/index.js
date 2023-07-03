import express from "express";
import db  from "./database.js";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid";
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
export let paytmParams = {
    MID: process.env.PAYTM_MID,
    WEBSITE: process.env.PAYTM_WEBSITE,
    CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
    INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
    ORDER_ID: uuid(),
    CUST_ID: process.env.PAYTM_CUST_ID,
    TXN_AMOUNT: '100',
    CALLBACK_URL: 'http://localhost:3000/callback',
    EMAIL: 'aarav8090shukla@gmail.com',
    MOBILE_NO: '1234567852'
  };