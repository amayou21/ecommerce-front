import React from "react";
import Typography from "@mui/material/Typography";
import CartProduct from "../../component/cart/cartProduct";
import UserInfo from "../../component/utility/UserInfo";

const OrderDetaillsPage = () => {
  return (
    <div>
      <Typography variant="h5" color="inherit" className="py-2">
        Order Nuber 1525
      </Typography>
      <CartProduct />
      <CartProduct />
      <UserInfo />
    </div>
  );
};

export default OrderDetaillsPage;
