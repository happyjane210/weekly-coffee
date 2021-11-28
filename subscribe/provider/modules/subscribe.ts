import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartItem";

export interface PageRequest {
  subscriberId: number;
  page: number;
  size: number;
}

export interface SubscribePage {
  data: Subscribe[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

export interface SubscribePagingReponse {
  content: Subscribe[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  last: boolean;
}

export interface Subscribe {
  //1
  subscribeId: number;
  partnerId: number;
  subscribeDate: string;
  subscriberId: number; //추가함
  subscriberName: string;
  subscriberPhone: string;
  location: string;
  deliveryMemo: string;
  totalPayment: number;
  orderNumber?: number;

  subscribeDetails: CartItem[]; //[1, 2]
}
// subs 1  subsDetail[1(1), 2(1)]  -> 백엔드

interface SubscribeState {
  data: Subscribe[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  totalElements?: number;
  totalPages?: number;
  page?: number;
  pageSize?: number;
  isLast?: boolean;
}

const initialState: SubscribeState = {
  data: [],
  isFetched: false,
  isAddCompleted: false,
  totalPages: 0,
  page: 0,
  pageSize: 5,
};

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    // 주문 추가하기
    addSubscribe: (state, action: PayloadAction<Subscribe>) => {
      const subscribe = action.payload;
      console.log("--add subscribe in reducer--");
      console.log(subscribe);
      state.data.unshift(subscribe);
      state.isAddCompleted = true;
    },
    initialComplete: (state) => {
      delete state.isAddCompleted;
    },

    // 마이페이지 주문 내역 페이지
    fetchSubscribePage: (state, action: PayloadAction<SubscribePage>) => {
      state.data = state.data.concat(action.payload.data);

      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;

      state.isFetched = true;
    },
  },
});

export const { addSubscribe, fetchSubscribePage, initialComplete } =
  subscribeSlice.actions;

export default subscribeSlice.reducer;
