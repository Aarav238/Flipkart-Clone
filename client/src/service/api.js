import axios from "axios";

const URL = "https://clone-backend-jslt.onrender.com"

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

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api', error);
    }
}
