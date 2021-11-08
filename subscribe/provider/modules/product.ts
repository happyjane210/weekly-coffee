import { createSlice } from "@reduxjs/toolkit";
import internal from "stream";
import { sadcat } from "../../lib/data/index";

export interface ProductItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface ProductList {
  data: ProductItem[];
}

const initialState: ProductList = {
  data: [
    {
      id: 1,
      name: "cat1",
      image: sadcat,
      description: "this is sad cat",
      price: "KRW 14,000",
    },
    {
      id: 2,
      name: "cat2",
      image: sadcat,
      description: "this is sad cat",
      price: "KRW 25,000",
    },
    {
      id: 3,
      name: "cat3",
      image: sadcat,
      description: "this is sad cat",
      price: "KRW 12,500",
    },
  ],
};

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {},
});

export default productSlice.reducer;
