import React from "react";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
import { ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const [changeEmail, email, open, handleClose, loading, handleSubmit, theme] =
    ForgetPasswordHook();

  return (
    <div
      className="flex justify-center items-center mt-4 w-[100%] "
      component="form"
    >
      <Paper className="mt-10 p-4 " component="form">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h2 className="flex justify-center items-center text-2xl font-bold">
            Forget Password
          </h2>

          <div className="grid grid-cols-1 ">
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={changeEmail}
            />
          </div>
          <Typography
            variant="body2"
            className="w-[30ch] px-3 py-2 "
            fontSize="15px"
          >
            We’ll send a verification code to this email if it matches an
            existing E-commerce account.
          </Typography>

          <div className="px-2 py-3">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Next
            </Button>
            {/* <div className="flex justify-center items-start my-4">
              <Typography variant="body1" color="info">
                <Link to="/login"> Back</Link>
              </Typography>
            </div> */}
          </div>
        </Box>
      </Paper>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer theme={theme.palette.mode} />
    </div>
  );
};

export default ForgetPassword;
