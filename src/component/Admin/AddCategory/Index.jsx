import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import img1 from "../../../images/img1.png";
import img2 from "../../../images/img2.png";
import { createCategory } from "../../../Redux/actions/categoryAction";
import { useDispatch } from "react-redux";

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
  const theme = useTheme();
  const dispatch = useDispatch();
  //   const [isChange, setIsChange] = useState(false);
  const [Image, setImage] = useState();
  const [name, setName] = useState("");
  const [selectingImage, setSelectingImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectingImage(event.target.files[0]);
      console.log(event.target.files[0]);
      // setFormData(event.target.files[0]);
    }
  };

  const handelSubit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectingImage);
    dispatch(createCategory(formData));
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
            label="Category Name"
            sx={{ width: "50ch" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Button
          onClick={handelSubit}
          className={`${theme.palette.btnBgColor}`}
          variant={`${theme.palette.btnVariant}`}
          color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
          add Category
        </Button>
      </div>
    </div>
  );
};

export default Index;
