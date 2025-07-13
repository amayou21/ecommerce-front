import { Box, Container, Grid } from "@mui/material";
import CartProduct from "./cartProduct";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import GetAllCartHok from "../../hook/cart/get-all-user-cart-hook";
import React, { useEffect, useState } from "react";
import UseNotification from "../../hook/useNotification";

const CartContainerPage = () => {
  const [loading,numberOfItems]=GetAllCartHok()

  return (
    <Container>
      <div className="pt-5">shoping cart</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={1}>
          <Grid item xs={12} md={12} lg={9} className="break-words">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </Grid>

          <Grid item xs={12} md={12} lg={2.9} className="break-words">
            <Checkout />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CartContainerPage;
