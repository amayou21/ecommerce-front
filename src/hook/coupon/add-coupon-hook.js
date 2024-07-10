import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import UseNotification from '../useNotification';
import { createCoupon } from '../../Redux/actions/couponAction';

function AddCouponHook(setOpenMadel) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [descount, setdescount] = useState(0);
    const [expire, setExpire] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState();
    const coupon = useSelector((state) => state.coupons.createCoupon);
    if (coupon) console.log(coupon);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        if (!name || !descount || !expire) {
            setLoading(false);
            UseNotification("pleas enter the coupon property", "warning");
        } else if (name && descount > 0 && expire) {
            setLoading(true);
            await dispatch(createCoupon({ name, discount: descount, expire }));
            setLoading(false);
            setCheck(true);
        }
    };

    useEffect(() => {
        if (!loading) {
            if (
                coupon === "error : AxiosError: Request failed with status code 401"
            ) {
                setOpen(false);
                UseNotification("You are not allowed to access this route", "error");
                return;
            }

            setOpen(false);
            if (coupon) {
                if (coupon && check) {

                    if (coupon.status) {

                        // console.log(coupon.status);
                        if (coupon.status === 201) {
                            setLoading(false);
                            UseNotification("created successfuly!", "success");
                            setTimeout(() => {
                                setOpenMadel(false);
                            }, 1000);
                        }
                         else {
                            setLoading(false);
                            UseNotification(coupon.data.errors[0].msg, "error");
                        }
                    }
                }
            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);

    return [name, setName, expire, setExpire, descount, setdescount, handleSubmit, handleClose, open]
}

export default AddCouponHook