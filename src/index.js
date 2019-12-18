import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";

import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
