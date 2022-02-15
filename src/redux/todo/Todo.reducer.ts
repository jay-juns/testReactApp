import produce from "immer";
import { todoTypes } from "./Todo.types";

export interface todoIntialState {
  todos: todoTypes[];
  todoLoading: boolean;
  getTodoSuccess: boolean;
  getTodoFailure: null | Error;
}

export const initialState: todoIntialState = {
  todos: [],
  todoLoading: false,
  getTodoSuccess: false,
  getTodoFailure: null
}

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST' as const;
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS' as const;
export const GET_TODO_FAILURE = 'GET_TODO_FAILURE' as const;

export interface GetTodoRequest {
  type: typeof GET_TODO_REQUEST;
  data: {
    first: number;
    last: number;
  }
};

export interface GetTodoSuccess {
  type: typeof GET_TODO_SUCCESS;
  todos: todoTypes;
  data: [];
};

export interface GetTodoFailure {
  type: typeof GET_TODO_FAILURE;
  error: Error;
};

export const getTodoRequest = (data: { first: number; last: number; }): GetTodoRequest => ({
  type: GET_TODO_REQUEST,
  data
});

export const getTodoSuccess = (
  todos: todoTypes,
  data: []
): GetTodoSuccess => ({
  type: GET_TODO_SUCCESS,
  todos,
  data
});

export const getTodoFailure = (error: Error): GetTodoFailure => ({
  type: GET_TODO_FAILURE,
  error,
});

export type getTodo =
| ReturnType<typeof getTodoRequest>
| ReturnType<typeof getTodoSuccess>
| ReturnType<typeof getTodoFailure>;

//reducer

const todos = (state: todoIntialState = initialState, action: getTodo) => 
  produce(state, (draft) => {
    switch (action.type) {
      case GET_TODO_REQUEST: {
        draft.todoLoading = true;
        draft.todoLoading = false;
        break;
      }
      case GET_TODO_SUCCESS: {
        draft.todoLoading = false;
        draft.getTodoSuccess = true;
        draft.todos = draft.todos.concat(action.data);
        break;
      }
      case GET_TODO_FAILURE: {
        draft.getTodoSuccess = false;
        draft.getTodoFailure = action.error;
        break;
      }
      default:
        return state;
    }
  })

  export default todos;