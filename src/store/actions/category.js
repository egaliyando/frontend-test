import axios from "config";
import { SET_CATEGORY, LOADING, LOADING_FINISH } from "store/types";

export const loading = { type: LOADING };
export const loadingFinish = { type: LOADING_FINISH };

export const fetchCategory = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };
    dispatch(loading);
    try {
      const category = await axios.get(`/category`, params);
      dispatch({
        type: SET_CATEGORY,
        category: category.data.categories,
      });
      dispatch(loadingFinish);
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === "token expired") {
        window.location = "/sign-in";
      }
    }
  };
};
