import React, { useEffect } from "react";
import { Container } from "@mui/material";
import BrandContainer from "../../component/brands/BrandContainer";
import PaginatePage from "../../component/utility/PaginatePage";
import { useDispatch, useSelector } from "react-redux";
import { AllBrand } from "../../Redux/actions/brandAction";

function AllBrandsPage() {
  // brands limit
  const limit = 6;

  const dispatch = useDispatch();
  // first load
  useEffect(() => {
    dispatch(AllBrand(limit));
  }, []);

  // get brands
  const res = useSelector((state) => state.allBrand.brand);
  const brands = res.data ? res.data.documents : [];
  // brands
  console.log(brands);
  // send page count to pagination
  const pageCount = res.data ? res.data.paginationResult.numberOfPages : 0;

  // second load with spesific page
  const getPage = (page) => {
    dispatch(AllBrand(limit, page));
  };
  return (
    <Container>
      <BrandContainer data={brands} />
      {pageCount > 1 ? (
        <PaginatePage pageCount={pageCount} getPage={getPage} />
      ) : null}
    </Container>
  );
}

export default AllBrandsPage;
