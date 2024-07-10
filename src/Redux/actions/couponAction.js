import { UseGetDataToken, deleteData, postData, updateData } from "../../hooks/services";
import { CREATE_COUPONS,GET_COUPON, DELETE_COUPON, GET_ALL_COUPONS, UPDATE_COUPONS } from "../type";


// @desc    Get coupons
// @route   GET /api/v1/coupons
// @access  Private
export const AllCoupons = (limit = 5, page = 1) => async (dispatch) => {
    try {
        const data = await UseGetDataToken(
            `/api/v1/coupons?limit=${limit}&page=${page}`
        );
        dispatch({
            type: GET_ALL_COUPONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_COUPONS,
            payload: `error : ${error}`,
        });
    }
};



// @desc    Get coupon
// @route   GET /api/v1/coupons/:id
// @access  Private
export const getCoupon = (id) => async (dispatch) => {
    try {
        const data = await UseGetDataToken(`/api/v1/coupons/${id}`
        );
        dispatch({
            type: GET_COUPON,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_COUPON,
            payload: `error : ${error}`,
        });
    }
};





// @desc   Create cupon
// @route  POST /api/v1/coupons
// @access Private
export const createCoupon = (formData) => async (dispatch) => {
    try {
        const data = await postData(`/api/v1/coupons`, formData);
        dispatch({
            type: CREATE_COUPONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_COUPONS,
            payload: `error : ${error}`,
        });
    }
};


// @desc   Update cupon
// @route  PUT /api/v1/coupons/:couponID
// @access Private
export const updateCoupon = (id, formData) => async (dispatch) => {
    try {
        const data = await updateData(`/api/v1/coupons/${id}`, formData);
        // console.log(data);
        dispatch({
            type: UPDATE_COUPONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_COUPONS,
            payload: `error : ${error}`,
        });
    }
};


// @desc   Delete cupon
// @route  DELETE /api/v1/coupons/:couponID
// @access Private
export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const data = await deleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type: DELETE_COUPON,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_COUPON,
            payload: `error : ${error}`,
        });
    }
};