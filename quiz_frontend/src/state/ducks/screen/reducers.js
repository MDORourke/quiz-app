import { combineReducers } from "redux";
import * as types from "./types";

/* State Shape
{
  currentScreen: object,
  screenRef: string
}
*/

const currentScreenReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

const screenRefReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_SCREEN_REF:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  currentScreen: currentScreenReducer,
  screenRef: screenRefReducer,
});
