import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// to make notification
const UseNotification = (val, state) => {
  if (state === "success") {
    toast.success(val);
  } else if (state === "warning") {
    toast.warning(val);
  } else if (state === "error") {
    toast.error(val);
  }
};

export default UseNotification;
