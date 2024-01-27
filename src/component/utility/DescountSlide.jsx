import React from "react";
import img2 from "../../images/img2.png";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

const DescountSlide = () => {
  return (
    <Container>
      <Box className="mt-5 rounded-md  flex items-center justify-around bg-gradient-to-r from-red-500 to-orange-500">
        <div>
          <Box
            component="img"
            sx={{
              height: 155,
              maxWidth: 400,
              overflow: "hidden",
              width: "100%",
            }}
            src={img2}
            alt="img2"
            className="h-255 max-w-400 overflow-hidden w-full"
            color="inherit"
          />
        </div>
        <div>
          <Typography variant="body1" component="div" color="inhiret">
            descount
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default DescountSlide;
