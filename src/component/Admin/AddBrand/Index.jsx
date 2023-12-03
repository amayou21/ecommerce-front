import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

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

  let isChange = false;

  const onImageChange = () => {
    isChange = true;
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
            onClick={console.log(isChange)}
          >
            {!isChange ? <CloudUploadIcon sx={{ fontSize: "150px" }} /> : null}

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
          <TextField label="Brand Name" sx={{ width: "50ch" }} />
        </Box>
        <Button
          className={`${theme.palette.btnBgColor}`}
          variant={`${theme.palette.btnVariant}`}
          color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
          add brand
        </Button>
      </div>
    </div>
  );
};

export default Index;
