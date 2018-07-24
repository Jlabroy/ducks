import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
   applyMiddleware(sagaMiddleware),
   typeof window === "object" &&
   typeof window.devToolsExtension !== "undefined" ?
     window.devToolsExtension() : f => f
 )
);

sagaMiddleware.run(sagas)

export default store;
