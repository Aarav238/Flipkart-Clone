import express from "express";
import db  from "./database.js";
import dotenv from "dotenv";


const app = express();

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;
db(URL);

app.listen(PORT, () => 
console.log(`server is running on port ${PORT}`)
)