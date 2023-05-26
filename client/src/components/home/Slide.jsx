import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, styled } from "@mui/material";
import  Countdown from "react-countdown"
const Component = styled(Box)`
margin-top: 10px;
background: #FFFFFF;
`;

const Deal = styled(Box)`
    padding: 15px 20px;
`

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slide = ({products}) => {
    const timeURl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg "
  return (
    <Component>
    <Box>
        <Typography>Deal of the Day</Typography>
        <Box>
            <img src={timeURl} alt="timer" />
        </Box>
    </Box>
    <Carousel
        centerMode={true}
        swipeable={false}
         draggable={false}
         infinite={true}
         keyBoardControl={true}
         autoPlay={true}
         autoPlaySpeed={2000}
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
    {
        products.map(product => (
            <img src={product.url} alt="product" />
        ))
    }
    </Carousel>
    </Component>
  )
}

export default Slide;
