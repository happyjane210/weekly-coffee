import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductItem {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  fileName: string;
  fileType: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  productUploadDate: number;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
  salesStatus: number;
}

export interface ProductResponse {
  data: ProductItem[];
}

export interface ProductState {
  data: ProductItem[];
  isFetched: boolean; // 서버에서 데이터를 받아왔는지에 대한 여부
  isAddCompleted?: boolean; // 데이터 추가가 완료되었는지 여부
}

const initialState: ProductState = {
  data: [],
  isFetched: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // PayloadAction<payload타입>
    // payload로 item객체를 받음
    loadProduct: (state, action: PayloadAction<ProductResponse>) => {
      state.data = action.payload.data;
    },
  },
});

export const { loadProduct } = productSlice.actions;

export default productSlice.reducer;
