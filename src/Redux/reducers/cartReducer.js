import React from "react";
import { ADD_TO_CART,GET_ALL_CART, GET_ERROR } from "../type";
const initialVal = {
  cart: [],
  loading: true,
};
const CartReducer = (state = initialVal, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ADD_TO_CART:
      return {
        loading: false,
        cart: action.payload,
      };
    case GET_ERROR:
      return {
        cart: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default CartReducer;
