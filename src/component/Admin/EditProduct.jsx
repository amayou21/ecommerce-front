import React from "react";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";

import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  List,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";
import CircleIcon from "@mui/icons-material/Circle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MultiImageInput from "react-multiple-image-input";

import AddCategory from "../Admin/AddCategory/Index";
import AddBrand from "../Admin/AddBrand/Index";
import EditProductHook from "../../hook/product/edit-product-hook";

const EditProduct = () => {
  const [
    fullScreen,
    openCat,
    handleCloseCat,
    openBra,
    handleCloseBra,
    theme,
    images,
    setImages,
    prodName,
    setProdName,
    setQty,
    qty,
    setPriceBefor,
    priceBefor,
    setPriceAfter,
    priceAfter,
    onCatChange,
    catID,
    categories,
    selectedValue,
    handleChange,
    handleClickOpenCat,
    setBraID,
    braID,
    brands,
    handleClickOpenBra,
    onSelect,
    specSubCategories,
    setProdDesc,
    prodDesc,
    colors,
    setShowColor,
    removeColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    open,
    handleClose,
  ] = EditProductHook();
  return (
    <div>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openCat}
          onClose={handleCloseCat}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddCategory />
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleCloseCat}>
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

      <div className="mb-20" component="form">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
            xl: { width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="justify-center  lg:w-[63ch] xl:w-[63ch] md:w-[63ch]  sm:w-[30ch]">
            <Typography variant="body1" color="inherit">
              Upload Product Images
            </Typography>

            {/* upload image input */}
            <MultiImageInput
              theme={theme.palette.mode}
              images={images}
              setImages={setImages}
              allowCrop={false}
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
              label="Price"
              placeholder="Price"
            />

            {/* Price After Descount */}
            <TextField
              onChange={(e) => {
                setPriceAfter(e.target.value);
              }}
              value={priceAfter}
              type="number"
              id="price-after-descount"
              label="Price After Descount"
              placeholder="Price After Descount"
            />

            {/* category */}
            <TextField
              onChange={(e) => {
                onCatChange(e.target.value);
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
                        <MenuItem key={val._id} value={val._id}>
                          {val.name}
                        </MenuItem>
                      );
                    })
                  : null
                : null}
              <List value={selectedValue} onChange={handleChange}>
                <MenuItem onClick={handleClickOpenCat}>
                  <div className="flex justify-between w-[100%]">
                    <Typography variant="p" color="primary">
                      Create Category
                    </Typography>
                    <AddIcon color="primary" />
                  </div>
                </MenuItem>
              </List>
            </TextField>

            {/* Brand */}
            <TextField
              onChange={(e) => {
                setBraID(e.target.value);
              }}
              value={braID}
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
                  ? brands.reverse().map((val) => {
                      return (
                        <MenuItem key={val._id} value={val._id}>
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
            onChange={(e, value) => onSelect(value)}
            fullWidth
            multiple
            id="tags-outlined"
            options={specSubCategories ? specSubCategories : []}
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
                      key={index}
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
          <IconButton
            onClick={() => {
              setShowColor(!showColor);
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </Box>

        {showColor ? (
          <CompactPicker onChangeComplete={(e) => handleChangeComplete(e)} />
        ) : null}
        <Box className="px-2 mt-2 flex justify-end">
          <Button variant="contained" onClick={handleSubmit}>
            edit
          </Button>
        </Box>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <ToastContainer theme={theme.palette.mode} />
      </div>
    </div>
  );
};

export default EditProduct;
