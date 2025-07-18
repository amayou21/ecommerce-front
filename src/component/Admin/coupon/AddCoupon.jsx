import React from "react";
import { ToastContainer } from "react-toastify";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import AddCouponHook from "../../../hook/coupon/add-coupon-hook";

const AddCoupon = ({ setOpenMadel }) => {
  const [
    name,
    setName,
    expire,
    setExpire,
    descount,
    setdescount,
    handleSubmit,
    handleClose,
    open
  ] = AddCouponHook(setOpenMadel);

  return (
    <React.Fragment>
      <Typography variant="body1" color="inherit">
        Create Coupon
      </Typography>
      <div className="flex justify-center items-center">
        <div className="mb-20" component="form">
          <Box className="px-2 mt-2">
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Box>

          <Box className="px-2 mt-2">
            <TextField
              required
              fullWidth
              id="Category"
              label="expire"
              type="date"
              value={expire}
              onChange={(e) => {
                setExpire(e.target.value);
              }}
            />
          </Box>
          <Box className="px-2 mt-2">
            <TextField
              value={descount}
              onChange={(e) => {
                setdescount(e.target.value);
              }}
              fullWidth
              required
              type="number"
              id="discount"
              label="discount"
              placeholder="discount"
              variant="outlined"
            />
          </Box>

          <Box className="px-2 mt-2 flex justify-start">
            <Button variant="contained" onClick={handleSubmit}>
              create
            </Button>
          </Box>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default AddCoupon;
