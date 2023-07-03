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
