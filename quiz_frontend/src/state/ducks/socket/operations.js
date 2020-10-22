import io from "socket.io-client";

import { setSocket } from "./actions";

import { setLoggedIn, setName, resetRound } from "../game/operations";

import { setScreen, setScreenRef } from "../screen/operations";

const connect = (host) => (dispatch) => {
  const socket = io.connect(host);

  // TODO: Make this more generic
  socket.on("set_screen", (data) => {
    dispatch(setScreen(data.screen));
    dispatch(setScreenRef(data.screenRef));
    dispatch(resetRound());
  });

  socket.on("logged_in", (data) => {
    dispatch(setScreen(data.screen));
    dispatch(setScreenRef(data.screenRef));
    dispatch(setLoggedIn(true));
    dispatch(setName(data.playerName));
    dispatch(resetRound());
  });

  dispatch(setSocket(socket));
};

const disconnect = (socket) => (dispatch) => {
  dispatch(setSocket(socket.disconnect()));
};

const sendMessage = (socket, eventName, message) => (dispatch) => {
  socket.emit(eventName, message);
};

export { connect, disconnect, sendMessage };
