import React, { useState } from 'react'
import { useDispatch } from 'react-redux';



const dispatch = useDispatch();
const [name, setName] = useState("");
const [descount, setdescount] = useState(0);
const [expire, setExpire] = useState();
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);
const [check, setCheck] = useState();


// const coupon = useSelector((state) => state.coupons.createCoupon);

const AddAddressHook = () => {
    return (
        <div>

        </div>
    )
}

export default AddAddressHook
