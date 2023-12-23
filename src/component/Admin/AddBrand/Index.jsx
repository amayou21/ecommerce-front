import React, { useEffect, useState } from "react";
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
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../../Redux/actions/brandAction";
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
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const res = useSelector((state) => state.allBrand.brand);

  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (res.status === 200) {
        notify("created successfuly!", "success");
      } else if (res.length === 0) {
        notify("there an issus!!", "error");
      }
      setOpen(false);
      setImage(false);
      setName("");
      // if()
    } else if (name && Image && loading) {
      setOpen(true);
      console.log("uploading...");
    }
    console.log(res);
  }, [loading]);

  const [name, setName] = useState("");
  const [Image, setImage] = useState();
  const [selectingImage, setselectingImage] = useState(null);

  const OnImageChange = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setselectingImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !Image) {
      notify("brand name and image are required", "warning");
      return;
    }

    setLoading(true);
    if (name && Image) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createBrand(formData));
      setLoading(false);
    }
  };

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
