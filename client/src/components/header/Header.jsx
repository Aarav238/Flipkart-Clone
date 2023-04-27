import React from 'react'
import {AppBar , Toolbar, styled , Box, Typography} from "@mui/material" 


const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`;
const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`

const Header = () => {
    const logo = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
  return (
    
        <StyledHeader>
        <Toolbar>
          <Component>
           <img src={logo} alt="logo" style={{
            width: 75
           }} /> 
           <Box>
            <Typography>
                Explore Plus
            </Typography>
           </Box>
          </Component>
        </Toolbar>
    </StyledHeader>
    
    
        
    
    
  )
}
export default Header;


