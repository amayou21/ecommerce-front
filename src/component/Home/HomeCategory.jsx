import React, { useEffect } from "react";
import Subtitle from "../utility/Subtitle";
import { CircularProgress, Container } from "@mui/material";
import CategoryCard from "../category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import AllCategory from "../../Redux/actions/categoryAction";

const HomeCategory = ({ title, btntitle, pathText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllCategory(6));
  }, []);
  const data = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return (
    <Container>
      <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-2">
          {data.documents ? (
            data.documents.map((val, index) => {
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
