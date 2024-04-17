// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AddProdToWish } from '../Redux/actions/wishListAction';
// import { createCategory } from "../../Redux/actions/categoryAction";
// import { useTheme } from "@mui/material";
// import UseNotification from '../hook/useNotification';

// const AddProductToWhishListHook = () => {

//     const theme = useTheme()

// const dispatch = useDispatch();

// const [open, setOpen] = useState(false);
//     const [check, setCheck] = useState();

// // const [wprod, setWProd] = useState("660d369c63e03e407057f3b9");

// const [loading, setLoading] = useState(false);

// const handleClose = () => {
//     setOpen(false);
// };

// const wishprod = useSelector((val) => val.wishList.addprodToWish);
// if (wishprod) console.log(wishprod);

// // const onImageChange = (event) => {
// //     if (
// //         event.target.files &&
// //         event.target.files[0] &&
// //         event.target.files[0].type.split("/")[0] === "image"
// //     ) {
// //         setImage(URL.createObjectURL(event.target.files[0]));
// //         setSelectingImage(event.target.files[0]);
// //     } else {
// //         UseNotification("Accept just image format", "warning");
// //     }
// // };

// const handleSubmit = async (p) => {

//     // e.preventDefault();

//     if (!navigator.onLine) {
//         UseNotification("you're Offline", "error");
//         return;
//     }
//     if (!p) {
//         setLoading(false);
//         UseNotification("select a product to wishlist", "warning");
//     } else if (p) {
//         setLoading(true);
//         console.log(p);
//         await dispatch(AddProdToWish({
//             "product": p
//         }));
//         setLoading(false);
//         setCheck(true);
//     }
// };


// useEffect(() => {
//     if (!loading) {
//         setOpen(false);
//         if (wishprod) {
//             if (wishprod && check) {
//                 if (wishprod.status) {

//                     if (wishprod.status === 201) {
//                         setLoading(false);
//                         //   setImage("");
//                         //   setName("");
//                         UseNotification("created successfuly!", "success");
//                     } else {
//                         setLoading(false);
//                         UseNotification(wishprod.data.errors[0].msg, "error");
//                     }
//                 }
//             }
//         }


//     } else {
//         setOpen(true);
//     }
//     setCheck(false);
// }, [loading]);


// useEffect(() => {
//     if (!loading) {

//         // if (wishprod === 'error : AxiosError: Request failed with status code 401') {
//         //     setOpen(false)
//         //     UseNotification("You are not allowed to access this route", "error");
//         //     return;
//         // }


//         setOpen(false);
//         if (wishprod) {
//             console.log(wishprod);
//         }


//     } else {
//         setOpen(true);
//     }
//     setCheck(false);
// }, [loading]);

// return [handleSubmit, open, handleClose]
// };


// export default AddProductToWhishListHook
