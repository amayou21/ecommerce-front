import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@emotion/react";
import { useMediaQuery } from '@mui/material';
import UseNotification from '../useNotification';
import { AllCategory } from '../../Redux/actions/categoryAction';
import { createSubCategry } from '../../Redux/actions/subCategoryAction';
const AddSubCategryHook = () => {


    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const [cat, setCat] = useState("0");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState();

    const res = useSelector((val) => val.allCategory.category);
    const categories = res.data ? res.data.documents : [];
    const subCategories = useSelector((val) => val.allSubCategory.subCategory);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(AllCategory(50));
    }, [open]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        if (!name || !cat || cat === "0") {
            setLoading(false);
            UseNotification("sub category name and category are required", "warning");
            setOpen(false);
        } else if (name && cat) {
            setLoading(true);
            await dispatch(createSubCategry({ name, category: cat }));
            setLoading(false);
            setCheck(true);
        }
    };

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            setCat("0");
            setName("");
            if (subCategories) {
                if (subCategories && check) {
                    if (subCategories.status) {
                        if (subCategories.status === 201) {
                            setLoading(false);

                            UseNotification("created successfuly!", "success");
                            setOpen(false);
                        } else {
                            setLoading(false);
                            UseNotification(subCategories.data.errors[0].msg, "error");
                            setOpen(false);
                        }
                    }
                }
            }
        }
        setCheck(false);
    }, [loading]);


    return [fullScreen, open, handleClose, setName, name, setCat, cat, categories, selectedValue, handleChange, handleClickOpen, handleSubmit]
}

export default AddSubCategryHook;
