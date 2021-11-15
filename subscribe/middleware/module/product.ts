import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { Axios, AxiosResponse } from "axios";
import productApi from "../../api/product";
import productReducer, {
  loadProduct,
  ProductItem,
  ProductResponse,
} from "../../provider/modules/product";

//-------- createAction create함수 --------------- 1
// product 전체 조회
export const requestFatchAllProduct = createAction(
  `${productReducer.name}/requestFatchAllProduct`
);

//---------------- saga action 처리하는 부분 --------------------- 3
// product 전체 조회
function* fetchAllData() {
  yield console.log("--fetchAllData--");

  const result: AxiosResponse<ProductItem[]> = yield call(productApi.fetchAll);

  const ProductItem: ProductResponse = {
    data: result.data.map(
      (item) =>
        ({
          productId: item.productId,
          partnerId: item.partnerId,
          productName: item.productName,
          productPrice: item.productPrice,
          productImageUrl: item.productImageUrl,
          fileName: item.fileName,
          fileType: item.fileName,
          foodType: item.foodType,
          expirationData: item.expirationData,
          manufacturer: item.manufacturer,
          manufacturingDate: item.manufacturingDate,
          companyName: item.companyName,
          productUploadDate: item.productUploadDate,
          companyIntroduce: item.companyIntroduce,
          companyAddress: item.companyAddress,
          companyContact: item.companyContact,
          beanType: item.beanType,
          beanTag: item.beanTag,
          processing: item.processing,
          country: item.country,
          region: item.region,
          farm: item.farm,
          cupNote: item.cupNote,
          roastingPoint: item.roastingPoint,
          variety: item.variety,
          salesStatus: item.salesStatus,
        } as ProductItem)
    ),
  };

  // state 초기화 reducer 실행
  yield put(loadProduct(ProductItem));
}

//---------------- saga action을 감지(take)하는 부분 ----------------------- 2

export default function* productSaga() {
  // product 전체 조회
  yield takeLatest(requestFatchAllProduct, fetchAllData);
}
