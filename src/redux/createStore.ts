import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

export default function configura() {
  const store = createStore(
    rootReducer,
    {}, // pre-loaded state
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}