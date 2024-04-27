import React from 'react'
import { Typography } from "@mui/material";
import AddCoupon from '../../component/Admin/AddCoupon';

function AddCouponPage() {
  return (
    <div className="w-[100%]">
      <Typography variant="body1" color="inherit">
        Create Coupon
      </Typography>
      <div className="flex justify-center items-center mt-4">
        <AddCoupon />
      </div>
    </div>
  )
}

export default AddCouponPage
