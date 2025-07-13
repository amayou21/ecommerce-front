import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createCart } from '../../Redux/actions/cartActions';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import UseNotification from '../useNotification';
import { useTheme } from '@emotion/react';
function AddToCartHook(prodId, prod) {
    const theme = useTheme();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [color, setColor] = useState("");
    const [colorIndex, setColorIndex] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    const res = useSelector((val) => val.carts.cart);
    // console.log(res.errors);
    if (res && res.data)
        console.log(res.data.numOfCartItems);
    const colorClick = (btnIndex, color) => {
        setColorIndex(btnIndex); // This sets the index of the selected color
        setColor(color);
        console.log(btnIndex, color);
        // setColorIndex(colorIndex);
        // setColor(btnIndex);
    };

    const addToCartHandler = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }

        if (prod && prod.colors.length >= 1) {
            if (color === "") {
                UseNotification("pleas select the color", "warning");
                return;
            }

        } else {
            setColor("")
        }
        setLoading(true)
        await dispatch(createCart({
            productID: prodId,
            color
        }))
        setLoading(false)
        setCheck(true);
    }
    useEffect(() => {
        if (!loading) {

            if (res.status) {
                console.log(res.status);
                if (res.status === "error") {
                    UseNotification(res.message, "warning");
                    return;
                }
            }


            setOpen(false);
            if (res && check) {
                if (res === 'error :AxiosError: Request failed with status code 401') {
                    setOpen(false)
                    UseNotification("You are not allowed to access this route", "error");
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000);
                }
                // if (res === " error :AxiosError: Request failed with status code 401") {
                //     UseNotification("pleas slogin again", "warning");
                //     return;
                // }
                if (res.data) {
                    console.log(res.data);
                    if (res.data.status === "success") {
                        setLoading(false);
                        UseNotification("product added to your cart successfuly!", "success");
                        setColor("")
                        setColorIndex(0)
                        // setEmail("")
                        // localStorage.setItem("token", user.data.token)
                        // setTimeout(() => {
                        //     window.location.pathname = "/"
                        // }, 2000);
                    } else if (res.data.status === "error") {
                        UseNotification(res.data.message, "error");
                        return;
                        // setLoading(false);
                        // if (user.data.errors) {
                        //     UseNotification(user.data.errors[0].msg, "error")
                        // }
                        // if (user.data.message) {

                        //     UseNotification(user.data.message, "error");
                        // }

                    }
                }

            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);


    return [color, colorIndex, colorClick, addToCartHandler]

}

export default AddToCartHook
