import * as types from "./types";

const setSocket = (socket) => ({
  type: types.SET_SOCKET,
  payload: socket,
});

export { setSocket };
