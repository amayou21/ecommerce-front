import React from "react";
import { ADD_TO_WISHLIST, DELETE_PROD_FROM_WISHLIST, GET_ALL_WishList } from "../type";

const initialVal = {
    addprodToWish: [],
    deleteFromWish: [],
    wishListprod: [],
    loading: true,
};
const WishListReducer = (state = initialVal, action) => {
    switch (action.type) {
        case GET_ALL_WishList:
            return {
                ...state,
                wishListprod: action.payload,
                loading: false,
            };
        case ADD_TO_WISHLIST:
            return {
                loading: false,
                addprodToWish: action.payload,
            };
        case DELETE_PROD_FROM_WISHLIST:
            return {
                deleteFromWish: action.payload,
                loading: true,
            };
        default:
            return state;
    }
};

export default WishListReducer;
