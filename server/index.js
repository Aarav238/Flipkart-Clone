import express from "express";
import { db } from "./database.js";

const app = express();

db();
const PORT = 5000
app.listen(PORT, () => 
console.log(` server is running on port ${PORT}`)
)