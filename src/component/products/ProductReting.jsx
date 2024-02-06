import React from "react";
import { Grid, Button, IconButton, Avatar } from "@mui/material";

import UnstyledTextareaIntroduction from "../utility/Textarea";

import OtherClientRating from "./OtherClientRating";
import img1 from "../../images/img1.png";

const ProductReting = () => {
  return (
    <Grid item sm={12} xs={12} lg={12} md={12} className="shadow-2xl mt-2">
      <div className="flex items-center">
        <IconButton>
          <Avatar src={img1} sx={{ width: 24, height: 24 }} />
        </IconButton>
        <p>User Name</p>
      </div>

      <UnstyledTextareaIntroduction text="add comment" />
      <Button variant="contained" color="primary">
        add comment
      </Button>

      <OtherClientRating />
      <OtherClientRating />
      <OtherClientRating />
    </Grid>
  );
};

export default ProductReting;
