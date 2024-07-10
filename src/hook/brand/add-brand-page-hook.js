import React from "react";
import { useDispatch } from "react-redux";

const AddBrandPageHook = () => {
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
  return [brands, pageCount, getPage];
};

export default AddBrandPageHook;
