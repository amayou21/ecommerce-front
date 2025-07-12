import React from "react";
import { Container } from "@mui/material";
import CategoryCard from "./CategoryCard";
import img3 from "../../images/img3.png";
import { useSelector } from "react-redux";
import Progress from "../utility/progress";

function CategoryContainerPage({ data }) {
  const loading = useSelector((state) => state.allCategory.loading);
  return (
    <Container>
      {loading ? (
        Progress()
      ) : (
        <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-4">
          {data.length > 0 ? (
            data.map((val, index) => (
              <div>
                {" "}
                <CategoryCard
                  key={index}
                  desc={val.name}
                  image={val.image ? val.image : img3}
                  background="bg-gradient-to-r from-blue-200 to-cyan-200"
                />
              </div>
            ))
          ) : (
            <p style={{ color: "#d50000" }}>No categories</p>
          )}
        </div>
      )}
    </Container>
  );
}
export default CategoryContainerPage;
