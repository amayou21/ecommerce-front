import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR } from "../type";

const initial = {
    product: [],
    loading: true,
};


const ProductRaducer = (state = initial, action) => {
    switch (action.type) {
        //@desc get all products
        case GET_ALL_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        //@desc create new product
        case CREATE_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        //@desc if there's errors
        case GET_ERROR:
            return {
                loading: true,
                product: action.payload,
            };

        default:
            return state;
    }
};

export default ProductRaducer;
