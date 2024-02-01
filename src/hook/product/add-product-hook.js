import React, { useEffect, useState } from 'react';

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryOnCategory } from "../../Redux/actions/subCategoriesOnCategoryAction"
import { AllCategory } from '../../Redux/actions/categoryAction';
import { AllBrand } from '../../Redux/actions/brandAction';
import UseNotification from '../useNotification';
import { createProduct } from '../../Redux/actions/productAction'

const AddProductHook = () => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [openBra, setOpenBra] = useState(false);
    const [openCat, setOpenCat] = useState(false);

    const res = useSelector((val) => val.allCategory.category);
    const categories = res.data ? res.data.documents : [];

    const brand = useSelector((val) => val.allBrand.brand);
    const brands = brand.data ? brand.data.documents : [];

    const subCategory = useSelector(
        (val) => val.allSubCategoryOnCategory.subCategoryOnCategory
    );

    const product = useSelector((val) => val.allProduct.product);
    // const products = product.data ? product.data.documents : [];

    console.log(product);

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // values images products
    const [images, setImages] = useState({});

    // values state

    const [specSubCategories, setSpecSubCategories] = useState([]);
    const [prodName, setProdName] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [priceBefor, setPriceBefor] = useState("");
    const [priceAfter, setPriceAfter] = useState("");
    const [qty, setQty] = useState("");
    const [catID, setCatID] = useState("");
    const [braID, setBraID] = useState("");
    const [subCatID, setSubCatID] = useState();
    const [selectedSubID, setSselectedSubID] = useState([]);
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(false);

    const [check, setCheck] = useState();

    // state to show hight color picker
    const [showColor, setShowColor] = useState(false);

    // on select color
    const handleChangeComplete = (color) => {
        setColors([...colors, color.hex]);
        setShowColor(false);
    };

    // remove color
    const removeColor = (c) => {
        const newColors = colors.filter((val) => val !== c);
        setColors(newColors);
    };

    const onSelect = (e) => {
        setSubCatID(e);
    };

    const onCatChange = async (val) => {
        if (val != "select") {
            await dispatch(subCategoryOnCategory(val));
        }
        setCatID(val);
    };

    useEffect(() => {
        if (catID != "select") {
            if (subCategory.data) {
                setSpecSubCategories(subCategory.data.documents);
            }
        }
    }, [catID]);

    const handleClose = () => {
        setOpen(false);
    };

    // category
    const handleClickOpenCat = () => {
        setOpenCat(true);
    };

    const handleCloseCat = () => {
        setOpenCat(false);
    };

    // brand
    const handleClickOpenBra = () => {
        setOpenBra(true);
    };

    const handleCloseBra = () => {
        setOpenBra(false);
    };

    // conver base 64 image to file
    function dataURLtoFile(dataurl, filename) {
        if (dataurl.split(",")[1]) {
            var arr = dataurl.split(","),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        }
    }

    useEffect(() => {
        dispatch(AllCategory(200));
    }, [openCat]);

    useEffect(() => {
        dispatch(AllBrand(200));
    }, [openBra]);

    //  create product
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        } else {
            // convert base 64 to file
            const imageCover = images
                ? dataURLtoFile(images[0], Math.random() + ".png")
                : null;
            // Using Object.keys()
            if (images) {
                var prodImages = await Promise.all(
                    Array.from(Array(Object.keys(images).length).keys()).map(
                        (item, index) => {
                            return dataURLtoFile(images[index], Math.random() + ".png");
                        }
                    )
                );
            }

            if (prodImages && prodName && prodDesc && catID && priceBefor && qty) {
                setLoading(true);
                const formData = new FormData();
                formData.append("title", prodName);
                formData.append("description", prodDesc);
                formData.append("category", catID);

                formData.append("imageCover", imageCover);
                formData.append("price", priceBefor);
                formData.append("quantity", qty);
                formData.append("priceAfterDescount", priceAfter)

                if (prodImages) {
                    prodImages.map((img) => formData.append("images", img));
                }

                if (colors) {
                    colors.map((color) => formData.append("colors", color));
                }
                if (subCatID) {
                    subCatID.map((id) => formData.append("subcategory", id._id));
                }

                // id._id)
                await dispatch(createProduct(formData));
                setLoading(false);
                setCheck(true);
            }
        }
    };

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (product && check) {
                if (product.status) {
                    if (product.status === 201) {
                        setLoading(false);
                        UseNotification("created successfuly!", "success");

                        setProdName("");
                        setImages({});
                        setProdDesc("");
                        setSubCatID();
                        setColors([]);
                        setBraID("select");
                        setPriceAfter("");
                        setPriceBefor("");
                        setQty("");
                        setCatID("select");
                    } else {
                        setLoading(false);
                        UseNotification(product.data.errors[0].msg, "error");
                    }
                }
            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);


    return [fullScreen, openCat, handleCloseCat, openBra, handleCloseBra, theme, images, setImages, prodName, setProdName, setQty, qty, setPriceBefor, priceBefor, setPriceAfter, priceAfter, onCatChange, catID, categories, selectedValue, handleChange, handleClickOpenCat, setBraID, braID, brands, handleClickOpenBra, onSelect, specSubCategories, setProdDesc, prodDesc, colors, setShowColor, removeColor, showColor, handleChangeComplete, handleSubmit, open, handleClose]

}

export default AddProductHook;
