import React from "react";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import CategoryHeader from "../../component/category/CategoryHeader";
import SearchCountResult from "../../component/utility/SearchCountResult";
import SIdeFliter from "../../component/utility/SIdeFliter";
import ProductCard from "../../component/products/productCard";
import PaginatePage from "../../component/utility/PaginatePage";
import ShopProductPageHook from "../../hook/product/shop-product-page-hook";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ShopProductPage() {
  const [prods, pageCount, getPage] = ShopProductPageHook();

  return (
    <Container>
      <CategoryHeader />
      <Grid container spacing={1}>
        <Grid sm={12} xs={12} lg={2}  md={2} xl={2} className="break-all">
          <Paper>
            <SIdeFliter />
          </Paper>
        </Grid>
        <Grid sm={12} xs={12} lg={10} md={10} xl={10} className="break-all">
          <div className="grid grid-cols-1 max-sm:grid-cols-1   md:grid-cols-3 lg:grid-cols-3: xl:grid-cols-3 gap-2">
            {prods
              ? prods.length > 0
                ? prods.map((item, index) => {
                    return <ProductCard key={index} prod={item} />;
                  })
                : null
              : null}
          </div>
        </Grid>
      </Grid>

      <PaginatePage getPage={getPage} pageCount={pageCount} />
    </Container>

    // <Container>
    //
    //   <SearchCountResult title={`there's  ${prods.length} results`} />
    //   <Box sx={{ flexGrow: 1 }} className="mb-8">
    // <Grid container spacing={1}>
    //   <Grid xs={12} md={2} className="break-all">
    //     <Paper>
    //           <SIdeFliter />
    //         </Paper>
    //       </Grid>

    //       <Grid xs={12} md={10} className="break-all">
    //         <div className="drop-shadow-2xl grid grid-cols-1 gap-2 xl:grid-cols-3 md:grid-cols-2 place-items-center ">
    // {prods
    //   ? prods.length > 0
    //     ? prods.map((item, index) => {
    //         return <ProductCard key={index} prod={item} />;
    //       })
    //     : null
    //   : null}
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Container>
  );
}

export default ShopProductPage;
