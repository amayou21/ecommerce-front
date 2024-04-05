import React from "react";
import HSlider from "../../component/Home/HSlider";
import HomeCategory from "../../component/Home/HomeCategory";
import CardProductContainer from "../../component/products/CardProductContainer";
import DescountSlide from "../../component/utility/DescountSlide";
import BrandFuturs from  "../../component/brands/BrandFuturs";
import ViewHomeProductsHook from "../../hook/product/view-home-products-hook";
import NewHSlide from "../../component/Home/newHSlide";
import Subscribe from "../../component/utility/Subscribe";
import Testimonials from "../../component/utility/Testimonials";
const Home = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div>
      <HSlider />
      <NewHSlide />
      <HomeCategory
        title="Categories"
        btntitle="more"
        pathText="/allcategory"
      />
      <CardProductContainer
        products={items}
        title="Top Sellers"
        btntitle="show more"
        pathText="/product-tshop"
      />
      <DescountSlide />
      <Subscribe />
      <CardProductContainer
        title="Latest Fashion"
        btntitle="show more"
        products={items}
      />
      <Testimonials/>
      {/* pathText='/produc-tshop' */}
      <BrandFuturs title="Brands" btntitle="more" pathText="/allbrands" />
    </div>
  );
};
export default Home;
