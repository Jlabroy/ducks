import { TODOS_REQUEST, TODOS_RECEIVE, TODOS_ERROR } from "./constants";

export const requestTodos = () => ({
  type: TODOS_REQUEST
});

export const receiveTodos = data => ({
    type: TODOS_RECEIVE,
    payload: {
      data
    }
});

export const setError = error => ({
  type: TODOS_ERROR,
  payload: {
    error
  }
});
