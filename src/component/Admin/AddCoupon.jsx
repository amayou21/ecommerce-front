import React from "react";
import { ToastContainer } from "react-toastify";
import { Box, Button, TextField } from "@mui/material";
const AddCoupon = () => {
  return (
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
            <TextField required id="name" label="Name" placeholder="Name" />
            <TextField required id="Category" label="expire" type="date" />
          </div>
        </Box>
        <Box className="px-2 mt-2">
          <TextField
            fullWidth
            required
            type="number"
            id="discount"
            label="discount"
            placeholder="discount"
            variant="outlined"
          />
        </Box>

        <Box className="px-2 mt-2 flex justify-start">
          <Button variant="contained">create</Button>
        </Box>
        {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddCoupon;
