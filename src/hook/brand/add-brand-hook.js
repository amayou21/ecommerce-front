import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../useNotification";
import { createBrand } from "../../Redux/actions/brandAction";

const AddBrandHook = () => {
  const res = useSelector((val) => val.allCategory.category);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (res.status === 200) {
        UseNotification("created successfuly!", "success");
      } else if (res.status === 500) {
        UseNotification("there an issus!!", "error");
      }
      setOpen(false);
      setImage(false);
      setName("");
      // if()
    } else {
      setOpen(true);
      console.log("uploading...");
    }
  }, [loading]);

  const [Image, setImage] = useState();
  const [name, setName] = useState("");
  const [selectingImage, setSelectingImage] = useState(null);

  const OnImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectingImage(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !Image) {
      UseNotification("category name and image are required", "warning");
      setLoading(false);
    }

    // setLoading(true);
    if (name && Image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createBrand(formData));
      setLoading(false);
    }
  };

  return [
    OnImageChange,
    Image,
    name,
    handleSubmit,
    theme,
    open,
    handleClose,
    setName,
  ];
};

export default AddBrandHook;
