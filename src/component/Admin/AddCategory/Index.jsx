import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { createCategory } from "../../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const notify = (val, state) => {
    if (state === "success") {
      toast.success(val);
    } else if (state === "warning") {
      toast.warning(val);
    } else if (state === "error") {
      toast.error(val);
    }
  };

  const res = useSelector((val) => val.allCategory.category);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (res.status === 200) {
        notify("created successfuly!", "success");
      } else if (res.status === 500) {
        notify("there an issus!!", "error");
      }
      setOpen(false);
      setImage(false);
      setName("");
      // if()
    } else {
      setOpen(true);
      console.log("uploading...");
    }
  }, [loading]);

  const [Image, setImage] = useState();
  const [name, setName] = useState("");
  const [selectingImage, setSelectingImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectingImage(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!name || !Image) {
      notify("category name and image are required", "warning");
    }

    setLoading(true);
    if (name && Image) {
      const formData = new FormData();  
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createCategory(formData));
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="m-8">
        <Box>
          <Typography variant="h5" color="inherit">
            Upload You're Category Image
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
            label="Category Name"
            sx={{ width: "50ch" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Button
          onClick={handelSubmit}
          className={`${theme.palette.btnBgColor}`}
          variant={`${theme.palette.btnVariant}`}
          color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
          add Category
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
