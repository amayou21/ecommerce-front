import React from "react";
import HSlider from "../../component/Home/HSlider";
import HomeCategory from "../../component/Home/HomeCategory";
import CardProductContainer from "../../component/products/CardProductContainer";
import DescountSlide from "../../component/utility/DescountSlide";
import BrandFuturs from "../../component/brands/BrandFuturs";

const Home = () => {
  return (
    <div>
      <HSlider />
      <HomeCategory
        title="Categories"
        btntitle="more"
        pathText="/allcategory"
      />
      <CardProductContainer
        title="Top Sellers"
        btntitle="show more"
        pathText="/product-tshop"
      />
      <DescountSlide />
      <CardProductContainer title="Latest Fashion" btntitle="show more" />{" "}
      {/* pathText='/produc-tshop' */}
      <BrandFuturs title="Brands" btntitle="more" pathText="/allbrands" />
    </div>
  );
};
export default Home;
