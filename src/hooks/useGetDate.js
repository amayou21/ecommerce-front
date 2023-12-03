import React from "react";
import { baserUrl } from "../Api/baseUrl";

// @desc    get data
export const UseGetDate = async (url, params) => {
  const res = await baserUrl.get(url, params);
  return res.data;
};

// @desc  Post Data with files
export const postDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baserUrl.post(url, params, config);
  return res.data;
};

// @desc  Post Data without files
export const postData = async (url, params) => {
  const res = await baserUrl.post(url, params);
  return res.data;
};
