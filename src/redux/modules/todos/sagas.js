import { call, put, takeEvery } from "redux-saga/effects";
import { receiveTodos, setError } from "./actions";
import { TODOS_REQUEST } from "./constants";
import * as Api from "./api";

function* fetchTodos(action) {
  try {
    const data = yield call(Api.fetchTodos);
    yield put(receiveTodos(data));
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* todoSaga() {
  yield takeEvery(TODOS_REQUEST, fetchTodos);
}

export default todoSaga;
