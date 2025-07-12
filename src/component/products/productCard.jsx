import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  IconButton,
  Paper,
  Rating,
  Typography,
  CircularProgress,
} from "@mui/material";

import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import {
  AddProdToWish,
  deleFromWishList,
} from "../../Redux/actions/wishListAction";

import UseNotification from "../../hook/useNotification";
import ProductCardHook from "../../hook/product/product-card-hook";
import { ToastContainer } from "react-toastify";

const ProductCard = ({ prod, isFavorit }) => {
  const [addOrDel, open, color] = ProductCardHook(prod, isFavorit );

  return (
    <Paper className=" shadow-lg rounded-full max-w-sm">
      <Link to={`/product/${prod._id}`} data-aos="zom-in">
        <img src={prod.imageCover} />
      </Link>

      <div className="px-5 py-2">
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          className="px-2  max-h-10 break-all overflow-hidden whitespace-wrap overflow-ellipsis"
        >
          {prod.title}
        </Typography>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between px-2 py-2">
          <Rating name="hover-feedback" value={2} readOnly />
        </div>

        <div className={`flex justify-between items-center `}>
          <IconButton aria-label="" onClick={addOrDel}>
            {open ? (
              <CircularProgress size="25px" color="primary" />
            ) : (
              <Favorite color={color} />
            )}
          </IconButton>

          <IconButton>
            <ShareIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" className="p-2">
            <span className="text-3xl font-bold">{`${prod.price}$`}</span>
          </Typography>
        </div>
      </div>
      <ToastContainer />

    </Paper>
  );
};
export default ProductCard;
