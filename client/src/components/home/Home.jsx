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
            <Slide products={products} title="Deal of the Day" timer={true}/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's Top picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
            
        </>
            
      
            
     
       
    )
}

export default Home;