import React from "react";
import {
  Button,
  Dialog,
  IconButton,
  Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import AddCoupon from "./AddCoupon";
import CancelIcon from "@mui/icons-material/Cancel";
import CouponCard from "./CouponCard";
import GetCouponsHook from "../../../hook/coupon/get-coupons-hook";

function Coupons() {
  const [
    fullScreen,
    openMadel,
    handleClose,
    setOpenMadel,
    coupons,
    handleClickOpen,
  ] = GetCouponsHook();

  return (
    <React.Fragment>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openMadel}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddCoupon setOpenMadel={setOpenMadel} />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleClose}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <React.Fragment>
        <div className="flex justify-between items-center">
          {coupons && coupons.documents && coupons.documents.length > 0 ? (
            <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
              {`You have ${coupons.documents.length} coupon`}
            </p>
          ) : null}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            add coupon
          </Button>
        </div>

        <div className="my-6 grid grid-cols-1 md:grid-cols-3">
          {coupons && coupons.documents && coupons.documents.length > 0
            ? coupons.documents.map((val, index) => {
                return (
                  <CouponCard
                    Coupon={val}
                    key={index}
                    setOpenMadel={setOpenMadel}
                  />
                );
              })
            : null}

          {coupons && coupons.documents && coupons.documents.length > 0 ? (
            <Paper className="flex flex-col gap-2 justify-center items-center overflow-hidden   shadow-lg my-2 mx-4 rounded-2xl  relative">
              <Button
                onClick={handleClickOpen}
                sx={{ width: "100%", height: "100%" }}
              >
                <div className="  flex justify-center items-center w-full h-[100%]">
                  <AddIcon fontSize="large" color="info" />
                </div>
              </Button>
            </Paper>
          ) : null}
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default Coupons;
