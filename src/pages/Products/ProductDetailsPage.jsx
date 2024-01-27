import React from "react";
import CategoryHeader from "../../component/category/CategoryHeader";
import ProductDetails from "../../component/products/ProductDetails";
import PaginatePage from "../../component/utility/PaginatePage";
import CardProductContainer from "../../component/products/CardProductContainer";
const ProductDetailsPage = () => {
  return (
    <div>
      <CategoryHeader />
      <ProductDetails />
      <CardProductContainer
        title="products you can like"
        btntitle="show more"
        pathText="/product-tshop"
      />

      <PaginatePage />
    </div>
  );
};
export default ProductDetailsPage;
