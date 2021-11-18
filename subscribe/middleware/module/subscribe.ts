import { createAction, PayloadAction } from "@reduxjs/toolkit";
import {
  addSubscribe,
  fetchSubscribePage,
  PageRequest,
  Subscribe,
  SubscribePage,
  SubscribePagingReponse,
} from "../../provider/modules/subscribe";
import subscribeReducer from "../../provider/modules/subscribe";
import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import subscribeApi from "../../api/subscribe";
import { clearCart } from "../../provider/modules/cartItem";

//-------- createAction create함수 --------------- 1

// subscribe 추가
export const requestAddSubscribe = createAction<Subscribe>(
  `${subscribeReducer.name}/requestAddSubscribe`
);

// subscribe 페이지 조회
export const requestFetchPagingSubscribe = createAction<PageRequest>(
  `${subscribeReducer.name}/requestFetchPagingSubscribe`
);

//---------------- saga action 처리하는 부분 --------------------- 3

function* addSubcribeData(action: PayloadAction<Subscribe>) {
  yield console.log("--addSubscribeData in Saga--");
  yield console.log(action);

  // 백엔드로 보내주는쪽
  // action의 payload로 넘어온 객체
  const subscribeRequest = action.payload;

  // api를 보냄 , 백엔드에서 데이터 받아오기
  const result: AxiosResponse<Subscribe> = yield call(
    subscribeApi.add,
    subscribeRequest
  );

  // 백엔드에서 처리한 데이터 객체로 state를 변경할 payload 객체를 생성
  yield put(addSubscribe(result.data));
  yield put(clearCart());
}

function* fetchPagingData(action: PayloadAction<PageRequest>) {
  yield console.log("--fetchPaging Subscribe in Saga--");
  yield console.log(action);

  const subscriberId = action.payload.subscriberId;
  const page = action.payload.page;
  const size = action.payload.size;

  //??
  localStorage.setItem("subscribe_page_size", size.toString());

  const result: AxiosResponse<SubscribePagingReponse> = yield call(
    subscribeApi.fetchPaging,
    subscriberId,
    page,
    size
  );

  console.log(result.data);

  const subscribePage: SubscribePage = {
    data: result.data.content.map(
      (item) =>
        ({
          subscriberId: item.subscriberId,
          partnerId: item.partnerId,
          subscribeId: item.subscribeId,

          subscribeDate:
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate(),
          subscriberName: item.subscriberName,
          subscriberPhone: item.subscriberPhone,
          location: item.location,
          deliveryMemo: item.deliveryMemo,
          totalPayment: item.totalPayment,
          subscribeDetails: item.subscribeDetails,
        } as Subscribe)
    ),
    isLast: result.data.last,
    page: result.data.number,
    pageSize: result.data.size,
    totalElements: result.data.totalElements,
    totalPages: result.data.totalPages,
  };

  console.log(subscribePage);

  // slice reducer로 subscribePage를 fetch 해줌
  yield put(fetchSubscribePage(subscribePage));
}

//---------------- saga action을 감지(take)하는 부분 ----------------------- 2

export default function* subscribeSaga() {
  yield takeEvery(requestAddSubscribe, addSubcribeData);
  yield takeLatest(requestFetchPagingSubscribe, fetchPagingData);
}
