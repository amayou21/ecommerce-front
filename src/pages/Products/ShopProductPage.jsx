import * as React from "react";

import {
  Box,
  IconButton,
  Paper,
  useMediaQuery,
  Typography,
} from "@mui/material";


import { styled } from "@mui/material/styles";
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import TuneIcon from "@mui/icons-material/Tune";
import CategoryHeader from "../../component/category/CategoryHeader";
import SIdeFliter from "../../component/utility/SIdeFliter";
import ProductCard from "../../component/products/productCard";
import PaginatePage from "../../component/utility/PaginatePage";
import ShopProductPageHook from "../../hook/product/shop-product-page-hook";
import SearchCountResult from "../../component/utility/SearchCountResult";


const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const ShopProductPage = ({ window }) => {
  const [results, prods, pageCount, getPage, getProducts] =
    ShopProductPageHook();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isExtraLargeScreen = useMediaQuery((theme) =>
    theme.breakpoints.up("xl")
  );

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mobileMenuId = "primary-search-account-menu-mobile";

  const [open, setOpen] = React.useState(true);

  const renderMobileMenu = (
    <Box sx={{ xs: "flex", md: "none", xl: "none" }}>
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />

        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              xs: "flex",
              md: "none",
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              Filter
            </Typography>
          </StyledBox>

          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
              xs: "flex",
              md: "none",
            }}
          >
            <SIdeFliter />
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );

  return (
    <div className="px-3">
      <CategoryHeader />

      <div className="flex flex-col-2 my-2 justify-between items-center">
        <div>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <TuneIcon
                // color="secondary"
                fontSize="large"
                sx={{ borderRadius: "1px solid primary" }}
                // className="rounded-md border-solid border-2  border-fuchsia-400"
              />
            </IconButton>
          </Box>
        </div>

        <Box>
          <SearchCountResult title={results} onFilterClick={getProducts} />
        </Box>
      </div>

      <div className="flex">
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
              maxWidth: "25%",
              // maxHeight: "1303px",
              // overflow:"scroll"
            },
          }}
        >
          <Paper className="mx-2  p-6 ">
            <SIdeFliter />
          </Paper>
        </Box>

        <Box>
          <div className="p-1 grid grid-cols-2 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {prods
              ? prods.length > 0
                ? prods.map((item, index) => {
                    return <ProductCard key={index} prod={item} />;
                  })
                : null
              : null}
          </div>
        </Box>
      </div>

      {pageCount > 0 ? (
        <PaginatePage getPage={getPage} pageCount={pageCount} />
      ) : null}
      {!(isMediumScreen || isExtraLargeScreen) && renderMobileMenu}
    </div>
  );
};

export default ShopProductPage;
