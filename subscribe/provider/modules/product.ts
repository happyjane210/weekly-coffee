import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import internal from "stream";
import { sadcat } from "../../lib/data/index";

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

export interface ProductState {
  data: ProductItem[];
  isFetched: boolean; // 서버에서 데이터를 받아왔는지에 대한 여부
  isAddCompleted?: boolean; // 데이터 추가가 완료되었는지 여부
}

const initialState: ProductState = {
  data: [
    {
      productId: 1,
      partnerId: 1,
      productName: "에티오피아 예가체프 게르시",
      productPrice: 11000,
      productImageUrl:
        "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
      foodType: "원두",
      expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
      manufacturer: "프릳츠커피컴퍼니",
      manufacturingDate: "제조일 별도 표기",
      companyName: "프릳츠커피컴퍼니",
      fileName: "영앤 도터스1.png",
      fileType: "image/png",
      productUploadDate: 11,
      companyIntroduce:
        "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
      companyAddress:
        "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
      companyContact: "010-2222-2222",
      beanType: "블랜드",
      beanTag: "달콤",
      processing: "내추럴",
      country: "에티오피아",
      region: "예가체프",
      farm: "게르시 소농들",
      cupNote: "새콤한 산미",
      roastingPoint: "라이트 미디엄",
      variety: "에티오피아 토착종",
      salesStatus: 0,
    },
    {
      productId: 2,
      partnerId: 2,
      productName: "에티오피아 예가체프 게르시",
      productPrice: 22000,
      productImageUrl:
        "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
      foodType: "원두",
      expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
      manufacturer: "프릳츠커피컴퍼니",
      manufacturingDate: "제조일 별도 표기",
      companyName: "프릳츠커피컴퍼니",
      fileName: "영앤 도터스1.png",
      fileType: "image/png",
      productUploadDate: 11,
      companyIntroduce:
        "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
      companyAddress:
        "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
      companyContact: "010-2222-2222",
      beanType: "블랜드",
      beanTag: "달콤",
      processing: "내추럴",
      country: "에티오피아",
      region: "예가체프",
      farm: "게르시 소농들",
      cupNote: "새콤한 산미",
      roastingPoint: "라이트 미디엄",
      variety: "에티오피아 토착종",
      salesStatus: 0,
    },
    {
      productId: 3,
      partnerId: 3,
      productName: "에티오피아 예가체프 게르시",
      productPrice: 33000,
      productImageUrl:
        "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
      foodType: "원두",
      expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
      manufacturer: "프릳츠커피컴퍼니",
      manufacturingDate: "제조일 별도 표기",
      companyName: "프릳츠커피컴퍼니",
      fileName: "영앤 도터스1.png",
      fileType: "image/png",
      productUploadDate: 11,
      companyIntroduce:
        "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
      companyAddress:
        "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
      companyContact: "010-2222-2222",
      beanType: "블랜드",
      beanTag: "달콤",
      processing: "내추럴",
      country: "에티오피아",
      region: "예가체프",
      farm: "게르시 소농들",
      cupNote: "새콤한 산미",
      roastingPoint: "라이트 미디엄",
      variety: "에티오피아 토착종",
      salesStatus: 0,
    },
  ],
  isFetched: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // PayloadAction<payload타입>
    // payload로 item객체를 받음
    loadProduct: (state, action: PayloadAction<ProductItem>) => {
      const product = action.payload;
      console.log("--in reducer function--");
      console.log(product);
      state.data.unshift(product);
      state.isAddCompleted = true; // 추가가 되었음으로 표시
    },
  },
});

export const { loadProduct } = productSlice.actions;

export default productSlice.reducer;
