import React from "react";
import { Typography } from "@mui/material";
import AddCoupon from "../../component/Admin/coupon/AddCoupon";
import Coupons from "../../component/Admin/coupon/Coupons";

function CouponPage() {
  return (
    <div className="w-[100%]">
      <div className="mt-4">
        <Coupons />
        {/* <Typography variant="body1" color="inherit">
          Create Coupon
        </Typography>
        <AddCoupon /> */}
      </div>
    </div>
  );
}

export default CouponPage;
