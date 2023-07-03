import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Container = styled(Grid)(({ theme }) => ({
  margin: "auto",
  textAlign: "center",
  display: "flex",
  justifyContent: "center"
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Icon = styled(CheckCircle)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));
const SmallButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  fontSize: "0.875rem", // Adjust the font size as desired
  width: "15%",
}));

const OrderSuccessful = () => {
  return (
    <Container  container>
      <Grid item xs={12}>
        <Title variant="h4">Your order has been placed successfully!</Title>
      </Grid>
      <Grid item xs={12}>
        <Icon />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Thank you for shopping with us.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SmallButton variant="contained" color="primary" >
          Continue Shopping
        </SmallButton>
      </Grid>
    </Container>
  );
};

export default OrderSuccessful;
