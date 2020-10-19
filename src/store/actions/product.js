import axios from "config";
import { SET_PRODUCT, LOADING, LOADING_FINISH } from "store/types";

export const loading = { type: LOADING };
export const loadingFinish = { type: LOADING_FINISH };

export const fetchProduct = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };
    dispatch(loading);
    try {
      const product = await axios.get(`/product`, params);
      dispatch({
        type: SET_PRODUCT,
        product: product.data.products,
      });
      dispatch(loadingFinish);
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data.message);
      if (error.response.data.message === "token expired") {
        window.location = "/sign-in";
      }
    }
  };
};
