import { Box } from "@mui/material";





const MidSection  = () => {
    const ImageURL = [
        'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
        'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
    ];
    return (
        <Box>
       {
        ImageURL.map(image => (
            <img src={image} alt="image" />
        ))
       }
        </Box>
    )
}

export default MidSection;