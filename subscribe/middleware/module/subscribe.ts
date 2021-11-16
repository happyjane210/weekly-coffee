import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { addSubscribe, Subscribe } from "../../provider/modules/subscribe";
import subscribeReducer from "../../provider/modules/subscribe";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import subscribeApi from "../../api/subscribe";

//-------- createAction create함수 --------------- 1
// subscribe 추가

export const requestAddSubscribe = createAction<Subscribe>(
  `${subscribeReducer.name}/requestAddSubscribe`
);

//---------------- saga action 처리하는 부분 --------------------- 3

function* addSubcribeData(action: PayloadAction<Subscribe>) {
  yield console.log("--addSubscribeData in Saga--");
  yield console.log(action);

  // 백엔드로 보내주는쪽
  // action의 payload로 넘어온 객체
  const subscribeRequest = action.payload;

  // api를 보냄
  const result: AxiosResponse<Subscribe> = yield call(
    subscribeApi.add,
    subscribeRequest
  );

  // 백엔드에서 처리한 데이터 객체로 state를 변경할 payload 객체를 생성
  yield put(addSubscribe(result.data));
}

//---------------- saga action을 감지(take)하는 부분 ----------------------- 2

export default function* subscribeSaga() {
  yield takeEvery(requestAddSubscribe, addSubcribeData);
}
