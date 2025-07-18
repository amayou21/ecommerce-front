// import React from "react";
// import { AppBar } from "@mui/material";
// import AdminNavBar from "../../Utility/AdminNavBar";
import * as React from "react";
import AdminNavBar from "../../utility/AdminNavBar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdminDrawer from "./AdminDrawer";

const SideMenu = ({ setMode }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const drawerWidth = open ? 240 : 0;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: { sx: "0px", md: `calc(100% - ${drawerWidth}px)` },
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{bgcolor:"primary"}}>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                display: { xs: "none", md: "flex", textAlign: "center", pt: 1 },
                mr: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdminNavBar setMode={setMode} />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          display: { xs: "none", md: "flex", textAlign: "center", pt: 1 },

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: { xs: "none", md: "flex" },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <Typography variant="body1" color="inherit">
            Dashboard 
          </Typography> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <AdminDrawer />
      </Drawer>
    </Box>
  );
};

export default SideMenu;
