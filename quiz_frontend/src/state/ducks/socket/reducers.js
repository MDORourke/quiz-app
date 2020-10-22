import { combineReducers } from "redux";
import * as types from "./types";

/* State Shape
{
  socket: object
}
*/

const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_SOCKET:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  socket: socketReducer,
});
