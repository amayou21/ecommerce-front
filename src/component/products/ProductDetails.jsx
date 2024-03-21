import React from "react";
import ProductReting from "./ProductReting";
import { Container } from "@mui/material";
import ProductGallery from "./ProductGallery";
import PaginatePage from "../utility/PaginatePage";
import ProductDetailsHook from "../../hook/product/product-details-hook";

const ProductDetails = () => {
  const [product, images, prodLike] = ProductDetailsHook();

  var rateQty = 0;
  var rateAVg = 0;

  if (product) {
    rateQty = product.ratingQuantity;
    rateAVg = product.ratingsAverage;
  }

  return (
    <Container>
      <ProductGallery />
      <ProductReting rateQty={rateQty} rateAVg={rateAVg} />
      <PaginatePage />
    </Container>
  );
};
export default ProductDetails;
