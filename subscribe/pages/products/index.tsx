import React, { useState } from "react";
import router, { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/sidebar";
import { Card } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";

interface ProductsProp {
  item: Item[];
}

interface Item {
  id: number;
  api_featured_image: string;
  brand: string;
  description: string;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_link: string;
  product_type: string;
  rating: null;
  website_link: string;
}

interface ProductsProp {
  item: Item[];
}

const Products = ({ item }: ProductsProp) => {
  console.log(item);
  const router = useRouter();

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>PRODUCTS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {item.map((item: Item, index: any) => (
              <Card
                key={item.id}
                style={{
                  width: "calc((100% - 3rem) / 4)",
                  marginLeft: index % 4 === 0 ? "0" : "1rem",
                  marginTop: index > 3 ? "1rem" : "0",
                }}
                onClick={() => {
                  // id값을 물고 이동해야함
                  router.push(`/products/detail/${item.id}`);
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.api_featured_image}
                  alt={item.name}
                  width="150px"
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Body>
                    <h2 className="text-center">
                      <b>{item.brand}</b>
                    </h2>
                    <h4 className="text-center">{item.product_type}</h4>
                    <h3 className="text-center" style={{ color: "#00bcd4" }}>
                      <b>
                        {item.price_sign}
                        {item.price}
                      </b>
                    </h3>
                  </Card.Body>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<Item[]>(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit"
  );

  const item = res.data;

  return { props: { item } };
}

export default Products;
