import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllCart } from '../../Redux/actions/cartActions';

function GetAllCartHook() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [cartItem, setCartItems] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const res = useSelector((val) => val.carts.cart);
    console.log(res);
    // const addToCartHandler = async (e) => {
    //   e.preventDefault();
    //   if (!navigator.onLine) {
    //     UseNotification("you're Offline", "error");
    //     return;
    //   }
    //   // setCheck(true);
    // };

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(AllCart());
            setLoading(false);
        };
        get();
    }, []);

    useEffect(() => {
        if (!loading) {
            if (res && res.data) {
                setNumberOfItems(res.data.numOfCartItems)
                
                // setTimeout(() => {
                //     window.location.reload(false)

                // }, 1000);
            } else {
                setNumberOfItems(0)
            }
        }
    }, [loading, numberOfItems]);

    return [loading, numberOfItems]
}

export default GetAllCartHook
