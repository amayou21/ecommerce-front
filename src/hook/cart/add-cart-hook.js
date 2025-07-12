import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function AddToCartHook() {

  const [color, setColor] = useState("");
  const [colorIndex, setColorIndex] = useState("");

  const dispatch = useDispatch();




  // const onImageChange = (event) => {
  //   if (
  //     event.target.files &&
  //     event.target.files[0] &&
  //     event.target.files[0].type.split("/")[0] === "image"
  //   ) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //     setSelectingImage(event.target.files[0]);
  //   } else {
  //     UseNotification("Accept just image format", "warning");
  //   }
  // };


  const colorClick = (btnIndex, color) => {
    setColorIndex(btnIndex); // This sets the index of the selected color
    setColor(color);
    console.log(btnIndex, color);
    // setColorIndex(colorIndex);
    // setColor(btnIndex);
  };


  return [color,colorIndex,colorClick]

}

export default AddToCartHook
