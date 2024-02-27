import React from "react";

import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import VerifyResetCodeHook from "../../hook/auth/verify-reset-code-hook";
import { ToastContainer } from "react-toastify";

const VerifyResetCode = () => {
  const [changeResetCode, resetCode, open, handleClose, handleSubmit, theme] =
    VerifyResetCodeHook();

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
            Enter the 6-digit code
          </h2>
          <Typography
            variant="body2"
            className="w-[30ch] px-3 py-1"
            fontSize="15px"
          >
            {`Check ${localStorage.getItem("email")} for a verification code.`}
          </Typography>
          <Typography variant="body1" color="primary" className="px-3">
            <Link to="/foget-password"> change</Link>
          </Typography>
          <div className="grid grid-cols-1 ">
            <TextField
              type=""
              fullWidth
              required
              placeholder="6-digit code"
              value={resetCode}
              onChange={changeResetCode}
            />
          </div>
          <Typography
            variant="body2"
            className="w-[30ch] px-3 py-2 "
            fontSize="15px"
          >
            If you don't see a code in your inbox, check your spam folder. If
            it's not there, the email address may not be confirmed, or it may
            not match an existing LinkedIn account.
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
            <div className="flex justify-center items-start my-4">
              <Typography variant="body1" color="info">
                <Link to="/login"> Back</Link>
              </Typography>
            </div>
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

export default VerifyResetCode;
