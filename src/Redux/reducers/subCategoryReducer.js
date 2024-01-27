import React from 'react';
import { CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORY, GET_ERROR } from '../type';
const initialValue = {
    subCategory: [],
    loading: true
}

const SubCategoryReducer = (state = initialValue, action) => {
    switch (action.type) {

        case GET_ALL_SUBCATEGORY:
            return {
                subCategory: action.payload,
                loading: false
            }

        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subCategory: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                subCategory: action.payload,
                loading: true
            }
        default:
            return state
    }
}

export default SubCategoryReducer;
