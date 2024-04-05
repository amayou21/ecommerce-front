import React from "react";

import Typography from "@mui/material/Typography";
import { IconButton, Paper, Rating } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import ShareIcon from "@mui/icons-material/Share";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductCard = ({ prod }) => {
  return (
    <Paper class=" shadow-lg rounded-full max-w-sm">
      <Link to={`/product/${prod._id}`}  data-aos="zom-in">
        <img src={prod.imageCover} />
      </Link>

      <div className="px-5 py-2">
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          className="px-2  max-h-10 break-all overflow-hidden whitespace-wrap overflow-ellipsis"
        >
          {prod.description}...
        </Typography>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between px-2 py-2">
          <Rating name="hover-feedback" value={2} readOnly />
        </div>
        <div className={`flex justify-between items-center `}>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
          <IconButton>
            <ShareIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" className="p-2">
            <span className="text-3xl font-bold"> {`${prod.price}$`}</span>
          </Typography>
        </div>
      </div>
    </Paper>
  );
};
export default ProductCard;
