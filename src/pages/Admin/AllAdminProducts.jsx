import React from "react";
import PaginatePage from "../../component/utility/PaginatePage";
import ProductsManagement from "../../component/Admin/ProductsManagement/Index";
import ViewProductPageHook from "../../hook/admin/view-product-page-hook";
const AllAdminProducts = () => {
  const [prods, pageCount, getPage] = ViewProductPageHook();

  return (
    <div>
      <ProductsManagement products={prods} />
      <PaginatePage pageCount={pageCount} getPage={getPage} />
    </div>
  );
};

export default AllAdminProducts;
