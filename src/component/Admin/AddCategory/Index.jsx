import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHook from "../../../hook/category/add-category-hook";


const Index = () => {
  
  const [
    onImageChange,
    image,
    name,
    setName,
    handleSubmit,
    open,
    handleClose,
  ] = AddCategoryHook();

  return (
    <div className="mb-20" component="form">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography variant="body1" color="inherit">
            Upload Category Images
          </Typography>
          <IconButton
            component="label"
            variant="contained"
            onChange={onImageChange}
            sx={{
              "&:hover": {
                backgroundColor: "transparent", // Set the background color to transparent on hover
              },
            }}
          >
            {!image ? (
              <CloudUploadIcon sx={{ fontSize: "80px" }} />
            ) : (
              <img width="150px" height="150px" src={image} alt="image" />
            )}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={onImageChange}
            />
          </IconButton>
        </div>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          multiline
          fullWidth
          id="outlined-multiline-flexible"
          label="Name"
          placeholder="Name"
          variant="outlined"
        />
      </Box>
      <Box className="px-2 mt-2 flex justify-end" onClick={handleSubmit}>
        <Button variant="contained">create</Button>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
    </div>
  );
};

export default Index;
