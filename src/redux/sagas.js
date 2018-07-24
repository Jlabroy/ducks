import { fork } from "redux-saga/effects";
import { sagas as todos } from "./modules/todos";

function* rootSaga() {
  yield [
    fork(todos)
  ];
}

export default rootSaga;
