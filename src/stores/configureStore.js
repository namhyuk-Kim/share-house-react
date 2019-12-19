import modules from "./modules";
import ReduxThunk from "redux-thunk";
import penderMiddleware from "redux-pender";
// import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
//--------스토어 기본 설정--------------------//
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    modules,
    composeEnhancer(
      applyMiddleware(/*createLogger(), */ ReduxThunk, penderMiddleware())
    )
  );

  return store;
}
