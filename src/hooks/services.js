import React from "react";
import { baserUrl } from "../Api/baseUrl";

// @desc    get data
export const UseGetDate = async (url, params) => {


  const res = await baserUrl.get(url, params);
  return res;
};



// @desc get data with from protect route
export const UseGetDataToken = async (url) => {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
  const res = await baserUrl.get(url, config);
  return res;
};



// @desc  Post Data with files
export const postDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data", Authorization: `Barer ${localStorage.getItem('token')}` },
  };
  const res = await baserUrl.post(url, params, config);
  return res;
};

// @desc  Post Data without files
export const postData = async (url, params) => {
  // const config = {
  //   headers: { Authorization: `Barer ${localStorage.getItem('token')}` },
  // };
  const res = await baserUrl.post(url, params);
  return res;
};



// @desc update data with files
export const updateDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data", Authorization: `Barer ${localStorage.getItem('token')}` },
  };
  const res = await baserUrl.put(url, params, config);
  return res;
}


// @desc  update Data without files
export const updateData = async (url, params) => {
  const res = await baserUrl.post(url, params);
  return res;
};


// delete data
export const deleteData = async (url, params) => {
  const res = await baserUrl.delete(url, params)
  return res
}