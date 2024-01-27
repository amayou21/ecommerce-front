import React from "react";
import AddBrand from "../../component/Admin/AddBrand/Index";
import Typography from "@mui/material/Typography";

const AddBrandPage = () => {
  return (
    <div className="w-[100%]">
      <Typography sx={{ width: "100%" }} variant="h5" color="inherit">
        Add New Brand
      </Typography>

      <div className="flex justify-center items-center mt-4">
        <AddBrand />
      </div>
    </div>
  );
};

export default AddBrandPage;
