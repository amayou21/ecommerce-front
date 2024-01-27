import { Typography } from "@mui/material";
import React from "react";
import UserOrderCard from "./userOrderCard";

const UserAllOrderItem = () => {
  return (
    <div className="outline outline-offset-2 outline-[#009688] rounded outline-2 mt-5 ">
      <Typography
        variant="h6"
        color="inherit"
        className="p-3  "
        sx={{ color: "orange" }}
      >
        Order Number #1253
      </Typography>
      <UserOrderCard />
      <UserOrderCard />
      <div className="flex justify-between items-center p-3">
        <Typography variant="p" color="inherit" sx={{ color: "#009688" }}>
          Status : <span>In Progress</span>
        </Typography>
        <Typography variant="p" color="inherit" sx={{ color: "orange" }}>
          220$
        </Typography>
      </div>
    </div>
  );
};

export default UserAllOrderItem;
