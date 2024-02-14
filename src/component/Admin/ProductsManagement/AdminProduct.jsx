import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import {
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/MoreVert";
import { deleteData } from "../../../hooks/services";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../Redux/actions/productAction";
import { useTheme } from "@emotion/react";

const AdminProduct = ({ prod }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleProfileMenuOpen = (event, val) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const prods = useSelector((state) => state.allProduct.deleteProd);

  const deleteProd = async () => {
    await dispatch(deleteProduct(prod._id));
    setOpen(false);
    setAnchorEl(false);
    window.location.reload();
  };

  const menuId = "primary-search-account-menu";
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(false);
  };

  const editProd = () => {
    navigate(`/admin/editproduct/${prod._id}`);
  };
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
      <MenuItem onClick={handleClickOpen}>
        <DeleteIcon color="error" />
        <p className="text-red-500">Delete</p>
      </MenuItem>

      <MenuItem onClick={editProd}>
        <EditIcon />
        <p>Edit</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{prod.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              you sure that you want to delete this product?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={deleteProd}>
              delete
            </Button>
            <Button onClick={handleClose} autoFocus>
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
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
            {`${prod.price}$`}
          </Typography>
        </div>
        {renderMenu}
      </Paper>
    </div>
  );
};

export default AdminProduct;
