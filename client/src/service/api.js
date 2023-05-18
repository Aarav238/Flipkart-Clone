import axios from "axios";

const URL = "http://localhost:5000"

export const authenticateSignup = async (data) => {
    try {
       return await axios.post(`${URL}/signup`, data)
        
    } catch (error) {
        console.log("error while calling signup api", error);
        return error.response;
    }
}





export const authenticateLoginIn = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}