import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { all, call, fork, takeLatest } from "redux-saga/effects";
import {
  GetTodoRequest,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE
} from './Todo.reducer';
import { todoTypes } from "./Todo.types";

type resultType = {
  result: todoTypes[];
};

const API_URL = `https://jsonplaceholder.typicode.com/todos`;

async function fetchTodosApi(data: { first: number; last: number;}) {
  try {
    const response = await axios.get(API_URL)
    // const result = response.data.slice(1, 30);
    const result = response.data.slice(data.first, data.last);
    return result;
  } catch (err) {
    console.error(err)
  }
}

function* fetchTodos(action: GetTodoRequest) {
  try {
    
    const result: resultType = yield call(fetchTodosApi, action.data);

    yield put({
      type: GET_TODO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_TODO_FAILURE,
      response: err
    });
  }
}

function* watchFetchTodos() {
  yield takeLatest(GET_TODO_REQUEST, fetchTodos);
}

export default function* postSaga() {
  yield all([fork(watchFetchTodos)])
}