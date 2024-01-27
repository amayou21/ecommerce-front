import React from "react";
import { ToastContainer } from "react-toastify";
import {
  Box,
  Button,
  MenuItem,
  IconButton,
  List,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";

import AddCategory from "../../Admin/AddCategory/Index";
import AddSubCategryHook from "../../../hook/subCategory/add-sub-categry-hook";

const Index = () => {
  const [
    fullScreen,
    open,
    handleClose,
    setName,
    name,
    setCat,
    cat,
    categories,
    selectedValue,
    handleChange,
    handleClickOpen,
    handleSubmit,
  ] = AddSubCategryHook();

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

      <div className="flex justify-center items-center">
        <div className="mb-20" component="form">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
              <TextField
                value={name}
                required
                id="name"
                label="Name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <TextField
                onChange={(e) => {
                  setCat(e.target.value);
                }}
                value={cat}
                required
                id="Category"
                select
                label="Category"
                placeholder="Select Category"
                defaultValue="0"
              >
                <MenuItem value="0">
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
            </div>
          </Box>

          <Box className="px-2 mt-2 flex justify-start">
            <Button variant="contained" onClick={handleSubmit}>
              add
            </Button>
          </Box>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Index;
