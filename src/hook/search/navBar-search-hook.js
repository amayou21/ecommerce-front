import React, { useState } from 'react';
import ShopProductPageHook from '../product/shop-product-page-hook';
import { useEffect } from 'react';

const NavBarSearchHook = () => {
    const [results, prods, pageCount, getPage, getProducts] = ShopProductPageHook()

    const [searchWord, setSearchWord] = useState("");



    const onChangeWord = async (e) => {
        await localStorage.setItem("keyWord", e)
        setSearchWord(e)

    }


    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 1000);
    }, [searchWord]);


    return [searchWord, onChangeWord]
}

export default NavBarSearchHook;
