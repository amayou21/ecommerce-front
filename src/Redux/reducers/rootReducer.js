import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import BrandReducer from "./brandReducer";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
});
