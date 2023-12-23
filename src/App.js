import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import Home from "./pages/Home/Home";
import { DarktMode, LightMode } from "./component/utility/AppMode";
import NavBar from "./component/utility/NavBar";
import Footer from "./component/utility/Footer";
import LoginPage from "./pages/Auth/Login";
import Register from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/categories/AllCategoryPage";
import AllBrandsPage from "./pages/Brands/AllBrandsPage";
import ShopProductPage from "./pages/Products/ShopProductPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import ChoosePaymentMethod from "./pages/payment/ChoosePaymentMethod";
import AdminDashPage from "./pages/Admin/AdminDashPage";
import AllAdminProducts from "./pages/Admin/AllAdminProducts";
import AllAdminOrders from "./pages/Admin/AllAdminOrders";
import OrderDetaillsPage from "./pages/Admin/OrderDetaillsPage";
import AddBrandPage from "./pages/Admin/AddBrandPage";
import AddCategoryPage from "./pages/Admin/AddCategoryPage";
import Dashboard from "./component/Admin/Dashboard";
import AddSubCategoryPage from "./pages/Admin/AddSubCategoryPage";
import AddProductPage from "./pages/Admin/AddProductPage";
import UserDashPage from "./pages/User/UserDashPage";
import UserDashboard from "./component/user/UserDashboard";
import AllUserAddressPage from "./pages/User/AddUserAddressPage";
import AllUserOrdersPage from "./pages/User/AllUserOrdersPage";
import AllUserFavoritsPage from "./pages/User/AllUserFavoritsPage";
import ProfilePage from "./pages/User/ProfilePage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddress from "./pages/User/UserEditAddress";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme") === null
      ? "light"
      : localStorage.getItem("currentTheme") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? LightMode : DarktMode),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar setMode={setMode} />
        <div className=" mt-[56px] md:mt-[64px] xl:mt-[64px]">
          {/* <div> */}
          <Routes>
            <Route index element={<Home setMode={setMode} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allcategory" element={<AllCategoryPage />} />
            <Route path="/allbrands" element={<AllBrandsPage />} />
            <Route path="/product-tshop" element={<ShopProductPage />} />
            <Route path="/product-tshop" element={<ShopProductPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            ()
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/paymethod" element={<ChoosePaymentMethod />} />
            <Route path="/admin" element={<AdminDashPage />}>
              <Route index element={<Dashboard />} />
              <Route
                path="order-detaills/:id"
                element={<OrderDetaillsPage />}
              />

              <Route path="order-management" element={<AllAdminOrders />} />
              <Route
                path="products-management"
                element={<AllAdminProducts />}
              />
              <Route path="add-brand" element={<AddBrandPage />} />
              <Route path="add-category" element={<AddCategoryPage />} />
              <Route path="add-sub-category" element={<AddSubCategoryPage />} />
              <Route path="add-product" element={<AddProductPage />} />
            </Route>
            <Route path="/user" element={<UserDashPage />}>
              <Route index element={<UserDashboard />} />

              <Route path="user-orders" element={<AllUserOrdersPage />} />
              <Route path="favorits" element={<AllUserFavoritsPage />} />
              <Route path="personal-address" element={<AllUserAddressPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="add-address" element={<UserAddAddressPage />} />
              <Route path="edit-address" element={<UserEditAddress />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
