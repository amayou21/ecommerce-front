import React from "react";
import Logo from "../../images/logo.png";
import { Brightness4, Brightness7, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import NavBarSearchHook from "../../hook/search/navBar-search-hook";
import { styled, alpha } from "@mui/material/styles";

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

const NewNavBar = ({ setMode }) => {
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

      <div>
        {currentUser ? (
          <IconButton
            sx={{ p: 0 }}
            size="small"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            {currentUser.profileImage ? (
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            ) : (
              <Avatar>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
            )}
          </IconButton>
        ) : (
          <Link
            to={"/login"}
            underline="none"
            color="inhiret"
            className="bg-gradient-to-r from-primary to-secondary  duration-200  py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span>Login</span>

            {/* <ShoppingCart className="text-xl drop-shadow-sm cursor-pointer" /> */}
          </Link>
        )}
      </div>

      <div>
        {!currentUser ? (
          <Link
            to={"/register"}
            underline="none"
            color="inhiret"
            className="bg-gradient-to-r from-primary to-secondary  duration-200  py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <Typography variant="body1" color="inherit">
              Sign Up
            </Typography>

            {/* <ShoppingCart className="text-xl drop-shadow-sm cursor-pointer" /> */}
          </Link>
        ) : null}
      </div>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <div
          sx={{ justifyContent: "space-around" }}
          className={`${theme.palette.AppBarbackgroundColor}`}
        >
          <div className="container flex justify-between items-center py-2">
            <div>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  to={"/"}
                  underline="none"
                  color="inhiret"
                  className="font-bold text-2xl sm:text-3xl flex gap-2"
                >
                  <img src={Logo} alt="Logo" className="w-10" />
                  pharma spectra
                </Link>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Link
                  to={"/"}
                  underline="none"
                  color="inhiret"
                  className="font-bold text-2xl sm:text-3xl flex gap-2"
                >
                  <img src={Logo} alt="Logo" className="w-10 p-0 m-0" />
                 
                </Link>
              </Box>
            </div>

            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              {/* <div className="relative group hidden sm:block">
                <input
                  value={word}
                  onChange={(e) => {
                    onChangeWord(e.target.value);
                  }}
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div> */}

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={word}
                  onChange={(e) => {
                    onChangeWord(e.target.value);
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {/* order button */}

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  to={"/cart"}
                  underline="none"
                  color="inhiret"
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200  py-1 px-4 rounded-full flex items-center gap-3 group"
                >
                  <span className="group-hover:block hidden transition-all duration-200">
                    Cart
                  </span>

                  <ShoppingCart className="text-xl drop-shadow-sm cursor-pointer" />
                </Link>
              </Box>

              {/* dark-light-mode-icon*/}
              <Box>
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

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {currentUser ? (
                  <IconButton
                    sx={{ p: 0 }}
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    {currentUser.profileImage ? (
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    ) : (
                      <Avatar>
                        {currentUser.name.charAt(0).toUpperCase()}
                      </Avatar>
                    )}
                  </IconButton>
                ) : (
                  <Link
                    to={"/login"}
                    underline="none"
                    color="inhiret"
                    className="bg-gradient-to-r from-primary to-secondary  duration-200  py-1 px-4 rounded-full flex items-center gap-3 group"
                  >
                    <span>Login</span>

                    {/* <ShoppingCart className="text-xl drop-shadow-sm cursor-pointer" /> */}
                  </Link>
                )}
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {!currentUser ? (
                  <Link
                    to={"/register"}
                    underline="none"
                    color="inhiret"
                    className="bg-gradient-to-r from-primary to-secondary  duration-200  py-1 px-4 rounded-full flex items-center gap-3 group"
                  >
                    <Typography variant="body1" color="inherit">
                      Sign Up
                    </Typography>

                    {/* <ShoppingCart className="text-xl drop-shadow-sm cursor-pointer" /> */}
                  </Link>
                ) : null}
              </Box>

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
            </div>
          </div>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NewNavBar;

// import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import { useSelector } from "react-redux";

// // Optimized webp image
// import Logo from "../../images/logo.png";
// // Lazy loaded MUI components/icons
// const Badge = lazy(() => import("@mui/material/Badge"));
// const Menu = lazy(() => import("@mui/material/Menu"));
// const MenuItem = lazy(() => import("@mui/material/MenuItem"));
// const SearchIcon = lazy(() => import("@mui/icons-material/Search"));
// const AccountCircle = lazy(() => import("@mui/icons-material/AccountCircle"));


// const NewNavBar = ({ onChangeWord, search, onSearchClick }) => {
//   const navigate = useNavigate();
//   const cartItems  = useSelector((state) => state.cart);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [debouncedWord, setDebouncedWord] = useState("");
//   const [localWord, setLocalWord] = useState("");
//   const currentUser = JSON.parse(localStorage.getItem("user"));

//   const isLoggedIn = !!currentUser;
//   const isAdmin = isLoggedIn && currentUser.role === "admin";
//   const profileInitial = currentUser?.name?.charAt(0)?.toUpperCase() || "";

//   useEffect(() => {
//     const savedKeyword = localStorage.getItem("keyWord");
//     if (savedKeyword) {
//       setDebouncedWord(savedKeyword);
//       setLocalWord(savedKeyword);
//     }
//   }, []);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       onChangeWord(debouncedWord);
//     }, 300);
//     return () => clearTimeout(handler);
//   }, [debouncedWord, onChangeWord]);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     window.location.pathname = "/";
//   };

//   return (
//     <div className="bg-white h-[65px] sticky top-0 z-50 shadow-md">
//       <div className="h-full w-full flex items-center justify-between px-3 md:px-10">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={Logo} alt="Logo" className="h-9" loading="lazy" />
//           <span className="text-lg font-bold">eCommerce</span>
//         </Link>

//         <div className="hidden md:flex items-center rounded border border-gray-400 px-2 py-1 w-[500px]">
//           <input
//             value={debouncedWord}
//             onChange={(e) => setDebouncedWord(e.target.value)}
//             type="text"
//             placeholder="Search"
//             className="flex-grow outline-none bg-transparent text-gray-800"
//           />
//           <Suspense fallback={<div />}>
//             <SearchIcon
//               onClick={onSearchClick}
//               className="cursor-pointer text-gray-500 hover:text-black"
//             />
//           </Suspense>
//         </div>

//         <div className="flex items-center gap-4">
//           <Suspense fallback={<div />}>
//             <Badge
//               badgeContent={cartItems?.length || 0}
//               color="primary"
//               onClick={() => navigate("/cart")}
//               className="cursor-pointer"
//             >
//               <i className="fas fa-shopping-cart text-lg"></i>
//             </Badge>
//           </Suspense>

//           {isLoggedIn ? (
//             <div>
//               <Avatar
//                 onClick={handleProfileMenuOpen}
//                 className="cursor-pointer bg-blue-600"
//               >
//                 {profileInitial}
//               </Avatar>
//               <Suspense fallback={null}>
//                 <Menu
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem onClick={() => { handleMenuClose(); navigate("/orders"); }}>
//                     Orders
//                   </MenuItem>
//                   <MenuItem onClick={() => { handleMenuClose(); navigate("/profile"); }}>
//                     Profile
//                   </MenuItem>
//                   {isAdmin && (
//                     <MenuItem onClick={() => { handleMenuClose(); navigate("/admin/dashboard"); }}>
//                       Admin Dashboard
//                     </MenuItem>
//                   )}
//                   <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </Suspense>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="text-white bg-blue-600 py-1 px-3 rounded hover:bg-blue-700 transition"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewNavBar;
