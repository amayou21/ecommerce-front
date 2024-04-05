import React from "react";
import { Container } from "@mui/material";
import Subtitle from "../utility/Subtitle";
import ProductCard from "./productCard";

const CardProductContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container>
      <div className="mt-6">
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
        <div className="drop-shadow-2xl grid grid-cols-1 gap-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 place-items-center">
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
