import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../type";

const initial = {
  category: [],
  loading: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    //@desc get all categories
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    //@desc create new category
    case CREATE_CATEGORY:
      return {
        loading: false,
        category: action.payload,
      };
    //@desc if there's errors
    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer;
