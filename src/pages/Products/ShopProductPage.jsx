import React from "react";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import CategoryHeader from "../../component/category/CategoryHeader";
import SIdeFliter from "../../component/utility/SIdeFliter";
import ProductCard from "../../component/products/productCard";
import PaginatePage from "../../component/utility/PaginatePage";
import ShopProductPageHook from "../../hook/product/shop-product-page-hook";
import SearchCountResult from "../../component/utility/SearchCountResult";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ShopProductPage = () => {
  const [results, prods, pageCount, getPage, getProducts] =
    ShopProductPageHook();
  return (
    <Container>
      <CategoryHeader />
      <SearchCountResult title={results} onFilterClick={getProducts} />

      <Grid container spacing={1}>
        <Grid sm={12} xs={12} lg={2} md={2} xl={2} className="break-all">
          <Paper>
            <SIdeFliter />
          </Paper>
        </Grid>
        <Grid sm={12} xs={12} lg={10} md={10} xl={10} className="break-all">
          <div className="grid grid-cols-1 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
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

      {pageCount > 0 ? (
        <PaginatePage getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Container>
  );
};

export default ShopProductPage;
