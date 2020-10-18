import { combineReducers } from "redux";
import product from "./product";
import variant from "./variant";
import category from "./category";

export default combineReducers({
  variant,
  product,
  category,
});
