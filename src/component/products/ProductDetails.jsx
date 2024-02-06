import React from "react";
import ProductReting from "./ProductReting";
import { Container } from "@mui/material";
import ProductGallery from "./ProductGallery";

const ProductDetails = () => {
  return (
    <Container >
      <ProductGallery />
      <ProductReting />
    </Container>
  );
};
export default ProductDetails;
