import React, { useEffect, useState } from 'react';

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryOnCategory } from "../../Redux/actions/subCategoriesOnCategoryAction"
import { AllCategory } from '../../Redux/actions/categoryAction';
import { AllBrand } from '../../Redux/actions/brandAction';
import UseNotification from '../useNotification';
import { getOneProduct, updateProduct } from '../../Redux/actions/productAction'
import { useParams } from 'react-router-dom';

const EditProductHook = () => {
    const { id } = useParams();
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        const getProd = async () => {
            await dispatch(getOneProduct(id));
        };
        getProd();
    }, []);


    const [open, setOpen] = useState(false);
    const [openBra, setOpenBra] = useState(false);
    const [openCat, setOpenCat] = useState(false);

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
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState();

    // state to show hight color picker
    const [showColor, setShowColor] = useState(false);


    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const prod = useSelector((state) => state.allProduct.oneProduct);

    const res = useSelector((val) => val.allCategory.category);
    const categories = res.data ? res.data.documents : [];

    const brand = useSelector((val) => val.allBrand.brand);
    const brands = brand.data ? brand.data.documents : [];

    const subCategory = useSelector(
        (val) => val.allSubCategoryOnCategory.subCategoryOnCategory
    );

    const product = useSelector((val) => val.allProduct.updateProd);
    // if (product) console.log(product)


    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    useEffect(() => {
        if (prod) {
            if (prod.data) {
                setProdName(prod.data.title);
                setImages(prod.data.images);
                setProdDesc(prod.data.description);
                setSubCatID(prod.data.subcategory);
                setColors(prod.data.colors);
                if (prod.data.brand) {
                    setBraID(prod.data.brand._id);
                }
                if (prod.data.category) {
                    setCatID(prod.data.category._id);
                }
                setPriceAfter(prod.data.priceAfterDescount);
                setPriceBefor(prod.data.price);
                setQty(prod.data.quantity);
                setSpecSubCategories(prod.data.subcategory)
            }
        }

    }, [prod]);

    useEffect(() => {
        dispatch(AllCategory(200));
    }, [openCat]);

    useEffect(() => {
        dispatch(AllBrand(200));
    }, [openBra]);




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
        setCatID(val);
    };

    useEffect(() => {
        const run = async () => {
            if (catID != "select") {
                await dispatch(subCategoryOnCategory(catID));
            }
        }
        run()
    }, [catID]);


    useEffect(() => {
        if (subCategory.data) {
            setSpecSubCategories(subCategory.data.documents)
        }
    }, [subCategory]);

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
    const dataURLtoFile = (dataurl, filename) => {
        if (dataurl && dataurl.split(",")[1]) {
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

    // Function to convert image URL to image file
    const convertImageUrlToImageFile = async (url) => {
        if (url) {
            const response = await fetch(url, { mode: "cors" });
            const data = await response.blob();
            const ext = await url.split(".").pop();
            const filename = await url.split("/").pop()
            const metadata = await { type: `image/${ext}` };
            return new File([data], Math.random(), metadata)
        }

    }

    //  edit product
    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageCover;
        let prodImages = []

        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }


        if (!images || Object.keys(images).length === 0) {
            UseNotification("pleas upload the product image", "warning")
            return;
        } else {

            // console.log(images);
            if (images[0].length <= 1000) {
                // convert image url to file
                convertImageUrlToImageFile(images[0]).then(val => imageCover = val)
            } else {
                // convert base 64 to file
                imageCover = dataURLtoFile(...images[0], Math.random() + ".png")

            }
            // Using Object.keys()
            await Promise.all(
                Array.from(Array(Object.keys(images).length).keys()).map(async (item, index) => {
                    if (images[index].length <= 1000) {
                        const val = await convertImageUrlToImageFile(images[index]);
                        prodImages.push(val);
                    } else {
                        prodImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
                    }
                })
            );

        }


        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDesc);
        formData.append("category", catID);
        formData.append("imageCover", imageCover);
        formData.append("price", priceBefor);
        formData.append("quantity", qty);

        if (braID && braID !== "select") {
            formData.append("brand", braID);
        }


        if (priceAfter) {
            formData.append("priceAfterDescount", priceAfter)
        }

        if (prodImages) {
            await prodImages.map((img) => formData.append("images", img));
        }
        if (colors) {
            colors.map((color) => formData.append("colors", color));
        }
        if (subCatID) {
            subCatID.map((id) => formData.append("subcategory", id._id));
        }

        setLoading(true);
        await dispatch(updateProduct(id, formData));
        setLoading(false);
        setCheck(true);


    };

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (product && check) {
                if (product.status) {
                    if (product.status === 200) {
                        setLoading(false);
                        UseNotification("updated successfuly!", "success");
                        // setProdName("");
                        // setImages({});
                        // setProdDesc("");
                        // setSubCatID();
                        // setColors([]);
                        // setBraID("");
                        // setPriceAfter("");
                        // setPriceBefor("");
                        // setQty("");
                        // setCatID("");
                        // setSpecSubCategories([])
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

export default EditProductHook;
