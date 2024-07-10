import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import EditOrDelCouponHook from "../../../hook/coupon/edit-or-del-coupon-hook";
import { useNavigate } from "react-router-dom";

function CouponCard({ Coupon }) {
  const navigate = useNavigate();

  const [
    open,
    openDeleteCop,
    handledeleteCoupon,
    anchorEl,
    menuId,
    openDelProgress,
    isMenuOpen,
    handleMenuClose,
    openDelCop,
    fullScreen,
    handleClose,
    handleDelCopClose,
    handleProfileMenuOpen,
  ] = EditOrDelCouponHook(Coupon._id);

  const renderDelOrEditMenu = (
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
      <MenuItem onClick={openDeleteCop}>
        <DeleteIcon color="error" />
        <p className="text-red-500">Delete</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(`/admin/edit-coupon/${Coupon._id}`);
        }}
      >
        <EditIcon />
        <p>Edit</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <React.Fragment>
        {/* delete coupon */}
        <Dialog
          fullScreen={fullScreen}
          open={openDelCop}
          onClose={handleDelCopClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{Coupon.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              you sure that you want to delete this Coupon?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {!open ? (
              <Button autoFocus onClick={handledeleteCoupon}>
                delete
              </Button>
            ) : (
              // <p className="text-red-500">Delete</p>
              <CircularProgress color="inherit" />
            )}

            <Button onClick={handleDelCopClose} autoFocus>
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Paper className="flex flex-col  justify-between overflow-hidden  shadow-lg my-2 py-4 px-3 mx-4 rounded-2xl  relative">
        <div className="mb-4 z-40">
          <div className="flex w-full justify-between items-center">
            <p className="mb-[2px] ">{` ${Coupon.name}`} </p>
            <IconButton onClick={handleProfileMenuOpen}>
              <MoreHorizIcon color="info" />
            </IconButton>
          </div>

          <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2 ">
            {`${Coupon.discount}%`}
          </p>
          <p className=" font-semibold mb-[2px]">{`Expire : ${Coupon.expire}`}</p>
        </div>
        {renderDelOrEditMenu}
      </Paper>
      {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
    </>
  );
}

export default CouponCard;
