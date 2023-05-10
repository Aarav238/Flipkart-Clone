import React from 'react'
import{ Dialog , Box , TextField, Button, Typography , styled} from '@mui/material';

const Component = styled(Box)`

height: 60vh;
width: 90vh;

`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 100%;
width: 40%;
padding: 45px 35px;

`
const LoginDialog = ({open , setOpen}) => {

    const handleClose = () => {
        setOpen(false)
    }
  return (
    <Dialog open={open} onClose={handleClose}>
        <Component>
        <Box style={{display: "flex" , height: "100%"}}>
             <Image>
                <Typography variant='h5'> Login </Typography>
                <Typography style={{ marginTop : 20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
             </Image>
             <Box>
                <TextField label = "Enter Email/Mobile number" variant = "standard"/>
                <TextField label = "Enter Password" variant = "standard"/>
                <Typography>
                    By continuing, you  agree to Flipkart's Term of Use and Privacy Policy.
                </Typography>
                <Button>
                    Login
                </Button>
                <Typography>
                    OR
                </Typography>
                <Button> Request OTP</Button>
                <Typography>
                    New to Flipkart? Create an Account.
                </Typography>

             </Box>
        </Box>
        </Component>
    </Dialog>
  )
}
export default LoginDialog;
