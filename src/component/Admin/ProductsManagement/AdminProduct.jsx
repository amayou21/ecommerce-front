import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { IconButton, Paper, Menu, MenuItem, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/MoreVert";

const AdminProduct = ({ prod }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event, val) => {
    console.log(val);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <MenuItem onClick={handleMenuClose}>
        <DeleteIcon color="error" />
        <p className="text-red-500">Delete</p>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <EditIcon o />
        <p>Edit</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Paper className="rounded-md flex flex-col">
      <div className="flex justify-between items-center">
        <p className="px-2">{prod.title}</p>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      <div className="flex-grow">
        <Link to={`/product/${prod._id}`}>
          <img
            className="p-1 object-cover" // Adjust the height as needed
            src={prod.imageCover}
            alt="desc"
          />
        </Link>
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          className="px-2 max-h-10 break-all overflow-hidden whitespace-wrap overflow-ellipsis"
        >
          {prod.description}...
        </Typography>
      </div>
      <div className="flex justify-between px-2">
        <Typography variant="h6" color="orange">
          4.5
        </Typography>

        <Typography variant="h6" color="inherit">
          250 $
        </Typography>
      </div>
      {renderMenu}
    </Paper>
  );
};

export default AdminProduct;
