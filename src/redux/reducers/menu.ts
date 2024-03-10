import { SET_ACTIVE_MENU_BUTTON } from "../actionTypes";

const initialState = {
  activeButton: '',
};

const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_MENU_BUTTON: {
      return {
        ...state,
        activeButton: action.payload.button,
      };
    }
    default: {
      return state;
    }
  }
};

export default menuReducer;
