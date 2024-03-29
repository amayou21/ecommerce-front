//  creat product

import { UseGetDate, deleteData, postDataWithImage, updateDataWithImage } from "../../hooks/services"
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, PRODUCT_LIKE, UPDATE_PEODUCT } from "../type"

// @desc get all products
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

// @desc get all filter products
export const allFilterProd = (queryStr) => async (dispatch) => {
    try {
        const product = await UseGetDate(`/api/v1/products?${queryStr}`)
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

// get spesfic product
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const product = await UseGetDate(`/api/v1/products/${id}`)
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }

}

// get products with spesific cat
export const productLike = (id) => async (dispatch) => {
    try {
        const prodLike = await UseGetDate(`/api/v1/products?category=${id}`)
        dispatch({
            type: PRODUCT_LIKE,
            payload: prodLike
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }
}

// @desc create product
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

// @desc delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const product = await deleteData(`/api/v1/products/${id}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })

    }
}

// @desc update product
export const updateProduct = (id, formData) => async (dispatch) => {
    try {
        const product = await updateDataWithImage(`/api/v1/products/${id}`, formData)
        dispatch({
            type: UPDATE_PEODUCT,
            payload: product

        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }
}