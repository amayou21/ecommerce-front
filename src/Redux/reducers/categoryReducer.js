import { GET_ALL_CATEGORY } from "../type";

const initial = {
  category: [],
  loadign: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loadign: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
