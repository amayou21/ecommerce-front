import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getCoupon, updateCoupon } from '../../Redux/actions/couponAction';
import UseNotification from '../useNotification';

function EditCouponHook() {


    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const cp = useSelector(state => state.coupons.oneCoupon)
    // if (cp) console.log(cp);
    const [name, setName] = useState("");
    const [descount, setdescount] = useState(0);
    const [expire, setExpire] = useState();
    const [editLoading, setEditLoading] = useState(false);
    const [openDelProgress, setOpenDelProgress] = useState(false);
    const [check, setCheck] = useState();
    // Function to format date string to 'yyyy-MM-dd' format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : "0" + month;
        let day = date.getDate().toString();
        day = day.length > 1 ? day : "0" + day;
        return year + "-" + month + "-" + day;
    };


    const edCoup = useSelector(state => state.coupons.updatecoupon)
    // if (edCoup) console.log(edCoup);
    const handleClose = () => {
        setOpenDelProgress(false);
    };

    useEffect(() => {
        if (cp && cp.data) {
            // Format the expiration date to 'yyyy-MM-dd' format
            const formattedExpireDate = formatDate(cp.data.expire);
            setExpire(formattedExpireDate);
            setName(cp.data.name)
            setdescount(cp.data.discount)
        }
    }, [cp]);

    const handleEditeCoupon = async () => {
        // e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }

        setEditLoading(true);
        await dispatch(updateCoupon(id, {
            "name": name,
            "expire": expire,
            "discount": descount
        }));
        setEditLoading(false);



        setCheck(true);
        // setAnchorEl(false)
    };

    useEffect(() => {
        const Coupon = async () => {
            await dispatch(getCoupon(id))
        }
        Coupon()
    }, [id]);


    useEffect(() => {
        if (!editLoading) {
            setOpenDelProgress(false);
            if (edCoup && check) {
                if (edCoup.status === 201) {
                    UseNotification("coupon updated successfuly!", "success");
                    setTimeout(() => {
                        navigate("/admin/add-coupon")
                    }, 2000);
                } else if (edCoup.data && edCoup.data.errors) {
                    setEditLoading(false);
                    UseNotification(edCoup.data.errors[0].msg, "error");
                }
            }

        }
        // else {
        //     setOpenDelProgress(true);
        // }
        setCheck(false);
    }, [editLoading]);

    return [cp, name, descount, expire, setName, setdescount, openDelProgress, handleClose, setExpire, handleEditeCoupon]
}

export default EditCouponHook
