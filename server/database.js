import mongoose, { mongo } from "mongoose";


const db = async(URL) => {
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
export default db;