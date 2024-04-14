import React, { useEffect } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  Rating,
  TextField,
} from "@mui/material";

import { Avatar, IconButton, Paper } from "@mui/material";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import StarIcon from "@mui/icons-material/Star";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ToastContainer } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditReviewHook from "../../hook/review/edit-review-hook";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value) => {
  return labels[value];
};

const OtherClientRating = ({ prod }) => {
  const [
    anchorEl,
    menuId,
    isMenuOpen,
    handleMenuClose,
    openDeleteRev,
    openEditRev,
    fullScreen,
    openDelRev,
    handleCloseDelDev,
    delete_Review,
    handleCloseDelRev,
    openEdRev,
    handleCloseEdRev,
    edit_Rev,
    currentUserId,
    reviewUserID,
    handleProfileMenuOpen,
    editRat,
    setEditRat,
    setEditComment,
    editComment,
    openDelProgress,
    openEdProgress,
  ] = EditReviewHook(prod);

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
      <MenuItem onClick={openDeleteRev}>
        <DeleteIcon color="error" />
        <p className="text-red-500">Delete</p>
      </MenuItem>
      {currentUserId._id === reviewUserID ? (
        <MenuItem onClick={openEditRev}>
          <EditIcon />
          <p>Edit</p>
        </MenuItem>
      ) : null}
    </Menu>
  );

  return (
    <div>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openDelRev}
          onClose={handleCloseDelDev}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            delete review ?
          </DialogTitle>
          <DialogContent>
            <div>
              <div className="flex items-center mx-6">
                <IconButton>
                  {prod.profileImage ? (
                    <Avatar alt="Cindy Baker" src={prod.profileImage} />
                  ) : (
                    <Avatar>
                      {prod.user
                        ? prod.user.name.charAt(0).toUpperCase()
                        : null}
                    </Avatar>
                  )}
                </IconButton>
                <p>{prod.user.name}</p>
                <Rating
                  className="mr-5"
                  name="hover-feedback"
                  value={prod.retings}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    // Do something when the rating changes, if needed
                  }}
                  readOnly // Disables user interaction
                  emptyIcon={
                    <StarIcon
                      style={{ opacity: 0.55 }}
                      fontSize="text-slate-700"
                    />
                  }
                />
              </div>
              <div className=" flex ml-4 px-3">
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                </TimelineSeparator>
                <TimelineContent className="p-0">{prod.title}</TimelineContent>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            {openDelProgress ? (
              <CircularProgress size="25px" color="primary" />
            ) : (
              <Button autoFocus onClick={delete_Review}>
                delete
              </Button>
            )}

            <Button onClick={handleCloseDelRev} autoFocus>
              cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          fullScreen={fullScreen}
          open={openEdRev}
          onClose={handleCloseEdRev}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            Edit your review
          </DialogTitle>

          <DialogContent>
            <Box className="mx-6">
              <div className="flex items-center my-2">
                <IconButton>
                  {prod.profileImage ? (
                    <Avatar alt="Cindy Baker" src={prod.profileImage} />
                  ) : (
                    <Avatar>
                      {prod.user
                        ? prod.user.name.charAt(0).toUpperCase()
                        : null}
                    </Avatar>
                  )}
                </IconButton>
                <p>{prod.user.name}</p>
                <Rating
                  className="mr-5"
                  name="hover-feedback"
                  value={editRat}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setEditRat(newValue);
                  }}
                  // readOnly // Disables user interaction
                  emptyIcon={
                    <StarIcon
                      style={{ opacity: 0.55 }}
                      fontSize="text-slate-700"
                    />
                  }
                />
              </div>
              <TextField
                onChange={(e) => {
                  setEditComment(e.target.value);
                }}
                value={editComment}
                fullWidth
                required
                multiline
                id="add-comment"
                label="add comment"
                placeholder="add comment"
                variant="outlined"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            {openEdProgress ? (
              <CircularProgress size="25px" color="primary" />
            ) : (
              <Button autoFocus onClick={edit_Rev}>
                Edit
              </Button>
            )}

            <Button onClick={handleCloseEdRev} autoFocus>
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Paper className="p-2 my-1 ">
        <div className="flex  justify-between items-center">
          <div>
            <div className="flex items-center">
              <IconButton>
                {prod.profileImage ? (
                  <Avatar alt="Cindy Baker" src={prod.profileImage} />
                ) : (
                  <Avatar>
                    {prod.user ? prod.user.name.charAt(0).toUpperCase() : null}
                  </Avatar>
                )}
              </IconButton>
              <p>{prod.user.name}</p>
              <Rating
                className="mr-5"
                name="hover-feedback"
                value={prod.retings}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  // Do something when the rating changes, if needed
                }}
                readOnly // Disables user interaction
                emptyIcon={
                  <StarIcon
                    style={{ opacity: 0.55 }}
                    fontSize="text-slate-700"
                  />
                }
              />
            </div>
            <div className=" flex ml-4 px-3">
              <TimelineSeparator>
                <TimelineDot color="secondary" />
              </TimelineSeparator>
              <TimelineContent className="p-0">{prod.title}</TimelineContent>
            </div>
          </div>
          <div>
            {currentUserId._id === reviewUserID || currentUserId.role === "admin"? (
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
            ) : null}
          </div>
        </div>

        {renderMenu}
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default OtherClientRating;
