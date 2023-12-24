import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AllCategory } from "../../Redux/actions/categoryAction";
const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllCategory(8, 1));
  }, []);
  const res = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return [loading, res];
};

export default HomeCategoryHook;