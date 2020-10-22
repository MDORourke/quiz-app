import reducer from "./reducers";
import * as actions from "./actions";
import * as operations from "./operations";

describe("Screen Duck", () => {
  describe("Reducers", () => {
    it("should have an initial state", () => {
      const expectedState = {
        currentScreen: {},
        screenRef: "",
      };

      const action = { type: "NOT_A_GAME_TYPE" };
      const result = reducer(undefined, action);

      expect(result).toEqual(expectedState);
    });

    it("should set up the screen object", () => {
      const state = {
        currentScreen: {},
        screenRef: "",
      };

      const expectedState = {
        currentScreen: { props: "test" },
        screenRef: "",
      };

      const action = actions.setScreen({ props: "test" });
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });

    it("should set the screen ref", () => {
      const state = {
        currentScreen: {},
        screenRef: "",
      };

      const expectedState = {
        currentScreen: {},
        screenRef: "Test",
      };

      const action = actions.setScreenRef("Test");
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });
  });
});
