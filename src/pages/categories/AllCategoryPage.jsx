import React, { useEffect } from "react";
import CategoryContainerPage from "../../component/category/CategoryContainerPage";
import { Container } from "@mui/material";
import PaginatePage from "../../component/utility/PaginatePage";
import {AllCategory} from "../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

function AllCategoryPage() {
  // categories imit
  const limit = 6;

  const dispatch = useDispatch();
  // first load
  useEffect(() => {
    dispatch(AllCategory(limit));
  }, []);

  // get categories
  const data = useSelector((state) => state.allCategory.category);

  // send page count to pagination
  const pageCount = data.paginationResult
    ? data.paginationResult.numberOfPages
    : 0;

  // second load with spesific page
  const getPage = (page) => {
    dispatch(AllCategory(limit, page));
  };

  // result
  return (
    <Container>
      <CategoryContainerPage data={data.documents} />
      {pageCount > 1 ? (
        <PaginatePage pageCount={pageCount} getPage={getPage} />
      ) : null}
    </Container>
  );
}

export default AllCategoryPage;
