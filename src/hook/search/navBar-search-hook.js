import React, { useState } from 'react';
import ShopProductPageHook from '../product/shop-product-page-hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../../Redux/actions/authAction';
import userEvent from '@testing-library/user-event';

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

    const user = useSelector(state => state.auth.loggedUser)
    if (user.data) {
        localStorage.setItem("user", JSON.stringify(user.data));
    }


  let currentUser;

  if (localStorage.getItem("user")) {
    currentUser = JSON.parse(localStorage.getItem("user"));
    // console.log(currentUser);
  }

    // @desc get logged user
    const loggingdUser = async () => {
        await dispatch(loggedUser())
    }
    useEffect(() => {
        loggingdUser()

    }, []);



    return [searchWord, onChangeWord,currentUser]
}

export default NavBarSearchHook;
