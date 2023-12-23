import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../../images/img1.png";

const BrandCard = ({ img, name }) => {
  return (
    <Box className="text-center ">
      <div className="flex justify-between items-center rounded-md   p-2">
        <div className={`h-[50%] w-[70%]  rounded-md overflow-hidden mb-3`}>
          <img className="w-full" src={img} alt="img1" />
          <Typography variant="p" color="inhiret">
            {name}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default BrandCard;
