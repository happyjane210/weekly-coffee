import axios from "axios";
import { Subscribe } from "../provider/modules/subscribe";

// 응답 타입 한개씩
const subscribeApi = {
  add: (subscribe: Subscribe) =>
    axios.post<Subscribe>(`http://localhost:8080/subscribes`, subscribe),
};

export default subscribeApi;
