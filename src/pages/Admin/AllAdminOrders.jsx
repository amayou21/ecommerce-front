import React from "react";
import OrderManagement from "../../component/Admin/OrderManagement/Index";
import PaginatePage from "../../component/utility/PaginatePage";

const AllAdminOrders = () => {
  return (
    <div>
      <OrderManagement />
      <PaginatePage />
    </div>
  );
};

export default AllAdminOrders;
