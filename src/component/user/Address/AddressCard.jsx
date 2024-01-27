import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";

const AddressCard = () => {
  const navigate = useNavigate();
  return (
    <Paper className="shadow-md  grid grid-cols-1 mb-2 p-3">
      <div className="flex justify-between">
        <div>
          <Typography variant="h5" component="div" color="inherit">
            <b>House</b>
          </Typography>
          <p>casablanca moroco</p>
          <Typography variant="p" component="div" color="inherit">
            Phone Number
          </Typography>
          <p>+212 657792431</p>
        </div>
        <div className="">
          <IconButton
            aria-label=""
            onClick={() => {
              alert("delete product");
            }}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
          <IconButton
            aria-label=""
            onClick={() => {
              navigate("/user/edit-address");
            }}
          >
            <EditNoteIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

export default AddressCard;
