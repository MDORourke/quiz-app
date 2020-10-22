import { combineReducers } from "redux";
import * as types from "./types";

/* State Shape
{
  currentSlide: number,
  complete: bool,
  loggedIn: bool,
  playerName: string,
}
*/

const currentSlideReducer = (state = 1, action) => {
  switch (action.type) {
    case types.MOVE_TO_SLIDE:
      return action.payload;
    default:
      return state;
  }
};

const completeReducer = (state = false, action) => {
  switch (action.type) {
    case types.COMPLETE_ROUND:
      return action.payload;
    default:
      return state;
  }
};

const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const playerNameReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  currentSlide: currentSlideReducer,
  complete: completeReducer,
  loggedIn: loggedInReducer,
  playerName: playerNameReducer,
});
