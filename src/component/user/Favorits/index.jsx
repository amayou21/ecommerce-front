import React from "react";
import ProductCard from "../../products/productCard";
import WishListHook from "../../../hook/wishList/wishList-hook";

const Index = () => {
  const [prods,isFavorit]=WishListHook()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {prods && prods.data
        ? prods.data.map((prod, index) => {
            return (
              <ProductCard key={index} prod={prod} isFavorit={isFavorit} />
            );
          })
        : null}
    </div>
  );
};
export default Index;