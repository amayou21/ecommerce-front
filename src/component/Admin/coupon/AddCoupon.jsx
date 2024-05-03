import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../../../hook/useNotification";
import { createCoupon } from "../../../Redux/actions/couponAction";
const AddCoupon = ({ setOpenMadel }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [descount, setdescount] = useState(0);
  const [expire, setExpire] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState();
  const coupon = useSelector((state) => state.coupons.createCoupon);
  if (coupon) console.log(coupon);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      UseNotification("you're Offline", "error");
      return;
    }
    if (!name || !descount || !expire) {
      // console.log(name, descount, expire);
      setLoading(false);
      UseNotification("pleas enter the coupon property", "warning");
      // setOpen(false);
    } else if (name && descount > 0 && expire) {
      setLoading(true);
      await dispatch(createCoupon({ name, discount: descount, expire }));
      setLoading(false);
      setCheck(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (
        coupon === "error : AxiosError: Request failed with status code 401"
      ) {
        setOpen(false);
        UseNotification("You are not allowed to access this route", "error");
        return;
      }

      setOpen(false);
      if (coupon) {
        if (coupon && check) {
          if (coupon.status) {
            if (coupon.status === 201) {
              setLoading(false);
              // setImage("");
              // setName("");
              UseNotification("created successfuly!", "success");
              setTimeout(() => {
                setOpenMadel(false);
              }, 1000);
            } else {
              setLoading(false);
              UseNotification(coupon.data.errors[0].msg, "error");
            }
          }
        }
      }
    } else {
      setOpen(true);
    }
    setCheck(false);
  }, [loading]);

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
