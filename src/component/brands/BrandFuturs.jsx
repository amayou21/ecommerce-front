import React, { useEffect } from "react";
// import BrandCard from "./BrandCard";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Subtitle from "../utility/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import { AllBrand } from "../../Redux/actions/brandAction";
import img1 from "../../images/img1.png";
import BrandCard from "./BrandCard";
const BrandFuturs = ({ title, btntitle, pathText }) => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(AllBrand(6,1));
  }, []);

  const res = useSelector((val) => val.allBrand.brand);
  const loading = useSelector((val) => val.allBrand.loading);
  console.log(res);
  return (
    <Container className="mt-2">
      <Subtitle title={title} btntitle={btntitle} pathText={pathText} />

      {loading ? (
        <div className="flex justify-center">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-2">
          {res.data.documents ? (
            res.data.documents.map((val, index) => {
              return <BrandCard key={index} img={val.image} name={val.name} />;
            })
          ) : (
            <p>no brands</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default BrandFuturs;
