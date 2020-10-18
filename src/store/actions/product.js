import axios from "config";
import { SET_PRODUCT } from "store/types";

export const fetchProduct = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };

    try {
      const product = await axios.get(`/product`, params);
      dispatch({
        type: SET_PRODUCT,
        product: product.data.products,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
