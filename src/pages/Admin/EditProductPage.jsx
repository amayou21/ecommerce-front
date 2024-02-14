import React, { useEffect } from "react";
import EditProduct from "../../component/Admin/EditProduct";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/actions/productAction";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const prod = useSelector((state) => state.allProduct.oneProduct);
  useEffect(() => {
    const getProd = async () => {
      await dispatch(getOneProduct(id));
    };
    getProd();
  }, []);
  return (
    <div className="w-[100%]">
      {prod ? (
        prod.data ? (
          <Typography variant="div" color="inherit" className="py-3 flex">
            Edit Product :
            <Typography variant="h5" color="primary" className="ml-1">
              {prod.data.title}
            </Typography>
          </Typography>
        ) : null
      ) : null}

      <div className="flex justify-center items-center mt-4">
        <EditProduct />
      </div>
    </div>
  );
};

export default EditProductPage;
