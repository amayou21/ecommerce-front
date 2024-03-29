import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../Redux/actions/productAction";
const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProduct.allProducts);
    useEffect(() => {
        dispatch(allProduct(100));
    }, []);
    let items
    try {
        items = products.data ? products.data.documents.slice(0, 4) : [];
    } catch (error) {

    }


    return [items]
}

export default ViewHomeProductsHook;
