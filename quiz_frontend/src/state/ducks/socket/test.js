import reducer from "./reducers";
import * as actions from "./actions";

describe("Socket Duck", () => {
  describe("Reducers", () => {
    it("should have an initial state", () => {
      const expectedState = {
        socket: {},
      };

      const action = { type: "NOT_A_GAME_TYPE" };
      const result = reducer(undefined, action);

      expect(result).toEqual(expectedState);
    });

    it("should set the socket", () => {
      const state = {
        socket: {},
      };

      const expectedState = {
        socket: { id: "test" },
      };

      const action = actions.setSocket({ id: "test" });
      const result = reducer(state, action);

      expect(result).toEqual(expectedState);
    });
  });
});
