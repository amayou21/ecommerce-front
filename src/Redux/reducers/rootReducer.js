import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import BrandReducer from "./brandReducer";
import SubCategoryReducer from "./subCategoryReducer";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  allSubCategory: SubCategoryReducer
});
