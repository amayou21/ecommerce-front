import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allReviews, createReview } from '../../Redux/actions/reviewAction';
import UseNotification from '../useNotification';



const ProductRetingHook = (id) => {




    const allreviews = useSelector(state => state.reviewReducer.reviews)
    const res = useSelector(state => state.reviewReducer.creataeReview)

    const reviews = allreviews.data ? allreviews.data : []

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState();
    const [open, setOpen] = useState(false);


    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }

        if (!value || !comment) {
            setLoading(false);
            UseNotification("review rating and comment are required", "warning");
            return;
        }

        if (!localStorage.getItem("token")) {
            UseNotification("You are not login, pleas login again to crate a review", "warning");
            return;
        }

        setLoading(true);
        await dispatch(createReview(id, {
            title: comment,
            retings: value
        }))
        setLoading(false);
        setCheck(true);

    };


    useEffect(() => {
        dispatch(allReviews(id))
    }, [open]);

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (res) {

                if (res && check) {
                    if (res.status) {
                        if (res.status === 201) {
                            setLoading(false);
                            setComment("");
                            setValue(0);
                            UseNotification("review created successfuly!", "success");

                        } else if (res.data) {
                            if (res.data.errors) {
                                setLoading(false);
                                UseNotification(res.data.errors[0].msg, "error");
                                setComment("");
                                setValue(0);
                            } else if (res.data.message) {
                                setLoading(false);
                                UseNotification(res.data.message, "error");
                                setComment("");
                                setValue(0);
                            }
                        }
                    }
                }
            }


        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);


    return [comment, setComment, hover, setHover, value, setValue, reviews, handleSubmit, handleClose, open, setOpen]

}

export default ProductRetingHook;
