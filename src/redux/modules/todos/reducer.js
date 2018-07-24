import { TODOS_REQUEST, TODOS_RECEIVE, TODOS_ERROR } from "./constants";

const initialState = {
  data: [],
  error: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        ...payload
      };

    case TODOS_RECEIVE:
      return {
        ...state,
        isLoading: false,
        error: "",
        ...payload
      };

    case TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        ...payload
      };

    default: {
      return {...state };
    }
  }
}

export default reducer;
