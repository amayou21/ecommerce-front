import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import UseNotification from "../useNotification";
import { createCategory } from "../../Redux/actions/categoryAction";

const AddCategoryHook = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [Image, setImage] = useState();
  const [name, setName] = useState("");
  const [selectingImage, setSelectingImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const res = useSelector((val) => val.allCategory.category);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!loading) {
      setOpen(false);
      setImage(false);
      setName("");
    } else {
      setOpen(true);
    }
  }, [loading]);

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
      setLoading(false);
      UseNotification("category name and image are required", "warning");
    }

    if (name && Image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectingImage);
      await dispatch(createCategory(formData));
      if (res.status === 200) {
        console.log(res.status);
        setLoading(false);
        UseNotification("created successfuly!", "success");
      } else {
        console.log(res.status);

        setLoading(false);
        UseNotification("there an issus!!", "error");
      }
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

export default AddCategoryHook;

// const notify = (val, state) => {
//   if (state === "success") {
//     toast.success(val);
//   } else if (state === "warning") {
//     toast.warning(val);
//   } else if (state === "error") {
//     toast.error(val);
//   }
// };

// const res = useSelector((val) => val.allCategory.category);
// const dispatch = useDispatch();
// const theme = useTheme();
// const [open, setOpen] = React.useState(false);
// const handleClose = () => {
//   setOpen(false);
// };

// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   if (!loading) {
//     if (res.status === 200) {
//       notify("created successfuly!", "success");
//     } else if (res.status === 500) {
//       notify("there an issus!!", "error");
//     }
//     setOpen(false);
//     setImage(false);
//     setName("");
//     // if()
//   } else {
//     setOpen(true);
//     console.log("uploading...");
//   }
// }, [loading]);

// const [Image, setImage] = useState();
// const [name, setName] = useState("");
// const [selectingImage, setSelectingImage] = useState(null);

// const onImageChange = (event) => {
//   if (event.target.files && event.target.files[0]) {
//     setImage(URL.createObjectURL(event.target.files[0]));
//     setSelectingImage(event.target.files[0]);
//     console.log(event.target.files[0]);
//   }
// };

// const handelSubmit = async (e) => {
//   e.preventDefault();
//   if (!name || !Image) {
//     notify("category name and image are required", "warning");
//   }

//   setLoading(true);
//   if (name && Image) {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("image", selectingImage);
//     await dispatch(createCategory(formData));
//     setLoading(false);
//   }
// };
