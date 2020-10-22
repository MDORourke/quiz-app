import * as types from "./types";

const setScreen = (screen) => ({
  type: types.SET_SCREEN,
  payload: screen,
});

const setScreenRef = (screenRef) => ({
  type: types.SET_SCREEN_REF,
  payload: screenRef,
});

export { setScreen, setScreenRef };
