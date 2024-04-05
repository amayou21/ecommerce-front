import React from "react";
import img3 from "../../images/img3.png";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";
import LockClockIcon from '@mui/icons-material/LockClock';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import img2 from "../../images/img2.png"
const DescountSlide = () => {
  return (
    <Container>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src={img3}
                alt=""
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>

            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                Winter Sale upto 70% Off
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <HighQualityIcon color="info"/>
                  <p>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <LocalShippingIcon  color="secondary" />
                  <p>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <PaymentIcon color="success" />
                  <p>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <LocalOfferIcon  color="error" />
                  <p>Get Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Paper className="mt-5 rounded-md  flex items-center justify-around ">
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
      </Paper> */}
    </Container>
  );
};

export default DescountSlide;
