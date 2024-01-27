import React from "react";
import Subtitle from "../utility/Subtitle";
import { Container } from "@mui/material";
import CategoryCard from "../category/CategoryCard";
import Progress from "../utility/progress";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = ({ title, btntitle, pathText }) => {
  // listening
  const [loading, res] = HomeCategoryHook();

  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
      {loading ? (
        Progress()
      ) : (
        <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-8 md:grid-cols-3 place-items-center p-2">
          {res.data.documents.length > 0 ? (
            res.data.documents.map((val, index) => {
              return (
                <CategoryCard
                  key={index}
                  desc={val.name}
                  image={val.image}
                  background="bg-gradient-to-r from-blue-200 to-cyan-200"
                />
              );
            })
          ) : (
            <p style={{ color: "#d50000" }}>No categories</p>
          )}
        </div>
      )}
    </Container>
  );
};
export default HomeCategory;
