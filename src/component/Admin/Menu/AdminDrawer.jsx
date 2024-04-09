import React from "react";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "../../utility/DashboardData";

const AdminDrawer = () => {
  const navigate = useNavigate();
  return (
    <List>
      {dashboardData.map((val, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(`/admin${val.link}`);
            }}
          >
            <div className="mr-2">{val.icon}</div>
            <Typography variant="p" component="p" color="inherit">
              {val.name}
            </Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AdminDrawer;
