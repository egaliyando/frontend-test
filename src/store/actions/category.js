import axios from "config";
import { SET_CATEGORY } from "store/types";

export const fetchCategory = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };
    try {
      const category = await axios.get(`/category`, params);
      dispatch({
        type: SET_CATEGORY,
        category: category.data.categories,
      });
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === "token expired") {
        window.location = "/sign-in";
      }
    }
  };
};
