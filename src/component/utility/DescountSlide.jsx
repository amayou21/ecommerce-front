import React from "react";
import img2 from "../../images/img2.png";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";

const DescountSlide = () => {
  return (
    <Container>
      <Paper className="mt-5 rounded-md  flex items-center justify-around ">
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
      </Paper>
    </Container>
  );
};

export default DescountSlide;
