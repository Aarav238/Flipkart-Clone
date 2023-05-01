import mongoose, { mongo } from "mongoose";



export const db = async() => {
    const URL = "mongodb://0.0.0.0:27017";
    try {
       await mongoose.connect(URL, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("database connected");
    } catch (error) {
        console.log('Error while connecting to database', error.message); 
    }
}