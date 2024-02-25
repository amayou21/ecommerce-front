import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import BrandReducer from "./brandReducer";
import SubCategoryReducer from "./subCategoryReducer";
import SubCategoriesOnCategoryReducer from "./subCategoriesOnCategoryReducer";
import ProductRaducer from "./productRaducer";
import signupReducer from "./signupReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  allSubCategory: SubCategoryReducer,
  allSubCategoryOnCategory: SubCategoriesOnCategoryReducer,
  allProduct: ProductRaducer,
  signUp: signupReducer
});
