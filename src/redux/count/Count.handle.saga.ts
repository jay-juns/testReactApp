import * as CounterSaga from "./Count.saga";
import * as CounterActions from "./Count.reducer";
import { takeEvery } from "redux-saga/effects";

export default function* handleCounter() {
  yield takeEvery(
    CounterActions.plusAfterOneSeconds,
    CounterSaga.plusAfterOneSeconds
  );
  yield takeEvery(CounterActions.plusRandom, CounterSaga.plusRandom);
  yield takeEvery(CounterActions.minusRandom, CounterSaga.minusRandom);
}