import React from 'react'
import {AppBar , Toolbar, styled ,Drawer, Box, Typography, IconButton} from "@mui/material" 
import Search from './Search';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`;
const Component = styled(Link)`
margin-left: 12%;
line-height: 0;
text-decoration: none;
color: inherit;
`
const SubHeading = styled(Typography)`
font-size: 10px;
font-style: italic;
`
//handle css of html tags with styled components
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
}
)
const CustomWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));


const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down("md")]: {
    display: "block"
  }
}));
const Header = () => {
    const logo = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open , setOpen ] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    }  
    const handleClose =  () => {
      setOpen(false);
    }
    return (
    
        <StyledHeader>
        <Toolbar style={{ minHeight: 55}}>
        <MenuButton color='inherit' onClick={handleOpen}>
          <MenuIcon/>
        </MenuButton>
        <Drawer open={open} onClose={handleClose} >
          
        </Drawer>
          <Component to='/'>
           <img src={logo} alt="logo" style={{ width: 75 }} /> 
           <Box style={{ display : 'flex'}}>
            <SubHeading>Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                </SubHeading>
                <PlusImage src={subURL} alt="sublogo" />
           </Box>
          </Component>
          <Search/>
          <CustomWrapper>
            <CustomButtons/>
          </CustomWrapper>
        </Toolbar>
    </StyledHeader>
    
    
        
    
    
  )
}
export default Header;


