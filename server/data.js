import { products } from "./constants/data.js";
import Product  from "./Models/products.js";

const defaultData = () => {

    try {

        Product.insertMany(products);
        console.log("data added successfully")
        
    } catch (error) {
        console.log("Error while inserting data" , error.message);
    }

}
export default defaultData;