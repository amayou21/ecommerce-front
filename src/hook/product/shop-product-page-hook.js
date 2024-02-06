import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../Redux/actions/productAction";

const ShopProductPageHook = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProduct.allProducts);
    const prods = products.data ? products.data.documents : [];
    useEffect(() => {
        dispatch(allProduct(100));
    }, []);
    return [prods]
}

export default ShopProductPageHook;
