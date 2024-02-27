import React from "react";

import {
  Paper,
  Box,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import { ToastContainer } from "react-toastify";

import ResetPasswordHook from "../../hook/auth/reset-password-hook";
const ResetPassword = () => {
  const [
    changeNewPassword,
    changePasswordConfirm,
    newPassword,
    passwordConfirm,
    open,
    handleClose,
    handleSubmit,
    theme,
  ] = ResetPasswordHook();

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
            Reset Your Password
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
            <TextField
              label="new password"
              type="password"
              fullWidth
              required
              value={newPassword}
              onChange={changeNewPassword}
            />
            <TextField
              label="confirm password"
              type="password"
              fullWidth
              required
              value={passwordConfirm}
              onChange={changePasswordConfirm}
            />
          </div>

          <div className="px-2 py-3">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              reset password
            </Button>
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

export default ResetPassword;
