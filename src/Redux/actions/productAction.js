//  creat product

import { UseGetDate, postDataWithImage } from "../../hooks/useGetDate"
import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR } from "../type"

export const allProduct = (limit = 5, page = 1) => async (dispatch) => {
    try {
        const product = await UseGetDate(`/api/v1/products?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }

}



export const createProduct = (formData) => async (dispatch) => {
    try {
        const product = await postDataWithImage("/api/v1/products", formData)
        dispatch({
            type: CREATE_PRODUCT,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }

}