import React from 'react'
import{ Dialog , Box , TextField, Button, Typography , styled} from '@mui/material';
import { useState , useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { authenticateSignup } from '../../service/api';
const Component = styled(Box)`

height: 70vh;
width: 90vh;

`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 82%;
width: 28%;
padding: 45px 35px;

& > p , & > h5{
    color: #ffffff;
    font-weight: 600;
}

`;
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div , & > button , & > p  {
        margin-top: 20px ;
    }

`;

const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const RequestOtp = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;
const CreateAccount = styled(Typography)`
     font-size: 14px;
     text-align: center;
     color: #2874f0;
     font-weight: 600;
     cursor: pointer;
`;

const accountInitialValue = {
    login:{
        view:"login",
        heading: "Login",
        subheading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading: " Looks like you're new here!",
        subheading: "Sign Up with your mobile number to get started"
    }
}

const signupIntialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}


const LoginDialog = ({open , setOpen}) => {

    const [account,toggleAccout] = useState(accountInitialValue.login)
    const[signup,setSignup] = useState(signupIntialValue)
    const { setAccount}= useContext(DataContext)
    const handleClose = () => {
        setOpen(false)
        toggleAccout(accountInitialValue.login)
    }

    const viewChange = () => {
        toggleAccout(accountInitialValue.signup)
    }

    const onValueChange = (e) => {
        setSignup({...signup , [e.target.name] : e.target.value})
        console.log(signup);
    }

    const signupUser = async () => {
        let response =  await authenticateSignup(signup)
        if(!response) return ;
        handleClose();
        setAccount(signup.firstname);
    }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false} >
        <Component> 
        <Box style={{display: "flex" , height: "100%"}}>
             <Image>
                <Typography variant='h5'> {account.heading}</Typography>
                <Typography style={{ marginTop : 20}}>{account.subheading}</Typography>
             </Image>
             { 
                account.view === "login" ?

             <Wrapper>
                <TextField label = "Enter Email/Mobile number" variant = "standard"/>
                <TextField label = "Enter Password" variant = "standard"/>
                <Text>
                    By continuing, you  agree to Flipkart's Term of Use and Privacy Policy.
                </Text>
                <LoginButton>
                    Login
                </LoginButton>
                <Typography style={{ textAlign: "center"}}>
                    OR
                </Typography>
                <RequestOtp> Request OTP</RequestOtp>
                <CreateAccount onClick={viewChange}>
                    New to Flipkart? Create an Account.
                </CreateAccount>

             </Wrapper>
             :
             <Wrapper>
             <TextField variant="standard" onChange={(e) => onValueChange(e)} name='firstname' label='Enter Firstname' />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='lastname' label='Enter Lastname' />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='email' label='Enter Email' />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='phone' label='Enter Phone' />
                <LoginButton onClick={signupUser}>Continue</LoginButton>
             </Wrapper>
             }
        </Box>
        </Component>
    </Dialog>
  )
}
export default LoginDialog;
