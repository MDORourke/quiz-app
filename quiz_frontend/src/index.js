import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./state/store";

import App from "./views/App";

render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>,
  document.getElementById("app")
);
