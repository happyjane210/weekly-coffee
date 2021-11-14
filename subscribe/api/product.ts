import axios from "axios";
import { ProductItem } from "../provider/modules/product";

const productApi = {
  get: () => axios.get<ProductItem[]>(`http://localhost:8080/products`),
};

export default productApi;
