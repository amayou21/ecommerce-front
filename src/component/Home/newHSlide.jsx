import React from "react";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import Slider from "react-slick";
// import Typography from "@mui/material/Typography";
// import { Slider } from "@mui/material";

const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Protégez votre peau avec notre écran solaire ",
    description:
      "La crème solaire SPECTRA SPF 50 offre une très haute protection contre les UVA et les UVB. Elle est formulée à base d'une technologie UV Ecran+ qui associe des filtres anti UVA et anti UVB pour assurer une protection optimale.",
  },
  {
    id: 2,
    img: img2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: img3,
    title: "Protègez votre peau !",
    description:
      "Appliquez généreusement la crème solaire SPECTRA, renouvelez l’application toutes les deux heures, et profitez de chaque instant sous le soleil !",
  },
];

const NewHSlide = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-10   dark:bg-gray-950 dark:text-white duration-200 px-6">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="h-[500px] w-[500px] bg-primary/40 absolute -top-1/2 -left-1/4 rounded-3xl rotate-45 -z[9]"></div>
      {/* hero section */}
      <Slider {...settings}>
        {ImageList.map((data, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-2 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 break-word">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  {data.title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm"
                >
                  {data.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2 md:ml-auto  flex justify-center">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10"
                >
                  <img
                    src={data.img}
                    loading="lazy"
                    alt=""
                    className="w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain "
                  />
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewHSlide;
