import React from "react";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  Box,
  CircularProgress,
  Backdrop,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useTheme } from "@emotion/react";
import SignupHook from "../../hook/auth/signup-hook";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const [
    lName,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    handleSubmit,
    open,
    handleClose,
    name,
    changeName,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    changePhone,
    changeLName,
    setLoading,
  ] = SignupHook();

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mt-4 w-[100%] ">
      <Paper className="mt-10 p-4 " component="form">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h2 className="flex justify-center items-center text-2xl font-bold">
            Register
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
            <TextField
              label="First Name"
              fullWidth
              required
              value={name}
              onChange={(e) => changeName(e)}
            />
            <TextField
              label="Last Name"
              fullWidth
              value={lName}
              onChange={changeLName}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={changeEmail}
            />
            <TextField
              label="phone"
              type="phone"
              fullWidth
              value={phone}
              onChange={changePhone}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={changePassword}
            />
            <TextField
              label="confirm password"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={changeConfirmPassword}
            />
          </div>

          <div className="px-2 my-2">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Sign up
            </Button>
            <Divider className="py-2">or</Divider>

            <div className="flex justify-between items-center ">
              <Typography variant="p" color="inhiret">
                Have an account?
              </Typography>
              <Button
                onClick={() => navigate("/login")}
                className={`${theme.palette.btnBgColor}`}
                variant="contained"
                color={theme.palette.mode === "dark" ? "warning" : "primary"}
                endIcon={
                  <ArrowForwardOutlinedIcon
                    className={
                      theme.palette.mode === "dark"
                        ? "text-red-300"
                        : "text-white"
                    }
                  />
                }
              >
                login
              </Button>
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

export default Register;
