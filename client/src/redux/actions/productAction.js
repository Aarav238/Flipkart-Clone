import axios from "axios"
import * as actionType from "../constants/productConstant"

const URL = " http://localhost:5000"

export const getProduct = () => async(dispatch) => {
    try {
     const {data}=  await axios.get(`${URL}/products`)
        dispatch({
            type: actionType.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:actionType.GET_PRODUCTS_FAIL,
            payload: error.message
        })
        //console.log("Error while calling getProducts api", error.message)
    }
} 