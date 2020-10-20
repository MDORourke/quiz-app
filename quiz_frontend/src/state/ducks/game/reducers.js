import { combineReducers } from "redux";
import * as types from "./types";

/* State Shape
{
  slide: number,
  complete: bool,
  maxSlides: number
}
*/

const slideReducer = (state = 1, action) => {
  switch (action.type) {
    case types.MOVE_TO_SLIDE:
      return action.payload;
    default:
      return state;
  }
};

const completeReducer = (state = false, action) => {
  switch (action.type) {
    case types.SUBMIT_ANSWERS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  slide: slideReducer,
  complete: completeReducer,
});
