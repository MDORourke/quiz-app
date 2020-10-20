import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./state/store";

import RoundConfig from "./Rounds";

import App from "./views/App";

const store = configureStore({});

render(
  <Provider store={store}>
    <App rounds={RoundConfig} />
  </Provider>,
  document.getElementById("app")
);
