import React from "react";
import AdminProduct from "./AdminProduct";
import Typography from "@mui/material/Typography";

const Index = ({ products }) => {
  console.log(products);
  return (
    <>
      <Typography variant="h5" color="inherit" className="py-3">
        manage all products
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {products ? (
          products.map((prod, index) => {
            return <AdminProduct key={index} prod={prod} />;
          })
        ) : (
          <p>No Products For this Page</p>
        )}
      </div>
    </>
  );
};

export default Index;
