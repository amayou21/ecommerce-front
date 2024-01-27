import React, { useEffect, useState } from "react";
import { createCategory } from "../../Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../useNotification";
import { useTheme } from "@mui/material";

const AddCategoryHook = () => {


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
      UseNotification("category name and image are required", "warning");
    } else if (name && image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createCategory(formData));
      setLoading(false);
      setCheck(true);
    }
  };

  const res = useSelector((val) => val.allCategory.category);

  useEffect(() => {
    if (!loading) {
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

export default AddCategoryHook;