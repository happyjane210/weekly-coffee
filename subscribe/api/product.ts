import axios from "axios";
import { ProductItem } from "../provider/modules/product";

const productApi = {
  fetchAll: () =>
    axios.get<ProductItem[]>(`${process.env.NEXT_PUBLIC_API_BASE}/products`),

  // CSR redux state
  // fetchOne: (productId: number) =>
  //   axios.get<ProductItem>(`http://localhost:8080/products/${productId}`),
};

export default productApi;
