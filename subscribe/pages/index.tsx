import axios from "axios";
import React from "react";
import router from "next/router";
import { Card } from "react-bootstrap";
import { ProductItem } from "../provider/modules/product";
import Image from "next/image";
import { coffee } from "../lib/data/coffee";

export interface ProductsProp {
  item: ProductItem[];
}

const Index = ({ item }: ProductsProp) => {
  return (
    <>
      <div className="position-relative overflow-hidden p-md-5 m-md-3 text-center bg-light">
        {/* <img src={coffee} alt="coffee" /> */}
        <div className="col-md-5 p-lg-5 my-5">
          <h3>Whenever you need a cup of coffee.</h3>
          <h1>WEEKLY COFFEE</h1>
          <h1 className="my-5">
            <a href="/products">Getting Start☕</a>
          </h1>
        </div>

        <div className="d-flex justify-content-center my-5 py-5">
          {item.map((item, index) => (
            <Card
              key={index}
              style={{
                width: "calc((100% - 3rem) / 4)",
                marginLeft: index % 4 === 0 ? "0" : "1rem",
                marginTop: index > 3 ? "1rem" : "0",
              }}
              onClick={() => {
                // id값을 물고 이동해야함
                router.push(`/products/detail/${item.productId}`);
              }}
            >
              <Card.Img
                variant="top"
                src={item.productImageUrl}
                alt={item.productName}
                width="150px"
              />
            </Card>
          ))}
        </div>
      </div>
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

export default Index;
