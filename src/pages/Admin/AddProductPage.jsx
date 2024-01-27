import React from "react";
import AddProduct from "../../component/Admin/AddProduct/Index";
import Typography from "@mui/material/Typography";
const AddProductPage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="h5" color="inherit">
        Add New Product
      </Typography>

      <div className="flex justify-center items-center mt-4">
        <AddProduct />
      </div>
    </div>
  );
};

export default AddProductPage;
