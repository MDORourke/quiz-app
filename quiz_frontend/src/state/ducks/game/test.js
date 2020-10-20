import reducer from "./reducers";
import * as actions from "./actions";
import * as operations from "./operations";

describe("Game Duck", () => {
  describe("Reducers", () => {
    it("should have an initial state", () => {
      const expectedState = {
        slide: 1,
        complete: false,
      };

      const action = { type: "NOT_A_GAME_TYPE" };
      const result = reducer(undefined, action);

      expect(result).toEqual(expectedState);
    });

    it("should move to a specified slide", () => {
      const state = {
        slide: 1,
        complete: false,
      };

      const expectedState = {
        slide: 2,
        complete: false,
      };

      const action = actions.moveToSlide(2);
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });

    it("should complete the round", () => {
      const state = {
        slide: 1,
        complete: false,
      };

      const expectedState = {
        slide: 1,
        complete: true,
      };

      const action = actions.submitAnswers();
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });
  });
});
