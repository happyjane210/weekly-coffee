import { fork } from "redux-saga/effects";
import productSaga from "./module/product";

export default function* rootSaga() {
  yield fork(productSaga);
}
