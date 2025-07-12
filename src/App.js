// import React, { useState } from "react";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";

// import Home from "./pages/Home/Home";
// import { DarktMode, LightMode } from "./component/utility/AppMode";
// // import NavBar from "./component/utility/NavBar";
// import Footer from "./component/utility/Footer";
// import AllCategoryPage from "./pages/categories/AllCategoryPage";
// import AllBrandsPage from "./pages/Brands/AllBrandsPage";
// import ShopProductPage from "./pages/Products/ShopProductPage";
// import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
// import CartPage from "./pages/cart/CartPage";
// import ChoosePaymentMethod from "./pages/payment/ChoosePaymentMethod";
// import AdminDashPage from "./pages/Admin/AdminDashPage";
// import AllAdminProducts from "./pages/Admin/AllAdminProducts";
// import AllAdminOrders from "./pages/Admin/AllAdminOrders";
// import OrderDetaillsPage from "./pages/Admin/OrderDetaillsPage";
// import AddBrandPage from "./pages/Admin/AddBrandPage";
// import AddCategoryPage from "./pages/Admin/AddCategoryPage";
// import Dashboard from "./component/Admin/Dashboard";
// import AddSubCategoryPage from "./pages/Admin/AddSubCategoryPage";
// import AddProductPage from "./pages/Admin/AddProductPage";
// import UserDashPage from "./pages/User/UserDashPage";
// import UserDashboard from "./component/user/UserDashboard";
// import AllUserAddressPage from "./pages/User/AddUserAddressPage";
// import AllUserOrdersPage from "./pages/User/AllUserOrdersPage";
// import AllUserFavoritsPage from "./pages/User/AllUserFavoritsPage";
// import ProfilePage from "./pages/User/ProfilePage";
// import UserAddAddressPage from "./pages/User/UserAddAddressPage";
// import UserEditAddress from "./pages/User/UserEditAddress";
// import EditProductPage from "./pages/Admin/EditProductPage";
// import RegisterPage from "./pages/Auth/RegisterPage";
// import LoginPage from "./component/auth/Login";
// import ForgetPasswordPage from "./pages/Auth/forgetPasswordPage";
// import VerifyResetCodePage from "./pages/Auth/VerifyResetCodePage";
// import ResetPasswordPage from "./pages/Auth/resetPasswordPage";
// import NewNavBar from "./component/utility/newNavBar";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CouponPage from "./pages/Admin/CouponPage";
// import EditCouponPage from "./pages/Admin/EditCouponPage";
// // import AddCoupon from "./component/Admin/AddCoupon"

// const App = () => {


//   const [mode, setMode] = useState(
//     localStorage.getItem("currentTheme") === null
//       ? "light"
//       : localStorage.getItem("currentTheme") === "light"
//         ? "light"
//         : "dark"
//   );

//   const darkTheme = createTheme({
//     palette: {
//       mode,
//       ...(mode === "light" ? LightMode : DarktMode),
//     },
//   });
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };


//   // make elements animation
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <BrowserRouter>

//         {
//           !window.location.pathname.startsWith("/admin") ? <NewNavBar setMode={setMode} handleOrderPopup={handleOrderPopup} />
//             : null
//         }
//         {/* {
//         !window.location.pathname.startsWith("/admin") <NavBar setMode={setMode} />  ? 
//           : null
//       } */}
//         {/* <NavBar setMode={setMode} /> */}
//         {/* <div className=" mt-[56px] md:mt-[64px] xl:mt-[64px]"> */}
//         <div className=" mt-[56px] md:mt-[56px] xl:mt-[56px]">
//           {/* <div> */}
//           <Routes>
//             <Route index element={<Home setMode={setMode} />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/foget-password" element={<ForgetPasswordPage />} />
//             <Route path="/verify-code" element={<VerifyResetCodePage />} />
//             <Route path="/reset-password" element={<ResetPasswordPage />} />



//             <Route path="/allcategory" element={<AllCategoryPage />} />
//             <Route path="/allbrands" element={<AllBrandsPage />} />
//             <Route path="/product-tshop" element={<ShopProductPage />} />
//             {/* <Route path="/product-tshop" element={<ShopProductPage />} /> */}
//             <Route path="/product/:id" element={<ProductDetailsPage />} />

//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/order/paymethod" element={<ChoosePaymentMethod />} />

//             <Route path="/admin" element={<AdminDashPage setMode={setMode} />}>
//               <Route index element={<Dashboard />} />
//               <Route
//                 path="order-detaills/:id"
//                 element={<OrderDetaillsPage />}
//               />

//               <Route path="order-management" element={<AllAdminOrders />} />
//               <Route
//                 path="products-management"
//                 element={<AllAdminProducts />}
//               />
//               <Route path="add-brand" element={<AddBrandPage />} />
//               <Route path="add-category" element={<AddCategoryPage />} />
//               <Route path="add-sub-category" element={<AddSubCategoryPage />} />
//               <Route path="add-product" element={<AddProductPage />} />
//               <Route path="editproduct/:id" element={<EditProductPage />} />
//               <Route path="add-coupon" element={<CouponPage/>} />
//               <Route path="edit-coupon/:id" element={<EditCouponPage/>} />
//             </Route>

//             <Route path="/user" element={<UserDashPage />}>
//               <Route index element={<UserDashboard />} />

//               <Route path="user-orders" element={<AllUserOrdersPage />} />
//               <Route path="favorits" element={<AllUserFavoritsPage />} />
//               <Route path="personal-address" element={<AllUserAddressPage />} />
//               <Route path="profile" element={<ProfilePage />} />
//               <Route path="add-address" element={<UserAddAddressPage />} />
//               <Route path="edit-address" element={<UserEditAddress />} />
//             </Route>

//           </Routes>
//         </div>
//       </BrowserRouter>
//       <Footer />
//     </ThemeProvider>
//   );
// };
// export default App;

import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Theme modes
import { DarkMode, LightMode } from "./component/utility/AppMode";

// Static Components
import Footer from "./component/utility/Footer";
import NewNavBar from "./component/utility/newNavBar";

// Lazy-loaded Pages and Components
const Home = lazy(() => import("./pages/Home/Home"));
const AllCategoryPage = lazy(() => import("./pages/categories/AllCategoryPage"));
const AllBrandsPage = lazy(() => import("./pages/Brands/AllBrandsPage"));
const ShopProductPage = lazy(() => import("./pages/Products/ShopProductPage"));
const ProductDetailsPage = lazy(() => import("./pages/Products/ProductDetailsPage"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const ChoosePaymentMethod = lazy(() => import("./pages/payment/ChoosePaymentMethod"));

const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const LoginPage = lazy(() => import("./component/auth/Login"));
const ForgetPasswordPage = lazy(() => import("./pages/Auth/forgetPasswordPage"));
const VerifyResetCodePage = lazy(() => import("./pages/Auth/VerifyResetCodePage"));
const ResetPasswordPage = lazy(() => import("./pages/Auth/resetPasswordPage"));

const AdminDashPage = lazy(() => import("./pages/Admin/AdminDashPage"));
const Dashboard = lazy(() => import("./component/Admin/Dashboard"));
const AllAdminProducts = lazy(() => import("./pages/Admin/AllAdminProducts"));
const AllAdminOrders = lazy(() => import("./pages/Admin/AllAdminOrders"));
const OrderDetailsPage = lazy(() => import("./pages/Admin/OrderDetaillsPage"));
const AddBrandPage = lazy(() => import("./pages/Admin/AddBrandPage"));
const AddCategoryPage = lazy(() => import("./pages/Admin/AddCategoryPage"));
const AddSubCategoryPage = lazy(() => import("./pages/Admin/AddSubCategoryPage"));
const AddProductPage = lazy(() => import("./pages/Admin/AddProductPage"));
const EditProductPage = lazy(() => import("./pages/Admin/EditProductPage"));
const CouponPage = lazy(() => import("./pages/Admin/CouponPage"));
const EditCouponPage = lazy(() => import("./pages/Admin/EditCouponPage"));

const UserDashPage = lazy(() => import("./pages/User/UserDashPage"));
const UserDashboard = lazy(() => import("./component/user/UserDashboard"));
const AllUserOrdersPage = lazy(() => import("./pages/User/AllUserOrdersPage"));
const AllUserFavoritsPage = lazy(() => import("./pages/User/AllUserFavoritsPage"));
const AllUserAddressPage = lazy(() => import("./pages/User/AddUserAddressPage"));
const UserAddAddressPage = lazy(() => import("./pages/User/UserAddAddressPage"));
const UserEditAddress = lazy(() => import("./pages/User/UserEditAddress"));
const ProfilePage = lazy(() => import("./pages/User/ProfilePage"));

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme") === "dark" ? "dark" : "light"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? LightMode : DarkMode),
    },
  });

  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => setOrderPopup(!orderPopup);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        {!isAdminRoute && (
          <NewNavBar setMode={setMode} handleOrderPopup={handleOrderPopup} />
        )}

        <div className="mt-[56px] md:mt-[56px] xl:mt-[56px] sm:mt-[56px]">
          <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
            <Routes>
              {/* Public Routes */}
              <Route index element={<Home setMode={setMode} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forget-password" element={<ForgetPasswordPage />} />
              <Route path="/verify-code" element={<VerifyResetCodePage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/allcategory" element={<AllCategoryPage />} />
              <Route path="/allbrands" element={<AllBrandsPage />} />
              <Route path="/product-tshop" element={<ShopProductPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order/paymethod" element={<ChoosePaymentMethod />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashPage setMode={setMode} />}>
                <Route index element={<Dashboard />} />
                <Route path="order-detaills/:id" element={<OrderDetailsPage />} />
                <Route path="order-management" element={<AllAdminOrders />} />
                <Route path="products-management" element={<AllAdminProducts />} />
                <Route path="add-brand" element={<AddBrandPage />} />
                <Route path="add-category" element={<AddCategoryPage />} />
                <Route path="add-sub-category" element={<AddSubCategoryPage />} />
                <Route path="add-product" element={<AddProductPage />} />
                <Route path="editproduct/:id" element={<EditProductPage />} />
                <Route path="add-coupon" element={<CouponPage />} />
                <Route path="edit-coupon/:id" element={<EditCouponPage />} />
              </Route>

              {/* User Routes */}
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
          </Suspense>
        </div>

<div className="mt-96">
  <Footer />
</div>

        
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
