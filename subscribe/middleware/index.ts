import { fork } from "redux-saga/effects";
import productSaga from "./module/product";
import subscribeSaga from "./module/subscribe";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(subscribeSaga);
}
