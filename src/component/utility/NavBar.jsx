import * as React from "react";
import { Brightness4, Brightness7, ShoppingCart } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@emotion/react";
// import { Link } from "@mui/material";
import NavBarSearchHook from "../../hook/search/navBar-search-hook";
import { Navigate, Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import UseNotification from "../../hook/useNotification";
import logo from "../../images/logo.png";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = ({ setMode }) => {
  const [searchWord, onChangeWord, currentUser] = NavBarSearchHook();

  let word;
  if (localStorage.getItem("keyWord")) {
    word = localStorage.getItem("keyWord");
  }

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser ? (
        <Link to={"/"} underline="none" color="inhiret">
          <MenuItem
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              window.location.pathname = "/";
            }}
          >
            Logout
          </MenuItem>
        </Link>
      ) : (
        <Link to={"/login"} underline="none" color="inhiret">
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>
        // <Link to={"/register"} underline="none" color="inhiret">
        //   <MenuItem onClick={handleMenuClose}>Sign up</MenuItem>
        // </Link>
      )}

      {currentUser ? (
        <Link to="/user/profile">
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Link>
      ) : null}

      {currentUser ? (
        currentUser.role === "admin" ? (
          <Link to="/admin">
            <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
          </Link>
        ) : null
      ) : null}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
        marginRight: "8px",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to={"/cart"} underline="none" color="inhiret">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{ justifyContent: "space-around" }}
          className={`${theme.palette.AppBarbackgroundColor}`}
        >
          {/* 1 */}
          <Link to={"/"} underline="none" color="inhiret">
            <Typography
              variant="h6"
              noWrap={false}
              component="div"
              marginRight={1}
            >
              <img src={logo} width="70px" height="70px" />
            </Typography>
          </Link>

          {/* 2 */}
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
          </div>

          {/* 3 */}
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="items-center"
          >
            <Link to={"/cart"} underline="none" color="inhiret">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {currentUser ? (
                currentUser.profileImage ? (
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                ) : (
                  <Avatar>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
                )
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>

          {/* 4 dark-light-mode-icon*/}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                localStorage.setItem(
                  "currentTheme",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode(theme.palette.mode === "light" ? "dark" : "light");
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

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default NavBar;
