import React from 'react';
import { CREATE_SUBCATEGORIES_ON_CTEGORY, GET_ALL_SUBCATEGORIES_ON_CTEGORY, GET_ERROR } from '../type';
const initialValue = {
    subCategoryOnCategory: [],
    loading: true
}
const SubCategoriesOnCategoryReducer = (state = initialValue, action) => {
    switch (action.type) {

        case GET_ALL_SUBCATEGORIES_ON_CTEGORY:
            return {
                subCategoryOnCategory: action.payload,
                loading: false
            }

        case CREATE_SUBCATEGORIES_ON_CTEGORY:
            return {
                // ...state,
                subCategoryOnCategory: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                subCategoryOnCategory: action.payload,
                loading: true
            }
        default:
            return state
    }
}

export default SubCategoriesOnCategoryReducer;

