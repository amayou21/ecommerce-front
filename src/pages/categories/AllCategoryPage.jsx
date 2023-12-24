import React from "react";
import CategoryContainerPage from "../../component/category/CategoryContainerPage";
import { Container } from "@mui/material";
import PaginatePage from "../../component/utility/PaginatePage";
import AddCategoryPageHook from "../../hook/category/add-category-page-hook";

function AllCategoryPage() {
  // listenign
  const [categories, pageCount, getPage] = AddCategoryPageHook();

  // result
  return (
    <Container>
      <CategoryContainerPage data={categories} />
      {pageCount > 1 ? (
        <PaginatePage pageCount={pageCount} getPage={getPage} />
      ) : null}
    </Container>
  );
}

export default AllCategoryPage;
