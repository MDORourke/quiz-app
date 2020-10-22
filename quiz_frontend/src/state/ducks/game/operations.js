import { moveToSlide, completeRound, setLoggedIn, setName } from "./actions";

import { sendMessage } from "../socket/operations";

const submitAnswers = (socket, playerName, screenRef, answers) => (
  dispatch
) => {
  dispatch(
    sendMessage(socket, "submit_answers", {
      playerName: playerName,
      screenRef: screenRef,
      answers: answers,
    })
  );
  dispatch(completeRound(true));
};

const resetRound = () => (dispatch) => {
  dispatch(completeRound(false));
  dispatch(moveToSlide(1));
};

export { moveToSlide, submitAnswers, setLoggedIn, setName, resetRound };
