import { Typography, Box ,styled, Table, TableBody , TableRow, TableCell} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;
const Badge = styled(LocalOfferIcon)`

    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
    
`;


const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > ts{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({product}) => {
    const date = new Date (new Date().getTime() + (5 * 24 * 60 * 1000 ))

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return (
        <>
             <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop: 5 , color: "#878787" , fontSize: 14}}>
        8 Rating and 1 Review
        <Box component="span">
            <img style={{width: 77 , marginLeft:20}} src={fassured} alt="assured" />
        </Box>
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize: 28}}>
            ₹{product.price.cost}
            </Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: "#878787"}}>
                <strike> ₹{product.price.mrp}</strike>
            </Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:"#388E3C" }}>
                {product.price.discount}
            </Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
        <Typography><Badge/>Special PriceGet extra 16% off (price inclusive of cashback/coupon)T&C</Typography>
        <Typography><Badge/>Combo OfferBuy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
        <Typography><Badge/>Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and aboveT&C</Typography>
        <Typography><Badge/>Extra ₹4,999 Off on Hero Bikes & Scooters on purchase of ₹80,000 or moreT&C</Typography>
        <Typography><Badge/>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2500T&C</Typography>

        </SmallText>

        <Table>
            <TableBody>
                <ColumnText>
                <TableCell style={{color: "#878787"}}>Delivery</TableCell>
                <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | $40</TableCell>

                </ColumnText>
                <ColumnText>
                <TableCell style={{color: "#878787"}}>Warranty</TableCell>
                <TableCell style={{fontWeight: 600}}>No Warranty</TableCell>

                </ColumnText>
                <ColumnText>
                <TableCell style={{color: "#878787"}}>Seller</TableCell>
                <TableCell style={{color: "#2874f0"}}>
                    <Box component="span"> Superr Comnet</Box>
                    <Typography>GST Invoice availabel</Typography>
                    <Typography> View More Sellers starting from {product.price.post}</Typography>
                </TableCell>
                </ColumnText>
                <ColumnText>
                   <TableCell colSpan={2}>
                    <img src={adURL} alt="ad"  style={{width: 390}}/>
                   </TableCell>
                </ColumnText>
                <ColumnText>
                <TableCell style={{color: "#878787"}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>

                </ColumnText>
            </TableBody>
        </Table>
        </>
       
    )
}

export default ProductDetail;               