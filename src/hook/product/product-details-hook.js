import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import { getOneProduct, productLike } from "../../Redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsHook = () => {

    const dispatch = useDispatch();
    const { id } = useParams();


    const prod = useSelector((val) => val.allProduct.oneProduct);
    const product = prod ? prod.data : [];

    let images = [];
    if (product &&product.images) {
        images = product.images.map((val) => {
            return {
                original: val,
                thumbnail: val,
            };
        });
    }

    const productLik = useSelector(state => state.allProduct.prodLike)
    const prodLike = productLik&&productLik.data ? productLik.data.documents.slice(0, 4) : []


    // const prodLike = []
    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [id]);


    useEffect(() => {
        if (product &&product.category) {
            dispatch(productLike(product.category._id))

        }
    }, [product]);
    return [product, images, prodLike]
}

export default ProductDetailsHook;
