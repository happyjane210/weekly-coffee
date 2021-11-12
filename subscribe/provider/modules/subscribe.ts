import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartItem";

export interface Subscribe {
  //1
  partnerId: number;
  subscribeId: number;
  subscribeDate: string;
  subscriberName: string;
  subscriberPhone: string;
  deliveryMemo: string;
  location: string;
  totalPayment: number;

  SubscribeDetail: CartItem[]; //[1, 2]
}
// subs 1  subsDetail[1(1), 2(1)]  -> 백엔드

interface SubscribeState {
  data: Subscribe[];
  isFetched: boolean;
  isAddCompleted?: boolean;
}

const initialState: SubscribeState = {
  data: [],
  isFetched: false,
  isAddCompleted: false,
};

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    addSubscribe: (state, action: PayloadAction<Subscribe>) => {
      const subscribe = action.payload;
      console.log("--add subscribe in reducer--");
      console.log(subscribe);
      state.data.unshift(subscribe);
      state.isAddCompleted = true;
    },
  },
});

export const { addSubscribe } = subscribeSlice.actions;

export default subscribeSlice.reducer;
