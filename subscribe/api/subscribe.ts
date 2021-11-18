import axios from "axios";
import {
  Subscribe,
  SubscribePagingReponse,
} from "../provider/modules/subscribe";

// 응답 타입 한개씩
const subscribeApi = {
  add: (subscribe: Subscribe) =>
    axios.post<Subscribe>(`http://localhost:8080/subscribes`, subscribe),

  fetchPaging: (subscriberId: number, page: number, size: number) =>
    axios.get<SubscribePagingReponse>(
      `http://localhost:8080/subscribes/paging/${subscriberId}?page=${page}&size=${size}`
    ),
};

export default subscribeApi;
