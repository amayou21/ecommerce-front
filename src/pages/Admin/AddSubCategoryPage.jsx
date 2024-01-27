import React from "react";
import AddSubCategory from "../../component/Admin/AddSubCategory/Index";
import Typography from "@mui/material/Typography";
const AddSubCategoryPage = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="h5" color="inherit" className="py-3">
        Add SubCategory
      </Typography>

      <div className="flex justify-center items-center mt-4">
        <AddSubCategory />
      </div>
    </div>
  );
};

export default AddSubCategoryPage;
