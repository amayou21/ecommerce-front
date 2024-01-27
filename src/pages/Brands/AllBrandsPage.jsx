import React from "react";
import { Container } from "@mui/material";
import BrandContainer from "../../component/brands/BrandContainer";
import PaginatePage from "../../component/utility/PaginatePage";
import AddCategoryPageHook from "../../hook/category/add-category-page-hook";

function AllBrandsPage() {
  const [brands, pageCount, getPage] = AddCategoryPageHook();

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
