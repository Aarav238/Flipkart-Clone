import { useEffect } from "react";

import { useDispatch , useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItem from "./ActionItem";
import { Box, Typography ,styled , Grid } from "@mui/material";

const  Component = styled(Box) `
background: #F2F2F2;

`
const DetailView = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading , product } = useSelector(state => state.getProductDetails);
    useEffect(() =>{
        if( product && id !== product.id)
         dispatch(getProductDetails(id))

    },[dispatch, id, product , loading])
    console.log(product)
    return (
        <Component>
            { product && Object.keys(product).length &&
            <Grid>
            <Grid>
                <ActionItem product = {product}/> 
            </Grid>
            <Grid>
                <Typography>{product.title.longTitle}</Typography>
            </Grid>

            </Grid>
            }
        </Component>
    )
}

export default DetailView;