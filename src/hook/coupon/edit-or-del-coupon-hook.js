import React, { useEffect, useState } from 'react'

import { useTheme } from "@emotion/react";
// import {
//     deleteCoupon,
//     updateCoupon,
// } from "../../../Redux/actions/couponAction";
import { useDispatch, useSelector } from "react-redux";
// import UseNotification from "../../../hook/useNotification";
import { useMediaQuery } from '@mui/material';
import UseNotification from '../useNotification';
import { deleteCoupon, getCoupon, updateCoupon } from '../../Redux/actions/couponAction';
// import { useNavigate } from 'react-router-dom';

function EditOrDelCouponHook(CouponId) {


    // const [name, setName] = useState();
    // const [descount, setdescount] = useState();
    // const [expire, setExpire] = useState();

    // const getoupon = useSelector(state => state.coupons.oneCoupon)
    // const Coupon = getoupon && getoupon.data ? getoupon.data : []

    // useEffect(() => {
    //     if (Coupon && Coupon.expire) {
    //         // Format the expiration date to 'yyyy-MM-dd' format
    //         const formattedExpireDate = formatDate(Coupon.expire);
    //         setExpire(formattedExpireDate);
    //         setName(Coupon.name)
    //         setdescount(Coupon.discount)
    //     }
    // }, [CouponId]);

    // if (Coupon) console.log(Coupon);
    // Function to format date string to 'yyyy-MM-dd' format
    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     const year = date.getFullYear();
    //     let month = (1 + date.getMonth()).toString();
    //     month = month.length > 1 ? month : "0" + month;
    //     let day = date.getDate().toString();
    //     day = day.length > 1 ? day : "0" + day;
    //     return year + "-" + month + "-" + day;
    // };

    // const navigate = useNavigate()
    const dispatch = useDispatch();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [openDelProgress, setOpenDelProgress] = useState(false);
    // const [openEdProgress, setOpenEdProgress] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDelCop, setOpenDelCop] = useState(false);
    // const [openEdCop, setOpenEdCop] = useState(false);
    const [check, setCheck] = useState();
    const [delLoading, setDelLoading] = React.useState(false);
    // const [editLoading, setEditLoading] = React.useState(false);
    const [open, setOpen] = useState(false);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = "primary-search-account-menu";

    const updateCop = useSelector((state) => state.coupons.updatecoupon);
    if (updateCop) console.log(updateCop);

    const deleteCop = useSelector((state) => state.coupons.deletecoupon);
    if (deleteCop) console.log(deleteCop);


    const handleProfileMenuOpen = (event, val) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // get One Coupon
    // useEffect(() => {
    //     const getOneCoupon = async () => {
    //         await dispatch(getCoupon(CouponId))
    //     }
    //     getOneCoupon()

    // }, [CouponId]);



    // delete coupIon
    const handledeleteCoupon = async () => {
        // e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }

        setDelLoading(true);
        await dispatch(deleteCoupon(CouponId));
        setDelLoading(false);
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
        setOpenDelCop(false)
        setAnchorEl(false)
    };

    //   edit coupon hook
    // const handleEditCoupon = async () => {
    //     // e.preventDefault();
    //     if (!navigator.onLine) {
    //         UseNotification("you're Offline", "error");
    //         return;
    //     }
    //     if (!name || !descount || !expire) {
    //         setEditLoading(false);
    //         UseNotification("pleas enter the coupon property", "warning");
    //     } else if (name && descount > 0 && expire) {
    //         setEditLoading(true);
    //         await dispatch(
    //             updateCoupon("Coupon._id", { name, discount: descount, expire })
    //         );
    //         setEditLoading(false);
    //         setOpenEdCop(false)
    //         setAnchorEl(false)
    //         setTimeout(() => {
    //             window.location.reload(false)
    //         }, 1000);
    //     }
    // };

    const handleClose = () => {
        setOpen(false);
    };


    const openDeleteCop = async () => {
        setOpenDelCop(true);
        setAnchorEl(false);
    };

    // const openEditCop = async () => {

    //     // setOpenEdCop(true);
    //     // setAnchorEl(false);
    // };

    const handleDelCopClose = () => {
        setOpenDelCop(false);
    };

    // const handleEditCopClose = () => {
    //     setOpenEdCop(false);
    // };



    // useEffect(() => {
    //     if (!editLoading) {
    //         setOpenEdProgress(false);


    //         setOpen(false);
    //         if (updateCop && check) {
    //             if (updateCop.status === 200) {
    //                 UseNotification("coupon updated successfuly!", "success");
    //             } else if (updateCop.data && updateCop.data.errors) {
    //                 setEditLoading(false);
    //                 UseNotification(updateCop.data.errors[0].msg, "error");
    //             }
    //         }
    //     } else {
    //         setOpen(true);
    //     }
    //     setCheck(false);
    // }, [editLoading]);

    useEffect(() => {
        if (!delLoading) {
            setOpenDelProgress(false);
            if (deleteCop && check) {
                if (deleteCop.status === 200) {
                    UseNotification("coupon deleted successfuly!", "success");

                } else if (deleteCop.data && deleteCop.data.errors) {
                    setDelLoading(false);
                    UseNotification(deleteCop.data.errors[0].msg, "error");
                }
            }

        } else {
            setOpenDelProgress(true);

        }
        setCheck(false);
    }, [delLoading]);

    return [open, openDeleteCop, handledeleteCoupon, anchorEl, menuId, openDelProgress, isMenuOpen, handleMenuClose, openDelCop, fullScreen, handleClose, handleDelCopClose, handleProfileMenuOpen]
}

export default EditOrDelCouponHook
