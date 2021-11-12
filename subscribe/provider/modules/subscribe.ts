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

  SubscribeDetail: CartItem[]; //1, 2
}
// 1 [1(1), 2(1)] => back
const initialState: Subscribe = {
  partnerId: 0,
  subscribeId: 0,
  subscribeDate: "",
  subscriberName: "",
  subscriberPhone: "",
  deliveryMemo: "",
  location: "",
  SubscribeDetail: [],
};
