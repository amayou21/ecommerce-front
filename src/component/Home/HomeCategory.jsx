import React from "react";
import Subtitle from "../utility/Subtitle";
import { Box, Button, Container, Paper } from "@mui/material";
import CategoryCard from "../category/CategoryCard";
import Progress from "../utility/progress";
import HomeCategoryHook from "../../hook/category/home-category-hook";

import Image1 from "../../images/earphone.png";
import Image2 from "../../images/watch.png";
import Image3 from "../../images/macbook.png";
import Image4 from "../../images/gaming.png";
import Image5 from "../../images/vr.png";
import Image6 from "../../images/speaker.png";
import Slider from "react-slick";
// import Button from "../Shared/Button";

import { Typography } from "@mui/material";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const CategoriesData = [
  {
    id: 1,
    name: "Laptop",
    img: Image1,
  },
  {
    id: 2,
    name: "Earphone",
    img: Image2,
  },
  {
    id: 3,
    name: "Gadget",
    img: Image3,
  },
  {
    id: 4,
    name: "Laptop",
    img: Image4,
  },
  {
    id: 5,
    name: "Earphone",
    img: Image5,
  },
  {
    id: 6,
    name: "Gadget",
    img: Image6,
  },
];

const HomeCategory = ({ title, btntitle, pathText }) => {
  // listening
  const [loading, res] = HomeCategoryHook();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <Subtitle title={title} btntitle={btntitle} pathText={pathText} />

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {CategoriesData.map((data, index) => (
              <div className="my-6" key={index}>
                <Paper
                  className="flex flex-col gap-4 justify-between overflow-hidden  shadow-lg py-4 px-3 mx-4 rounded-2xl  relative"
                >
                  <div className="mb-4 z-40">
                    {/* <Typography variant="body1" color="inherit"> */}
                      <p className="mb-[2px]">Enjoy</p>
                    {/* </Typography> */}
                    {/* <Typography variant="body1" color="inherit"> */}
                      <p className="text-2xl font-semibold mb-[2px]">With</p>
                    {/* </Typography> */}
                    {/* <Typography variant="body1" color="inherit"> */}
                      <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                        {data.name}
                      </p>
                    {/* </Typography> */}
                    <Button color="secondary" variant="contained">
                      Browse
                    </Button>
                  </div>
                  <Box sx={{ display: { sx: "none", md: "flex", lg: "flex" } }}>
                    <img
                      src={data.img}
                      alt=""
                      className="w-[200px] absolute top-1/2 -translate-y-1/2 -right-0"
                    />
                  </Box>
                </Paper>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default HomeCategory;
