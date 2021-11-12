import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "./product";

export interface CartItem {
  cartItemId: number;
  term: string;
  grindPoint: string;
  quantity: number;
  totalCost: number;
  productId: number;
}

interface CartItemState {
  data: CartItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
}

const initialState: CartItemState = {
  data: [],
  isFetched: false,
  isAddCompleted: false,
  isRemoveCompleted: false,
};

const cartItemSlice = createSlice({
  name: "cartItem", // slice의 이름(state이름)
  initialState, // 이 slice의 state 초기값
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const cart = action.payload;
      console.log("--add cart in reducer--");
      console.log(cart);
      state.data.unshift(cart);
      state.isAddCompleted = true;
    },

    removeDetail: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.cartItemId === id),
        1
      );
      state.isRemoveCompleted = true;
    },
  },
});

export const { addCart, removeDetail } = cartItemSlice.actions;

export default cartItemSlice.reducer;
