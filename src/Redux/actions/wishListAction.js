import { UseGetDataToken, deleteDataToken, postData } from "../../hooks/services"
import { ADD_TO_WISHLIST, DELETE_PROD_FROM_WISHLIST, GET_ALL_WishList } from "../type"


// @desc get al wishlist products
export const GetWishlistProd = (limit = 5, page = 1) => async (dispatch) => {
    try {
        const wprod = await UseGetDataToken(`/api/v1/wishlist?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_WishList,
            payload: wprod,

        })
    } catch (error) {
        dispatch({
            type: GET_ALL_WishList,
            payload: `error : ${error}`,
        });
    }

}

// @desc add product to wishlist
export const AddProdToWish = (prod) => async (dispatch) => {
    try {
        const wprod = await postData("/api/v1/wishlist", prod)
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: wprod,

        })
    } catch (error) {
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: `error : ${error}`,
        });
    }

}


// @desc delete product 
export const deleFromWishList = (prodID) => async (dispatch) => {
    try {
        const delewishList = await deleteDataToken(`/api/v1/wishlist/${prodID}`)
        dispatch({
            payload: delewishList,
            type: DELETE_PROD_FROM_WISHLIST
        })
    } catch (error) {
        dispatch({
            type: DELETE_PROD_FROM_WISHLIST,
            payload: `error : ${error}`,
        })
    }
}