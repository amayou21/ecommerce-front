import React, { useState } from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarktMode, LightMode } from './component/utility/AppMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NavBar from './component/utility/NavBar';
import Footer from './component/utility/Footer'
import LoginPage from './pages/Auth/Login';
import Register from './pages/Auth/RegisterPage';
import AllCategoryPage from './pages/categories/AllCategoryPage';
import AllBrandsPage from './pages/Brands/AllBrandsPage';
import ShopProductPage from './pages/Products/ShopProductPage';
import ProductDetailsPage from './pages/Products/ProductDetailsPage'
import Info from './component/utility/AmaguarCv';
import MotivationLettre from './component/utility/motivationLettre';
import Emails from './component/utility/Emails';
const App = () => {

  const [mode, setMode] = useState(localStorage.getItem("currentTheme") === null
    ? "light"
    : localStorage.getItem("currentTheme") === "light"
      ? "light"
      : "dark"
  )

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ?
        LightMode
        :
        DarktMode

      ),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar setMode={setMode} />
      <BrowserRouter>
        <div className=' mt-[56px] md:mt-[64px] xl:mt-[64px]'>   
        {/* <div> */}
       
        

          <Routes>
            <Route index element={<Home setMode={setMode} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/allcategory' element={<AllCategoryPage />} />
            <Route path='/allbrands' element={<AllBrandsPage />} />
            <Route path='/product-tshop' element={<ShopProductPage />} />
            <Route path='/product-tshop' element={<ShopProductPage />} />
            <Route path='/product/:id' element={<ProductDetailsPage />} />
            {/* <Route path='/cv' element={<Info />} />
            <Route path='/mot' element={<MotivationLettre />} />
            <Route path='/email' element={<Emails />} />
             */}
          </Routes>
          
        </div >
      </BrowserRouter>
     <Footer /> 
    </ThemeProvider>
  );
}
export default App;
