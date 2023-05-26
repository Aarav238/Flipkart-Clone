import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide"
import { Box , styled} from "@mui/material";
import { useEffect } from "react";
import { getProduct } from "../../redux/actions/productAction";
import { useDispatch , useSelector } from "react-redux";
const Component = styled(Box)`
padding: 10px;
background: #f2f2f2 ;
`


const Home = () => {

   const getProducts =  useSelector ( state => state.getProducts)
    const {products} = getProducts;
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    },[dispatch])
    return (
        <>
            <Navbar/>
            <Component>
            <Banner/>
            <Slide products={products}/>
            </Component>
            
        </>
            
      
            
     
       
    )
}

export default Home;