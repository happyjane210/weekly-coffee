import { Axios } from "axios";
import React, { useState } from "react";
import router from "next/router";
import { auto } from "@popperjs/core";
import Link from "next/link";
import Sidebar from "../../components/sidebar/sidebar";

interface ProductsProp {
  item: Item[];
}

interface Item {
  id: number;
  api_featured_image: string;
  brand: string;
  currency: string;
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

const Products = ({ item }: ProductsProp) => {
  console.log(item);

  return (
    <>
      <article className="d-flex">
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>PRODUCTS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {item.map((item: Item, index: any) => (
              <div
                className="card"
                key={index}
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
                <img
                  src={item.api_featured_image}
                  className="card-img-top"
                  alt={item.name}
                  width="150px"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">{item.name}</h4>
                  <h2 className="card-title text-center">
                    <b>{item.brand}</b> <br />
                    {item.product_type}
                  </h2>
                  <h3 className="card-text" style={{ color: "#00bcd4" }}>
                    <strong>
                      {item.price_sign}
                      {item.price}
                    </strong>
                  </h3>
                  {/* <p className="card-text">{item.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit"
  );

  const item: Item = await res.json();

  return { props: { item } };
}

export default Products;
