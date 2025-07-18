import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import BrandReducer from "./brandReducer";
import SubCategoryReducer from "./subCategoryReducer";
import SubCategoriesOnCategoryReducer from "./subCategoriesOnCategoryReducer";
import ProductRaducer from "./productRaducer";
import AuthReducer from "./AuthReducer";
import reviewReducer from "./reviewReducer";
import WishListReducer from "./wishList";
import couponReducer from "./couponReducer";
import AddressReducer from "./AdrressesReducer";
import CartReducer from "./cartReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  allSubCategory: SubCategoryReducer,
  allSubCategoryOnCategory: SubCategoriesOnCategoryReducer,
  allProduct: ProductRaducer,
  auth: AuthReducer,
  reviewReducer: reviewReducer,
  wishList: WishListReducer,
  coupons: couponReducer,
  addresses: AddressReducer,
  carts:CartReducer
});
