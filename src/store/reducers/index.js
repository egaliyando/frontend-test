import { combineReducers } from "redux";
import product from "./product";
import variant from "./variant";
import category from "./category";
import loading from "./loading";

export default combineReducers({
  variant,
  product,
  category,
  loading,
});
