import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {dashboardData} from "../../utility/DashboardData"
import { useTheme } from "@emotion/react";
const drawerWidth = 240;

const AdminDrawer = () => {
  const theme=useTheme()
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 1,
          display: { xs: "none", md: "flex" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <p>  Reale Estate</p> */}
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <div className="w-[100%] h-[100%] mt-[56px] md:mt-[63px] xl:mt-[56px] p-1">
          <List>
            {dashboardData.map((val, index) => (
              <ListItem key={index} disablePadding >
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
        </div>
      </Drawer>
    </div>
  );
};

export default AdminDrawer;
