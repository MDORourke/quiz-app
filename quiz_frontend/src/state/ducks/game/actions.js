import * as types from "./types";

const moveToSlide = (slide) => ({
  type: types.MOVE_TO_SLIDE,
  payload: slide,
});

const completeRound = (complete) => ({
  type: types.COMPLETE_ROUND,
  payload: complete,
});

const setLoggedIn = (loggedIn) => ({
  type: types.SET_LOGGED_IN,
  payload: loggedIn,
});

const setName = (name) => ({
  type: types.SET_NAME,
  payload: name,
});

export { moveToSlide, completeRound, setLoggedIn, setName };
