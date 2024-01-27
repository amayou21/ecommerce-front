import React from "react";
import AddCategory from "../../component/Admin/AddCategory/Index";
import { Typography } from "@mui/material";

const AddCategoryPage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="body1" color="inherit">
        Create Category
      </Typography>
      <div className="flex justify-center items-center mt-4">
        <AddCategory />
      </div>
    </div>
  );
};

export default AddCategoryPage;
