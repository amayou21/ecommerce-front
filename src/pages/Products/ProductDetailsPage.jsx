import React, { useEffect, useState } from "react";
import CategoryHeader from "../../component/category/CategoryHeader";
import ProductDetails from "../../component/products/ProductDetails";
import PaginatePage from "../../component/utility/PaginatePage";
import CardProductContainer from "../../component/products/CardProductContainer";
import ProductDetailsHook from "../../hook/product/product-details-hook";
const ProductDetailsPage = () => {
  const [product, images, prodLike] = ProductDetailsHook();


  return (
    <div>
      <CategoryHeader />
      <ProductDetails />
      <CardProductContainer
        products={prodLike}
        title="products you can like"
        btntitle="show more"
        pathText="/product-tshop"
      />

      <PaginatePage />
    </div>
  );
};
export default ProductDetailsPage;
