import React, { useEffect, useState } from 'react'
// import UseNotification from "../../hook/useNotification";
// import {
//     AddProdToWish,
//     deleFromWishList,
//   } from "../../Redux/actions/wishListAction";

import { useDispatch, useSelector } from "react-redux";
import UseNotification from '../useNotification';
import { AddProdToWish, deleFromWishList } from '../../Redux/actions/wishListAction';

function ProductCardHook(prod, isFavorit ) {
    const dispatch = useDispatch();
    const [color, setColor] = useState("");
    const [loadingAdd, setLoadingAdd] = useState(false);
    const [loadingRemove, setLoadingRemove] = useState(false);
    const [check, setCheck] = useState();
    const [open, setOpen] = useState(false);
    let Fav;
    if (isFavorit) {
        Fav = isFavorit.some((fitem) => fitem === prod._id);
    }
    const [isFav, setIsFav] = useState(Fav);

    useEffect(() => {
        if (isFavorit) {
            setIsFav(isFavorit.some((fitem) => fitem === prod._id));
        }
    }, [isFavorit]);

    const addOrDel = () => {
        if (isFav) {
            deleteProdFromWishList();
        } else {
            addToWishList();
        }
    };

    const resRemove = useSelector((val) => val.wishList.deleteFromWish);
    const resAdd = useSelector((val) => val.wishList.addprodToWish);

    const addToWishList = async () => {
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoadingAdd(true);
        const isMounted = true; // track if component is mounted
        await dispatch(
            AddProdToWish({
                product: prod._id,
            })
        );
        if (isMounted) {
            // check if component is still mounted
            setLoadingAdd(false);
            setCheck(true);
        }
        return () => {
            isMounted = false;
        }; // cleanup function
    };

    const deleteProdFromWishList = async () => {
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }

        setLoadingRemove(true);
        await dispatch(deleFromWishList(prod._id));
        setLoadingRemove(false);
        setCheck(true);
    };

    useEffect(() => {
        if (isFav === true) {
            setColor("error");
        } else {
            setColor("");
        }
    }, [isFav]);

    useEffect(() => {
        if (!loadingAdd) {
            setOpen(false);

            if (resAdd && check) {
                if (resAdd.data) {
                    if (resAdd.data.status === "success") {
                        setColor("error");
                    }
                }
            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loadingAdd]);

    useEffect(() => {
        if (!loadingRemove) {
            setOpen(false);
            if (resRemove && check) {
                if (resRemove.data) {
                    if (resRemove.data.status === "success") {
                        setColor("");
                    }
                }
            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loadingRemove]);
    return [addOrDel, open, color]
}
export default ProductCardHook
