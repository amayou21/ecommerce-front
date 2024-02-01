import React from 'react';
import { UseGetDate, postData } from '../../hooks/useGetDate';
import { CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORY, GET_ERROR } from '../type';


//  get all sub categories
export const SubCategory = (limit = 5, page = 1) => async (dispatch) => {
    try {
        const subCategory = await UseGetDate(`/api/v1/subcategories?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_SUBCATEGORY,
            payload: subCategory
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }
}

// create sub category
export const createSubCategry = (data) => async (dispatch) => {
    try {
        const subCategory = await postData("/api/v1/subcategories", data)
        dispatch({
            type: CREATE_SUBCATEGORY,
            payload: subCategory
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }

}

