import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OptionItem {
  optionId: number;
  partnerId: number;
  productId: number;
  productName: string;
  productPrice: number;
  companyName: string;
  beanAmount: string;
  term: string;
  grindPoint: string;
  quantity: number;
  totalCost: number;
}

interface OptionState {
  data: OptionItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
}

const initialState: OptionState = {
  data: [],
  isFetched: false,
  isAddCompleted: false,
  isRemoveCompleted: false,
};

const optionSlice = createSlice({
  name: "option", // slice의 이름(state이름)
  initialState, // 이 slice의 state 초기값
  reducers: {
    addOption: (state, action: PayloadAction<OptionItem>) => {
      const option = action.payload;
      console.log("--add option in reducer--");
      console.log(option);
      state.data.unshift(option);
      state.isAddCompleted = true;
    },

    removeOption: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.optionId === id),
        1
      );
      state.isRemoveCompleted = true;
    },
  },
});

export const { addOption, removeOption } = optionSlice.actions;

export default optionSlice.reducer;
