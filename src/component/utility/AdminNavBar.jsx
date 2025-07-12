import * as React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@emotion/react";

import {
  Badge,
  useMediaQuery,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { useNavigate } from "react-router-dom";

import AdminDrawer from "../Admin/Menu/AdminDrawer";

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
  // const navigate = useNavigate();

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
              dashboard
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
            <AdminDrawer />
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );

  return (
    <Box className="flex">
      <Box>
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

      {!(isMediumScreen || isExtraLargeScreen) && renderMobileMenu}
    </Box>
  );
};

export default AdminNavBar;
