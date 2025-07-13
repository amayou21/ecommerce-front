import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../useNotification";
import { createBrand } from "../../Redux/actions/brandAction";

const AddBrandHook = () => {


  const theme = useTheme()

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [selectingImage, setSelectingImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const onImageChange = (event) => {
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].type.split("/")[0] === "image"
    ) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectingImage(event.target.files[0]);
    } else {
      UseNotification("Accept just image format", "warning");
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!navigator.onLine) {
      UseNotification("you're Offline", "error");
      return;
    }
    if (!name || !image) {
      setLoading(false);
      UseNotification("brand name and image are required", "warning");
    } else if (name && image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createBrand(formData));
      setLoading(false);
      setCheck(true);
    }
  };

  const res = useSelector((val) => val.allBrand.brand);

  useEffect(() => {

    if (!loading) {
      if (res === 'error :AxiosError: Request failed with status code 401') {
        setOpen(false)
        UseNotification("You are not allowed to access this route", "error");
        return;
      }
      setOpen(false);
      setImage("");
      setName("");
      if (res) {
        if (res && check) {
          if (res.status) {
            if (res.status === 201) {
              setLoading(false);

              UseNotification("created successfuly!", "success");
            } else {
              setLoading(false);
              UseNotification(res.data.errors[0].msg, "error");
            }
            if (res.status === 500) {
              setLoading(false);
              UseNotification("there's an isuss", "error");

            }
          }
        }
      }


    } else {
      setOpen(true);
    }
    setCheck(false);
  }, [loading]);

  return [theme, onImageChange, image, name, setName, handleSubmit, open, handleClose]
};

export default AddBrandHook;
