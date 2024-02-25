import React, { useState } from 'react';
import ShopProductPageHook from '../product/shop-product-page-hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../../Redux/actions/authAction';

const NavBarSearchHook = () => {


    const dispatch = useDispatch()

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

    const currentUser = useSelector(state => state.auth.loggedUser)
    if (currentUser) console.log(currentUser);

    // // @desc get logged user
    useEffect(() => {

        // const loggedUser = () => {
            dispatch(loggedUser())
        // }
        // loggedUser()

    }, [currentUser]);



    return [searchWord, onChangeWord]
}

export default NavBarSearchHook;
