import { CREATE_COUPONS, DELETE_COUPON, GET_ADDRESSES, GET_ALL_COUPONS, GET_COUPON, GET_ERROR, UPDATE_COUPONS } from "../type";

const initial = {
    allAddresses: [],
    createAddress: [],
    updateAddress: [],
    deleteAddress: [],
    oneAddress: [],
    loading: true,
};

const AddressReducer = (state = initial, action) => {
    switch (action.type) {
        //@desc get all coupons
        case GET_ADDRESSES:
            return {
                ...state,
                allAddresses: action.payload,
                loading: false,
            };

        //@desc getcoupon
        // case GET_COUPON:
        //     return {
        //         ...state,
        //         oneCoupon: action.payload,
        //         loading: false,
        //     };

        //@desc create new coupon
        // case CREATE_COUPONS:
        //     return {
        //         loading: false,
        //         createCoupon: action.payload,
        //     };

        //@desc update  coupon
        // case UPDATE_COUPONS:
        //     return {
        //         loading: false,
        //         updatecoupon: action.payload,
        //     };

        //@desc delete coupon
        // case DELETE_COUPON:
        //     return {
        //         loading: false,
        //         deletecoupon: action.payload,
        //     };

        //@desc if there's errors
        case GET_ERROR:
            return {
                loading: true,
                coupon: action.payload,
            };

        default:
            return state;
    }
};
export default AddressReducer;
