import axios from "axios";
import { ProductItem } from "../provider/modules/product";

const productApi = {
  fetchAll: () =>
    axios.get<ProductItem[]>(`${process.env.NEXT_PUBLIC_API_BASE}/products`),

  fetchCountry: () =>
    axios.get<ProductItem[]>(
      `${process.env.NEXT_PUBLIC_API_BASE}/products/country/{countryName}`
    ),
};

export default productApi;
