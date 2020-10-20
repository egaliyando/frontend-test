import axios from "config";
import { SET_VARIANTS, LOADING, LOADING_FINISH } from "store/types";

export const loading = { type: LOADING };
export const loadingFinish = { type: LOADING_FINISH };

export const fetchVariant = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };
    dispatch(loading);
    try {
      const variant = await axios.get(`variant`, params);
      console.log(variant);
      dispatch({
        type: SET_VARIANTS,
        variant: variant.data.variants,
      });
      dispatch(loadingFinish);
    } catch (error) {
      console.log("error", error);
      console.log(error.response);

      if (error.response.data.message === "token expired") {
        window.location = "/sign-in";
      }
    }
  };
};
