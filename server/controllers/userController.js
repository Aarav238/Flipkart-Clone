import { response } from "express";
import User from "../Models/userSchema.js";




export const userSignUp = async (req,res ) => {

    try {
        console.log(req.body);
 
       const exist = await User.findOne({username: req.body.username});
       if(exist){
        return res.status(401).json({message: "username already exist"})
       }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();


        res.status(200).json({message: user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}