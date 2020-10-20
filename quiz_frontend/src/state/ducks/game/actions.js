import * as types from "./types";

const moveToSlide = (slide) => ({
  type: types.MOVE_TO_SLIDE,
  payload: slide,
});

const submitAnswers = (answers) => ({
  type: types.SUBMIT_ANSWERS,
  payload: answers,
});

export { moveToSlide, submitAnswers };
