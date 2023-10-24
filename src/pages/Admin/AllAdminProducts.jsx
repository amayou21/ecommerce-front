import React from 'react';
import PaginatePage from '../../component/utility/PaginatePage';
import ProductsManagement from "../../component/Admin/ProductsManagement"
const AllAdminProducts = () => {
    return (
        <div>
            <ProductsManagement />
            <PaginatePage />
        </div>
    );
}

export default AllAdminProducts;
