import React, { useEffect } from "react";

import { AllCategory } from "../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const AddCategoryPageHook = () => {
  // categories limit
  const limit = 6;

  const dispatch = useDispatch();
  // first load
  useEffect(() => {
    dispatch(AllCategory(limit));
  }, []);

  // get categories
  const res = useSelector((state) => state.allCategory.category);
  // categories
  const categories = res.data ? res.data.documents : [];
  // send page count to pagination
  const pageCount = res.data ? res.data.paginationResult.numberOfPages : 0;

  // second load with spesific page
  const getPage = (page) => {
    dispatch(AllCategory(limit, page));
  };
  return [categories, pageCount, getPage];
};

export default AddCategoryPageHook;
