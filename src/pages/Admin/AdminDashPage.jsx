import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../component/Admin/Menu/SideMenu";

const AdminDashPage = ({ setMode }) => {
  return (
    <div className="flex p-3">
      <SideMenu setMode={setMode} />
      <Outlet />
    </div>
  );
};

export default AdminDashPage;
