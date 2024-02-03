import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR } from "../type";

const initial = {
    products: [],
    allProducts: [],
    loading: true,
};


const ProductRaducer = (state = initial, action) => {
    switch (action.type) {
        //@desc get all products
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        //@desc create new product
        case CREATE_PRODUCT:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        //@desc if there's errors
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            };

        default:
            return state;
    }
};

export default ProductRaducer;
