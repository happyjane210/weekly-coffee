import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/sidebar";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ProductItem } from "../../provider/modules/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import { requestFetchCountry } from "../../middleware/module/product";

export interface ProductsProp {
  item: ProductItem[];
}

const Products = ({ item }: ProductsProp) => {
  console.log("--SSR | item:ProductsProp--");
  console.log(item);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const countryData = useSelector((state: RootState) => state.product.data);

  const [country, setCountry] = useState(false);

  useEffect(() => {
    dispatch(requestFetchCountry());
  }, [dispatch]);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>PRODUCTS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {/* 원산지 별 분류 */}
            {country === true &&
              countryData.filter((item) => item.country === item.country)}

            {country === true &&
              countryData.map((item, index) =>
                item.salesStatus === 1 ? (
                  <Card
                    style={{
                      width: "calc((100% - 3rem) / 4)",
                      marginLeft: index % 4 === 0 ? "0" : "1rem",
                      marginTop: index > 3 ? "1rem" : "0",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // id값을 물고 이동해야함
                      router.push(`/products/detail/${item.productId}`);
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={item.productImageUrl}
                        alt={item.productName}
                        width="150px"
                      />

                      <Card.Body>
                        <h2 className="text-center my-4">
                          <b>{item.companyName}</b>
                        </h2>
                        <h4 className="text-center">{item.productName}</h4>
                        <h3
                          className="text-center mt-4"
                          style={{ color: "#00bcd4" }}
                        >
                          <b>
                            KRW{" "}
                            {new Intl.NumberFormat().format(item.productPrice)}
                          </b>
                        </h3>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                ) : (
                  <></>
                )
              )}
            {/* 전체 조회 */}
            {country === false &&
              item.map((item, index) =>
                item.salesStatus === 1 ? (
                  <Card
                    style={{
                      width: "calc((100% - 3rem) / 4)",
                      marginLeft: index % 4 === 0 ? "0" : "1rem",
                      marginTop: index > 3 ? "1rem" : "0",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // id값을 물고 이동해야함
                      router.push(`/products/detail/${item.productId}`);
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={item.productImageUrl}
                        alt={item.productName}
                        width="150px"
                      />

                      <Card.Body>
                        <h2 className="text-center my-4">
                          <b>{item.companyName}</b>
                        </h2>
                        <h4 className="text-center">{item.productName}</h4>
                        <h3
                          className="text-center mt-4"
                          style={{ color: "#00bcd4" }}
                        >
                          <b>
                            KRW{" "}
                            {new Intl.NumberFormat().format(item.productPrice)}
                          </b>
                        </h3>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                ) : (
                  <></>
                )
              )}
          </div>
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<ProductItem[]>(
    `${process.env.NEXT_PUBLIC_API_BASE}/products`
  );
  const item = res.data;

  return { props: { item } };
}

export default Products;
