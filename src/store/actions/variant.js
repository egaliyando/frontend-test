import axios from "config";
import { SET_VARIANTS } from "store/types";

export const fetchVariant = () => {
  return async (dispatch) => {
    const params = {
      headers: { "x-access-token": localStorage.getItem("token") },
    };
    try {
      const variant = await axios.get(`variant`, params);
      console.log(variant);
      dispatch({
        type: SET_VARIANTS,
        variant: variant.data.variants,
      });
    } catch (error) {
      console.log(error.response);

      if (error.response.data.message === "token expired") {
        window.location = "/sign-in";
      }
    }
  };
};
