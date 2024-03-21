import React from "react";
import { CREATE_REVIEW, DELETE_REVIEW, GET_ALL_REVIEWS, UPDATE_REVIEW } from "../type";
const initialVal = {
    reviews: [],
    creataeReview: [],
    deleteReview: [],
    updateReview: [],
    loading: true,

};
const reviewReducer = (state = initialVal, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                loading: false,
            };

        case CREATE_REVIEW:
            return {
                ...state,
                creataeReview: action.payload,
                loading: false,
            };
        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload,
                loading: false,
            };
        case UPDATE_REVIEW:
            return {
                ...state,
                updateReview: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default reviewReducer;
