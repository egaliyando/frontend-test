import { SET_VARIANTS } from "store/types";

const init = {
  variant: [],
};

export default function (state = init, action) {
  switch (action.type) {
    case SET_VARIANTS:
      return {
        ...state,
        variant: action.variant,
      };
    default:
      return state;
  }
}
