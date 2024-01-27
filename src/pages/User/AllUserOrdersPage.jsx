import React from "react";
import PaginatePage from "../../component/utility/PaginatePage";
import UserOrderManagement from "../../component/user/UserOrderManagement";

const AllUserOrdersPage = () => {
  return (
    <div>
      <UserOrderManagement />
      <PaginatePage />
    </div>
  );
};

export default AllUserOrdersPage;
