import React from "react";
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR } from "../type";
const initialVal = {
  brand: [],
  loading: true,
};
const BrandReducer = (state = initialVal, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        loading: false,
        brand: action.payload,
      };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default BrandReducer;
