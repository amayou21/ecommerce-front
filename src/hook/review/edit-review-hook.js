
import React, { useEffect, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, updateReview } from "../../Redux/actions/reviewAction";
import { useTheme } from "@emotion/react";
import UseNotification from "../useNotification";
import ProductRetingHook from "./product-reting-hook";

const EditReviewHook = (prod) => {

    const currentUserId = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";

    const reviewUserID = prod.user ? prod.user._id : "";

    // console.log(currentUserId._id,reviewUserID);

    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();
    const [openDelProgress, setOpenDelProgress] = useState(false);
    const [openEdProgress, setOpenEdProgress] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDelRev, setOpenDelRev] = useState(false);
    const [editRat, setEditRat] = useState(prod.retings);
    const [editComment, setEditComment] = useState(prod.title);
    const [openEdRev, setOpenEdRev] = useState(false);
    const [check, setCheck] = useState();


    const [delLoading, setDelLoading] = React.useState(false);
    const [editLoading, setEditLoading] = React.useState(false);
    const menuId = "primary-search-account-menu";


    const isMenuOpen = Boolean(anchorEl);
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const delRev = useSelector((state) => state.reviewReducer.deleteReview);
    // if (delRev) console.log(delRev);

    const updateRev = useSelector((state) => state.reviewReducer.updateReview);
    // if (updateRev) console.log(updateRev);

    // if (prod) console.log(prods);
    const handleProfileMenuOpen = (event, val) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };



    const delete_Review = async () => {
        setDelLoading(true);
        await dispatch(deleteReview(prod._id));
        setDelLoading(false);
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);

        setOpenDelRev(false);
        setAnchorEl(false);
    };

    const edit_Rev = async () => {
        setEditLoading(true);
        await dispatch(updateReview(prod._id, { retings: editRat, title: editComment }));
        setEditLoading(false);
        setOpenEdRev(false)
        setAnchorEl(false);
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    };

    const handleCloseEdRev = () => {
        setOpenEdRev(false);
        setAnchorEl(false);
    }

    const openEditRev = async () => {
        setOpenEdRev(true);
        setAnchorEl(false);
    };

    const openDeleteRev = async () => {
        setOpenDelRev(true);
        setAnchorEl(false);
    };

    const handleCloseDelRev = () => {
        setOpenDelRev(false);
        setAnchorEl(false);
    };

    const handleCloseDelDev = () => {
        setOpenDelRev(false);
        setAnchorEl(false);
    };


    useEffect(() => {
        if (!delLoading) {

            setOpenDelProgress(false);
            if (delRev) {


                if (delRev.status === 204) {
                    UseNotification("review deleted successfuly!", "success");

                } else if (delRev.data && delRev.data.errors) {
                    setDelLoading(false);
                    UseNotification(delRev.data.errors[0].msg, "error");
                    // setComment("");
                    // setValue(0);
                }

            }

        }
        else {
            setOpenDelProgress(true);
        }
        setCheck(false);
    }, [delLoading]);


    useEffect(() => {
        if (!editLoading) {

            setOpenEdProgress(false);
            if (delRev) {


                if (delRev.status === 204) {
                    UseNotification("review updated successfuly!", "success");

                } else if (delRev.data && delRev.data.errors) {
                    setEditLoading(false);
                    UseNotification(delRev.data.errors[0].msg, "error");
                }

            }

        }
        else {
            setOpenEdProgress(true);
        }
        setCheck(false);
    }, [editLoading]);



    return [
        anchorEl,
        menuId,
        isMenuOpen,
        handleMenuClose,
        openDeleteRev,
        openEditRev,
        fullScreen,
        openDelRev,
        handleCloseDelDev,
        delete_Review,
        handleCloseDelRev,
        openEdRev,
        handleCloseEdRev,
        edit_Rev,
        currentUserId,
        reviewUserID,
        handleProfileMenuOpen,
        editRat,
        setEditRat,
        setEditComment,
        editComment,
        openDelProgress,
        openEdProgress
    ]
}

export default EditReviewHook;
