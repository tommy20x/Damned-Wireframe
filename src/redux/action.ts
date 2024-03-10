import { SET_ACTIVE_MENU_BUTTON } from "./actionTypes";

export const setActiveMenubutton = (button: string) => ({
  type: SET_ACTIVE_MENU_BUTTON,
  payload: {
    button
  }
});
