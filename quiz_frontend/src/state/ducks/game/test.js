import reducer from "./reducers";
import * as actions from "./actions";
import * as operations from "./operations";

describe("Game Duck", () => {
  describe("Reducers", () => {
    it("should have an initial state", () => {
      const expectedState = {
        currentSlide: 1,
        complete: false,
        loggedIn: false,
        playerName: "",
      };

      const action = { type: "NOT_A_GAME_TYPE" };
      const result = reducer(undefined, action);

      expect(result).toEqual(expectedState);
    });

    it("should move to a specified slide", () => {
      const state = {
        currentSlide: 1,
        complete: false,
        loggedIn: true,
        playerName: "",
      };

      const expectedState = {
        currentSlide: 2,
        complete: false,
        loggedIn: true,
        playerName: "",
      };

      const action = actions.moveToSlide(2);
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });

    it("should complete the round", () => {
      const state = {
        currentSlide: 1,
        complete: false,
        loggedIn: true,
        playerName: "",
      };

      const expectedState = {
        currentSlide: 1,
        complete: true,
        loggedIn: true,
        playerName: "",
      };

      const action = actions.completeRound(true);
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });

    it("should set the logged in status", () => {
      const state = {
        currentSlide: 1,
        complete: true,
        loggedIn: false,
        playerName: "",
      };

      const expectedState = {
        currentSlide: 1,
        complete: true,
        loggedIn: true,
        playerName: "",
      };

      const action = actions.setLoggedIn(true);
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });

    it("should set the player name", () => {
      const state = {
        currentSlide: 1,
        complete: true,
        loggedIn: false,
        playerName: "",
      };

      const expectedState = {
        currentSlide: 1,
        complete: true,
        loggedIn: false,
        playerName: "Test",
      };

      const action = actions.setName("Test");
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });
  });

  describe("Operations", () => {
    it("should dispatch answers when submitted", () => {
      const dispatch = jest.fn();

      const completeRoundAction = actions.completeRound(true);

      operations.submitAnswers(
        {},
        "TestPlayerName",
        "TestScreenRef",
        {}
      )(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      // TODO: Work out a better way to test this
      expect(dispatch.mock.calls[0][0]).toEqual(expect.any(Function));
      expect(dispatch.mock.calls[1][0]).toEqual(completeRoundAction);
    });

    it("should reset the round", () => {
      const dispatch = jest.fn();

      const moveToSlideAction = actions.moveToSlide(1);
      const completeRoundAction = actions.completeRound(false);

      operations.resetRound()(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls[0][0]).toEqual(moveToSlideAction);
      expect(dispatch.mock.calls[1][0]).toEqual(completeRoundAction);
    });
  });
});
