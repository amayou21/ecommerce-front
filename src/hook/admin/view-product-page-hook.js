import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProduct } from '../../Redux/actions/productAction';

const ViewProductPageHook = () => {
    const limit = 9
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProduct.allProducts);
    let prods = []
    let pageCount = {}
    if (products.data) {
        prods = products.data.documents
        pageCount = products.data.paginationResult.numberOfPages
    }
    // first load with limit 
    useEffect(() => {
        dispatch(allProduct(limit));
    }, []);


    //   // second load with spesific page
    const getPage = (page) => {
        dispatch(allProduct(limit, page));
    };


    return [prods, pageCount, getPage]
}


export default ViewProductPageHook;
