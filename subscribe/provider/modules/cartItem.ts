import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "./product";

export interface CartItem {
  subscribeId?: number; // 부모의 id
  seq: number;
  beanAmount: number;
  term: number;
  groundPoint: string;
  orderQuantity: number;
  productPrice: number;
  sum: number;

  productId: number;
  productImageUrl: string;
  productName: string;

  partnerId: number;
  companyName: string;
}

interface CartItemState {
  data: CartItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveOneCompleted?: boolean;
  isRemoveAllCompleted?: boolean;
}

const initialState: CartItemState = {
  data: [],
  isFetched: false,
  isAddCompleted: false,
  isRemoveOneCompleted: false,
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

    // 장바구니 전체 삭제
    clearCart: (state) => {
      const emptyCart: CartItem[] = [];
      state.data = emptyCart;
    },

    // 장바구니 목록 한개 삭제
    removeOne: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      console.log("--remove one in reducer--");

      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.seq === id),
        1
      );
      state.isRemoveOneCompleted = true;
    },
  },
});

export const { addCart, removeOne, clearCart } = cartItemSlice.actions;

export default cartItemSlice.reducer;
