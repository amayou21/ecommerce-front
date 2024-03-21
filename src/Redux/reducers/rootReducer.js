import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import BrandReducer from "./brandReducer";
import SubCategoryReducer from "./subCategoryReducer";
import SubCategoriesOnCategoryReducer from "./subCategoriesOnCategoryReducer";
import ProductRaducer from "./productRaducer";
import AuthReducer from "./AuthReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  allSubCategory: SubCategoryReducer,
  allSubCategoryOnCategory: SubCategoriesOnCategoryReducer,
  allProduct: ProductRaducer,
  auth: AuthReducer,
  reviewReducer:reviewReducer
});
