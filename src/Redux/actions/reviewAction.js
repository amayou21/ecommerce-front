//  creat product

import { UseGetDataToken, deleteDataToken, postData, updateData } from "../../hooks/services"
import { GET_ALL_REVIEWS, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW, GET_ERROR } from "../type"


// @desc get all reviews on specific product
export const allReviews = (id, limit = 5, page = 1) => async (dispatch) => {
    try {
        const product = await UseGetDataToken(`/api/v1/products/${id}/reviews?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_REVIEWS,
            payload: product
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_REVIEWS,
            payload: `Error : ${error}`
        })
    }
}


// @desc create review
export const createReview = (id, body) => async (dispatch) => {
    try {
        const review = await postData(`/api/v1/products/${id}/reviews`, body)
        dispatch({
            type: CREATE_REVIEW,
            payload: review
        })
    } catch (error) {
        dispatch({
            type: CREATE_REVIEW,
            payload: `Error : ${error}`
        })
    }

}




// @desc delete review
export const deleteReview = (id) => async (dispatch) => {
    try {
        const review = await deleteDataToken(`api/v1/reviews/${id}`)
        dispatch({
            type: DELETE_REVIEW,
            payload: review
        })
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW,
            payload: `Error : ${error}`
        })
    }

}


// @desc update review
export const updateReview = (id, body) => async (dispatch) => {
console.log(id,body);
    try {
        const review = await updateData(`/api/v1/reviews/${id}`, body)
        dispatch({
            type: UPDATE_REVIEW,
            payload: review
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }

}
// // @desc delete product
// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//         const product = await deleteData(`/api/v1/products/${id}`)
//         dispatch({
//             type: DELETE_PRODUCT,
//             payload: product
//         })
//     } catch (error) {
//         dispatch({
//             type: GET_ERROR,
//             payload: `Error : ${error}`
//         })

//     }
// }

// // @desc update product
// export const updateProduct = (id, formData) => async (dispatch) => {
//     try {
//         const product = await updateDataWithImage(`/api/v1/products/${id}`, formData)
//         dispatch({
//             type: UPDATE_PEODUCT,
//             payload: product

//         })
//     } catch (error) {
//         dispatch({
//             type: GET_ERROR,
//             payload: `Error : ${error}`
//         })
//     }
// }