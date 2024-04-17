import React from "react";

import {
  Button,
  IconButton,
  Avatar,
  Rating,
  Box,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import OtherClientRating from "./OtherClientRating";
import StarIcon from "@mui/icons-material/Star";
import ProductRetingHook from "../../hook/review/product-reting-hook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Circle } from "@mui/icons-material";
import ReviewsIcon from "@mui/icons-material/Reviews";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value) => {
  return labels[value];
};

const ProductReting = ({ rateQty, rateAVg }) => {
  const { id } = useParams();
  const [
    comment,
    setComment,
    hover,
    setHover,
    value,
    setValue,
    reviews,
    handleSubmit,
    handleClose,
    open,
    setOpen,
  ] = ProductRetingHook(id);
  var user = {};
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  return (
    <div className="md:flex">
      <div className="w-full ">
        <Paper className="p-2 my-2">
          <div className="md:flex items-center my-2 ">
            <div className="flex xs:my-2">
              <Typography variant="body1" color="inherit">
                Ratings
              </Typography>

              <Rating
                className="mr-5"
                name="hover-feedback"
                value={rateAVg}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  // Do something when the rating changes, if needed
                }}
                readOnly // Disables user interaction
                emptyIcon={
                  <StarIcon
                    style={{ opacity: 0.55 }}
                    fontSize="text-slate-700"
                  />
                }
              />
            </div>

            <Typography variant="body1" color="inherit">
              (Number of raters :{rateQty})
            </Typography>
          </div>

          <div className="flex items-center my-2">
            <IconButton>
              {user ? (
                user.profileImage ? (
                  <Avatar alt="Cindy Baker" src={user.profileImage} />
                ) : user.name ? (
                  <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
                ) : (
                  <Avatar>
                    <Circle />
                  </Avatar>
                )
              ) : null}
            </IconButton>

            <Typography variant="body1" color="inherit">
              {user.name}
            </Typography>

            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="text-slate-700" />
              }
            />
          </div>
          <div>
            <Box className=" my-2">
              <TextField
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                fullWidth
                required
                multiline
                id="add-comment"
                label="add comment"
                placeholder="add comment"
                variant="outlined"
              />
            </Box>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              add comment
            </Button>
          </div>
        </Paper>
      </div>

      <div className=" p-2 grid grid-cols-1  w-full">
        {reviews && reviews.documents ? (
          reviews.documents.map((val, index) => {
            return <OtherClientRating key={index} prod={val} />;
          })
        ) : (
          <Paper className="flex justify-center items-center">
            <div>
              <p className="flex justify-center">No reviews for now</p>

              <div className="flex justify-center">
                <ReviewsIcon color="info" fontSize="large" />
              </div>
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default ProductReting;
