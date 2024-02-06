import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_ONE_PRODUCT, PRODUCT_LIKE } from "../type";

const initial = {
    prodLike: [],
    oneProduct: [],
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
                allProducts: action.payload,
                loading: false,
            };
        //@desc create new product
        case CREATE_PRODUCT:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        // @desc get spesific product
        case GET_ONE_PRODUCT:
            return {
                ...state,
                oneProduct: action.payload,
                loading: false
            }

        // @desc get  products like
        case PRODUCT_LIKE:
            return {
                ...state,
                prodLike: action.payload,
                loading: false
            }

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
