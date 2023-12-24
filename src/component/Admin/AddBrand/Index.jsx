import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import AddBrandHook from "../../../hook/brand/add-brand-hook";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Index = () => {
  const [
    OnImageChange,
    Image,
    name,
    handleSubmit,
    theme,
    open,
    handleClose,
    setName,
  ] = AddBrandHook();

  return (
    <div className="flex justify-center items-center ">
      <div className="m-8">
        <Box>
          <Typography variant="h5" color="inherit">
            Upload You're Brand Image
          </Typography>

          <IconButton
            component="label"
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "transparent", // Set the background color to transparent on hover
              },
            }}
            onChange={OnImageChange}
          >
            {!Image ? (
              <CloudUploadIcon sx={{ fontSize: "150px" }} />
            ) : (
              <img width="150px" height="150px" src={Image} alt="image" />
            )}
            <VisuallyHiddenInput type="file" />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          className="my-3 flex "
        >
          <TextField
            value={name}
            label="Brand Name"
            sx={{ width: "50ch" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>

        <Button
          onClick={handleSubmit}
          className={`${theme.palette.btnBgColor}`}
          variant={`${theme.palette.btnVariant}`}
          color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
          add brand
        </Button>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
