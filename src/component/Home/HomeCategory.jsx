import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
// import CategoryCard from "../category/CategoryCard";
// import Progress from "../utility/progress";
import HomeCategoryHook from "../../hook/category/home-category-hook";
// import Typography from "@mui/material/Typography";

import Image1 from "../../images/gaming.png";
import Image2 from "../../images/img3.png";
import Image3 from "../../images/img2.png";
import Image4 from "../../images/macbook.png";
import Image5 from "../../images/nodeJs.png";
import Image6 from "../../images/logo.png";
import Slider from "react-slick";
import CategoryContainerPage from "../category/CategoryContainerPage";

// const TestimonialData = [
//   {
//     id: 1,
//     name: "Victor",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/101/101",
//   },
//   {
//     id: 2,
//     name: "Satya Nadella",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/102/102",
//   },
//   {
//     id: 3,
//     name: "Virat Kohli",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/104/104",
//   },
//   {
//     id: 5,
//     name: "Sachin Tendulkar",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/103/103",
//   },
// ];
const Subtitle = React.lazy(() => import("../utility/Subtitle"));

// import Container from "@mui/material/Container";
const CategoriesData = [
  {
    id: 1,
    name: "eclat",
    img: Image1,
  },
  {
    id: 2,
    name: "anti âge",
    img: Image2,
  },
  {
    id: 3,
    name: "corp",
    img: Image3,
  },
  {
    id: 4,
    name: "pied",
    img: Image4,
  },
  {
    id: 5,
    name: "hamam",
    img: Image5,
  },
  {
    id: 6,
    name: "solaire ",
    img: Image6,
  },
];

const HomeCategory = ({ title, btntitle, pathText }) => {
  // listening
  const [loading, res] = HomeCategoryHook();
  const categories = res.data ? res.data.documents : [];
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

        
          <CategoryContainerPage data={categories} />
      </div>
    </div>
  );
};
export default HomeCategory;
