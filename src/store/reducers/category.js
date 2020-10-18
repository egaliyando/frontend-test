import { SET_CATEGORY } from "store/types";

const init = {
  category: [],
};

export default function (state = init, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
}
