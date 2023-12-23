import React, { useEffect } from "react";
import {  Container } from "@mui/material";
import BrandCard from "./BrandCard";
import { useDispatch, useSelector } from "react-redux";
import { AllBrand } from "../../Redux/actions/brandAction";

import Progress from "../utility/progress";

function BrandContainer({ data }) {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(AllBrand(10));
  // }, []);

  // const data = useSelector((val) => val.allBrand.brand);
  const loading = useSelector((val) => val.allBrand.loading);

  return (
    <Container className="mt-2">
      {loading ? (
        Progress()
      ) : (
        <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-4">
          {data? (
            data.map((val, index) => {
              return <BrandCard key={index} img={val.image} name={val.name} />;
            })
          ) : (
            <p>no brands</p>
          )}
        </div>
      )}
    </Container>
  );
}

export default BrandContainer;
