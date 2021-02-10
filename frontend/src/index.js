import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
