import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { AllCoupons } from '../../Redux/actions/couponAction';
import { useMediaQuery } from '@mui/material';

function GetCouponsHook() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [openMadel, setOpenMadel] = useState(false);

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
        setOpenMadel(true);
    };

    const handleClose = () => {
        setOpenMadel(false);
    };

    const getCoupons = useSelector((state) => state.coupons.coupon);
    const coupons = getCoupons ? getCoupons.data : [];
    // if (coupons) console.log(coupons.documents);

    useEffect(() => {
        const getCoupon = async () => {
            await dispatch(AllCoupons(50));
        };
        getCoupon();
    }, [openMadel]);
    return [fullScreen, openMadel, handleClose, setOpenMadel, coupons, handleClickOpen]
}

export default GetCouponsHook
