import React from "react";
import SideMenu from "./Menu/SideMenu";
import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  fixedSideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 240, // Adjust the width as needed
    height: "100%", // Set a fixed height for the side menu
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  content: {
    marginLeft: 240, // Make sure this matches the width of the side menu
    padding: theme.spacing(3),
  },
}));

const AdminPageContainer = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminPageContainer;
