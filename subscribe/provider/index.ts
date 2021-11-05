import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../provider/modules/product";

export const store = configureStore({
  // 각 state별로 처리할 reducer 목록
  reducer: {
    // state이름: reducer이름
    // profile state 처리하는 reducer를 등록
    // profile: profileReducer,
    // photo state를 처리하는 reducer를 등록
    //photo: photoReduer,
    // contact: contactReducer,
    //progress: progressReducer,
    //alert: alertReducer,
    product: productReducer,
  },
  // redux store(dispatcher)에 미들웨어 적용
  // middleware는 여러개 사용할 수 있음, [defaultMiddlware, sagaMiddleware, thunkMiddlware]
  //middleware: [sagaMiddleware],
  devTools: true, // 개발툴 사용여부
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
