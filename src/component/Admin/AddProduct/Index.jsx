import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddCategory from "../../Admin/AddCategory/Index";
import AddBrand from "../../Admin/AddBrand/Index";

import { Box, IconButton, List, MenuItem, Typography } from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";
import CircleIcon from "@mui/icons-material/Circle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AllCategory } from "../../../Redux/actions/categoryAction";
import { AllBrand } from "../../../Redux/actions/brandAction";
import { SubCategory } from "../../../Redux/actions/subCategoryAction";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Index = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openBra, setOpenBra] = React.useState(false);

  // values images products
  const [images, setImages] = useState([]);

  // values state
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [priceBefor, setPriceBefor] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [qty, setQty] = useState("");
  const [catID, setCatID] = useState("");
  const [braID, setBraID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSselectedSubID] = useState([]);
  const [colors, setColors] = useState([]);

  // state to show hight color picker
  const [showColor, setShowColor] = useState(false);

  // on select color
  const handleChangeComplete = (color) => {
    setShowColor(false);
    setColors([...colors, color.hex]);
  };

  // remove color
  const removeColor = (c) => {
    const newColors = colors.filter((val) => val !== c);
    setColors(newColors);
  };

  const theme = useTheme();
  const res = useSelector((val) => val.allCategory.category);
  const categories = res.data ? res.data.documents : [];

  const brand = useSelector((val) => val.allBrand.brand);
  const brands = brand.data ? brand.data.documents : [];

  const subCategory = useSelector((val) => val.allSubCategory.subCategory);
  const subCategories = subCategory.data ? subCategory.data.documents : [];
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // category
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // brand
  const handleClickOpenBra = () => {
    setOpenBra(true);
  };

  const handleCloseBra = () => {
    setOpenBra(false);
  };

  // sub category
  // const handleClickOpenSubCat= () => {
  //   setOpenSubCat(true);
  // };

  // const handleCloseSubCat = () => {
  //   setOpenSubCat(false);
  // };

  useEffect(() => {
    dispatch(AllCategory(200));
  }, [open]);

  useEffect(() => {
    dispatch(AllBrand(200));
  }, [openBra]);

  useEffect(() => {
    dispatch(SubCategory(200));
  }, []);

  return (
    <>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddCategory />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleClose}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openBra}
          onClose={handleCloseBra}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddBrand />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleCloseBra}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      {/* <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openSubCat}
          onClose={handleCloseSubCat}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddSubCategory />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleCloseSUbCat}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
 */}

      <div className="mb-20" component="form">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Typography variant="body1" color="inherit">
              Upload House Images
            </Typography>

            {/* upload image input */}
            {/* <IconButton
              component="label"
              variant="contained"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent", // Set the background color to transparent on hover
                },
              }}
            >
              <CloudUploadIcon sx={{ fontSize: "80px" }} />
              <VisuallyHiddenInput type="file" />
            </IconButton> */}

            <MultiImageInput
              theme={theme.palette.mode}
              images={images}
              setImages={setImages}
              // cropConfig={{ crop, ruleOfThirds: true }}
              max={4}
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
            {/* title */}
            <TextField
              required
              id="title"
              label="Title"
              placeholder="Title"
              value={prodName}
              onChange={(e) => {
                setProdName(e.target.value);
              }}
            />

            {/* Quantity */}
            <TextField
              onChange={(e) => {
                setQty(e.target.value);
              }}
              value={qty}
              type="number"
              required
              id="quantity"
              label="Quantity"
              placeholder="Quantity"
            />

            {/* Price Befor Descount */}
            <TextField
              onChange={(e) => {
                setPriceBefor(e.target.value);
              }}
              value={priceBefor}
              type="number"
              required
              id="price-befor-descount"
              label="Price Befor Descount"
              placeholder="Price Befor Descount"
            />

            {/* Price After Descount */}
            <TextField
              onChange={(e) => {
                setPriceAfter(e.target.value);
              }}
              value={priceAfter}
              type="number"
              required
              id="price-after-descount"
              label="Price After Descount"
              placeholder="Price After Descount"
            />

            {/* category */}
            <TextField
              onChange={(e) => {
                setCatID(e.target.value);
              }}
              value={catID}
              required
              id="Category"
              select
              label="Category"
              placeholder="Select Category"
              defaultValue="select"
            >
              <MenuItem value="select">
                <p className="py-3"></p>
              </MenuItem>
              {categories
                ? categories.length > 0
                  ? categories.reverse().map((val, index) => {
                      return (
                        <MenuItem
                          key={val._id}
                          value={val._id}
                          className={`${
                            index === 0 ? "text-emerald-400" : null
                          }`}
                        >
                          {val.name}
                        </MenuItem>
                      );
                    })
                  : null
                : null}
              <List value={selectedValue} onChange={handleChange}>
                <MenuItem onClick={handleClickOpen}>
                  <div className="flex justify-between w-[100%]">
                    <Typography variant="p" color="primary">
                      Create Category
                    </Typography>
                    <AddIcon color="primary" />
                  </div>
                </MenuItem>
              </List>
            </TextField>

            {/* <Stack>
              <Autocomplete
                onChange={(e, value) => {
                  console.log(value);
                }}
                fullWidth
                multiple
                id="tags-outlined"
                options={subCategories ? subCategories.reverse() : []}
                getOptionLabel={(option) => option.name}
                value={
                  subCategories
                    ? subCategories.map((option) => option._id)
                    : null
                } // defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sub Category"
                    placeholder="Favorites"
                  />
                )}
              >
                {/* </List> */}
            {/* </Autocomplete>
            </Stack> */}

            {/* Brand */}
            <TextField
              onChange={(e) => {
                setBraID(e.target.value);
              }}
              value={braID}
              required
              id="brand"
              select
              label="Brand"
              placeholder="Select Brand"
              defaultValue="select"
            >
              <MenuItem value="select">
                <p className="py-3"></p>
              </MenuItem>
              {brands
                ? brands.length > 0
                  ? brands.reverse().map((val, index) => {
                      return (
                        <MenuItem
                          key={val._id}
                          value={val._id}
                          className={`${
                            index === 0 ? "text-emerald-400" : null
                          }`}
                        >
                          {val.name}
                        </MenuItem>
                      );
                    })
                  : null
                : null}
              <List value={selectedValue} onChange={handleChange}>
                <MenuItem onClick={handleClickOpenBra}>
                  <div className="flex justify-between w-[100%]">
                    <Typography variant="p" color="primary">
                      Create Brand
                    </Typography>
                    <AddIcon color="primary" />
                  </div>
                </MenuItem>
              </List>
            </TextField>
          </div>
        </Box>

        {/* sub category */}

        <Box className="px-2 mt-2">
          <Autocomplete
            fullWidth
            multiple
            id="tags-outlined"
            options={subCategories ? subCategories.reverse() : []}
            getOptionLabel={(option) => option.name}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Sub Category"
                placeholder="sub Category"
              />
            )}
          />
        </Box>

        {/* description */}
        <Box className="px-2 mt-2">
          <TextField
            onChange={(e) => {
              setProdDesc(e.target.value);
            }}
            value={prodDesc}
            fullWidth
            required
            multiline
            id="description"
            label="Description"
            placeholder="Description"
            variant="outlined"
          />
        </Box>

        <Box className="px-2 mt-2">
          <Typography variant="div" color="inherit">
            Colors :
          </Typography>
          {colors
            ? colors.length > 0
              ? colors.map((c, index) => {
                  return (
                    <IconButton
                      onClick={() => {
                        removeColor(c);
                      }}
                    >
                      <CircleIcon key={index} sx={{ color: c }} />
                    </IconButton>
                  );
                })
              : null
            : null}

          {/* <IconButton>
            <CircleIcon sx={{ color: "yellow" }} />
          </IconButton>
          <IconButton>
            <CircleIcon sx={{ color: "black" }} />
          </IconButton> */}
          <IconButton
            onClick={() => {
              setShowColor(!showColor);
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </Box>
        {showColor ? (
          <CompactPicker onChangeComplete={handleChangeComplete} />
        ) : null}
        <Box className="px-2 mt-2 flex justify-end">
          <Button variant="contained">add</Button>
        </Box>
      </div>
    </>
  );
};

export default Index;
