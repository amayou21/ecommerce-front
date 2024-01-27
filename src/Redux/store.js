import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

// to allow us to use async await and requestesin our redux
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
