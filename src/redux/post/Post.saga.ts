import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { all, call, fork, takeLatest } from "redux-saga/effects";
import {
  GetPostRequest,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from './Post.reducer';
import { postTypes } from "./Post.types";

type resultType = {
  result: postTypes[];
};

const API_URL = `https://jsonplaceholder.typicode.com/photos`;

async function fetchPostsApi(data: { first: number; last: number;}) {
  try {
    const response = await axios.get(API_URL)
    // const result = response.data.slice(1, 30);
    const result = response.data.slice(data.first, data.last);
    return result;
  } catch (err) {
    console.error(err)
  }
}

function* fetchPosts(action: GetPostRequest) {
  try {
    const result: resultType = yield call(fetchPostsApi, action.data);

    yield put({
      type: GET_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_POST_FAILURE,
      response: err
    });
  }
}

function* watchFetchPosts() {
  yield takeLatest(GET_POST_REQUEST, fetchPosts);
}

export default function* postSaga() {
  yield all([fork(watchFetchPosts)])
}