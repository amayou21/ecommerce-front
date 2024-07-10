import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../../hook/coupon/edit-coupon-hook";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function EditCoupon() {
  const [
    cp,
    name,
    descount,
    expire,
    setName,
    setdescount,
    openDelProgress,
    handleClose,
    setExpire,
    handleEditeCoupon,
  ] = EditCouponHook();
  // console.log(name,expire,descount);
  return (
    <React.Fragment>
      <Typography variant="body1" color="inherit">
        Edit Coupon
      </Typography>
      <div className="flex justify-center items-center">
        <div className="mb-20" component="form">
          <Box className="px-2 my-5 flex justify-start">
            <Link to="/admin/add-coupon">
              <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                Go back
              </Button>
            </Link>
          </Box>
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
            <Button variant="contained" onClick={handleEditeCoupon}>
              Edit
            </Button>
          </Box>
          <Box className="px-2 mt-2 flex justify-start">
            {/* <Button variant="contained" onClick={handleSubmit}>
            Edit
          </Button> */}
          </Box>
          {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
        </div>
        <ToastContainer />
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDelProgress}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}

export default EditCoupon;
