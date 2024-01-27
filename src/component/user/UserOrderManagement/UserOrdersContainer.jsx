import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import UserAllOrderItem from "./UserAllOrderItem";

const UserOrdersContainer = () => {
  return (
    <div>
      <Typography variant="h5" color="inherit">
        {" "}
        Hi Amaguar Youssef{" "}
      </Typography>
      <Box>
        <UserAllOrderItem />
        <UserAllOrderItem />
      </Box>
    </div>
  );
};

export default UserOrdersContainer;
