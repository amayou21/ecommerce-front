import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { allFilterProd, allProduct } from "../../Redux/actions/productAction";

const ShopProductPageHook = () => {


    const limit = 12
    const dispatch = useDispatch();


    const getProducts = async () => {
        let word = localStorage.getItem("keyWord");
        let orderType = localStorage.getItem("orderType")
        let params = `limit=${limit}`;

        if (word) {
            params += `&keyword=${word}`;
        }

        // best-sellers low-to-high high-to-low top-tated without-sorting
        if (orderType) {
            if (orderType === "best-sellers") {
                params += `&sort=+sold`
            }
            if (orderType === "top-rated") {
                params += `&sort=+ratingQuantity`
            }
            if (orderType === "high-to-low") {
                params += `&sort=+price`
            }
            if (orderType === "low-to-high") {
                params += `&sort=-price`
            }
        }

        await dispatch(allFilterProd(params));
    };


    // first load with limit 
    useEffect(() => {
        getProducts()
    }, []);




    const products = useSelector((state) => state.allProduct.allProducts);
    // if (products) console.log(products);
    let prods = []
    let pageCount = []
    let results = 0
    // pageCount = products.data.paginationResult.numberOfPages
    if (products) {
        if (products.data) {
            prods = products.data.documents
            results = products.data.result
        }
    }


    if (products) {
        if (products.data) {
            if (products.data.paginationResult) {
                pageCount = products.data.paginationResult.numberOfPages
            }
        }

    }



    // second load with spesific page when click pagination
    const getPage = async (page) => {
        let word = localStorage.getItem("keyWord");
        let orderType = localStorage.getItem("orderType")

        let params = `page=${page}&limit=${limit}`;

        if (word) {
            params += `&keyword=${word}`;
        }

        if (orderType) {
            if (orderType === "best-sellers") {
                params += `&sort=+sold`
            }
            if (orderType === "top-rated") {
                params += `&sort=+ratingQuantity`
            }
            if (orderType === "high-to-low") {
                params += `&sort=+price`
            }
            if (orderType === "low-to-high") {
                params += `&sort=-price`
            }
        }

        await dispatch(allFilterProd(params));
    };

    // @desc when user choos sort tyep


    return [results, prods, pageCount, getPage, getProducts]
}


export default ShopProductPageHook;
