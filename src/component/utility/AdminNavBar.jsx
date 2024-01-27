import * as React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@emotion/react";
import {
  Badge,
  Link,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";

import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "./DashboardData";
const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const AdminNavBar = ({ window, setMode }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isExtraLargeScreen = useMediaQuery((theme) =>
    theme.breakpoints.up("xl")
  );
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mobileMenuId = "primary-search-account-menu-mobile";
  const navigate = useNavigate();

  //@desc mobile menu render
  const renderMobileMenu = (
    <Box sx={{ xs: "flex", md: "none", xl: "none" }}>
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />

        <Box sx={{ textAlign: "center", pt: 1 }}>
          <Button onClick={toggleDrawer(true)}>Open</Button>
        </Box>

        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              xs: "flex",
              md: "none",
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              Dashboard
            </Typography>
          </StyledBox>

          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
              xs: "flex",
              md: "none",
            }}
          >
            <div className="w-[100%] h-[100%] mt-[56px] md:mt-[63px] xl:mt-[56px] p-1">
              <List>
                {dashboardData.map((val, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/admin${val.link}`);
                        setOpen(false);
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
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{ justifyContent: "space-between", zIndex: 5 }}
          className={`${theme.palette.AppBarbackgroundColor}`}
        >
          {/* 1 */}
          <Box className="w-[240px]">
            <Link href={"/admin"} underline="none" color="inhiret">
              <Typography
                variant="h6"
                noWrap={false}
                component="div"
                marginRight={1}
              >
                Dashboard
              </Typography>
            </Link>
          </Box>
          {/* 3 */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
            className="items-center"
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton sx={{ ml: 1 }}>
                <Badge badgeContent={2} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  localStorage.setItem(
                    "currentTheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode(theme.palette.mode === "light" ? "dark" : "light");
                  if (typeof window !== "undefined") {
                    window.location.reload();
                  }
                }}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7 sx={{ color: "orange" }} />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </Box>
          </Box>

          {/* 4 dark-light-mode-icon*/}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setMode(theme.palette.mode === "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Box>

          {/* 4 */}
          <Box
            sx={{
              display: { xs: "flex", md: "none", textAlign: "center", pt: 1 },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {!(isMediumScreen || isExtraLargeScreen) && renderMobileMenu}
    </Box>
  );
};

export default AdminNavBar;
