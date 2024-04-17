import React from "react";
import { Container } from "@mui/material";
import Subtitle from "../utility/Subtitle";
import ProductCard from "./productCard";
import ProductContainerHook from "../../hook/product/product-container-hook";

const CardProductContainer = ({ title, btntitle, pathText, products }) => {
  const [isFavorit]=ProductContainerHook()
  return (
    <Container>
      <div className="mt-6">
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
        {/* <div className="drop-shadow-2xl grid grid-cols-1 gap-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 place-items-center"> */}
        <div className="grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          {products
            ? products.length > 0
              ? products.map((item, index) => {
                  return (
                    <div
                      data-aos="zoom"
                      data-aos-delay={index * 200}
                      key={index}
                      className="space-y-3"
                    >
                      <ProductCard
                        className="space-y-3"
                        key={index}
                        prod={item}
                        isFavorit={isFavorit}
                      />
                    </div>
                  );
                })
              : null
            : null}
        </div>
      </div>
    </Container>
  );
};
export default CardProductContainer;
