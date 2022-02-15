import { all, fork } from "redux-saga/effects";
import handleCounter from "./count/Count.handle.saga";
import postSaga from "./post/Post.saga";
import todoSaga from "./todo/Todo.saga"

export default function* rootSaga() {
  yield all([fork(handleCounter)]);
  yield all([fork(postSaga)]);
  yield all([fork(todoSaga)])
}