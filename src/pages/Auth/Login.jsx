import React from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@emotion/react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Divider, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../hook/auth/login-hook";

const LoginPage = () => {
  const [
    handleSbmit,
    email,
    password,
    changeEmail,
    changePassword,
    loading,
    handleClose,
    open,
    navigate,
    theme,
  ] = LoginHook();
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
            Sign In
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={changeEmail}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={changePassword}
            />
          </div>

          <div className="mb-4">
            <Checkbox name="checkedB" id="checkedB" color="primary" />
            <label htmlFor="checkedB" className="ml-2 ">
              Remember me
            </label>
          </div>

          <div className="px-2">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSbmit}
            >
              Sign In
            </Button>
            <Divider className="py-2">or</Divider>

            <div className="flex justify-between items-center ">
              <Typography variant="p" color="inhiret">
                haven't an account?
              </Typography>
              <Button
                onClick={() => navigate("/register")}
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
                Register
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

export default LoginPage;
