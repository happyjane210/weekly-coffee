import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//import router, { useRouter } from "next/router"; - router는 리덕스쓸때 쓰는거임
import Sidebar from "../../../components/sidebar/sidebar";
import style from "./productdetail.module.css";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Card } from "react-bootstrap";

interface Item {
  id: number;
  api_featured_image: string;
  brand: string;
  description: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_link: string;
  product_type: string;
  rating: null;
  website_link: string;
}

interface DetailProp {
  item: Item;
}

const ProductDetail = ({ item }: DetailProp) => {
  // console.log(item);
  //console.log(item.id);

  // let productItem = useSelector((state: ProductsProp) =>
  //   state.item.find((item) => item.id === +id)
  // );

  // console.log(productItem?.id);
  // console.log(productItem?.name);

  //state.data.find((state:Item) => item.id === id)

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "2rem" }}
        >
          {/* product detail */}
          <div className={style.product}>
            <h1>ProductDetail</h1>
            <img
              src={item.api_featured_image}
              alt={item.name}
              className={style.img}
            />
            <p>{item.name}</p>
            <h1>
              <b>{item.brand}</b>
            </h1>
            <h3>{item.product_type}</h3>
            <h2 className="text-center" style={{ color: "#00bcd4" }}>
              <b>
                {item.price_sign}
                {item.price}
              </b>
            </h2>
            <br />
            <br />
            <br />
            <h4>{item.description}</h4>
            <h4>{item.description}</h4>
            <h4>{item.description}</h4>
            <h4>{item.description}</h4>
          </div>
          {/* orderdetail */}
          <div className={style.order}>
            <Card className={style.orderbox}>
              <Card.Body>
                <Card.Title className="text-center">
                  <h1>ORDER DETAIL</h1>
                </Card.Title>
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
          </div>
        </section>
      </article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  console.log(id);

  // const res = await axios.get<Item[]>(
  //   `http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit?id={id}`
  // );
  // const item = res.data;

  const item = {
    id: 634,
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/634/original/open-uri20171223-4-xq5rvq?1514061762",
    brand: "benefit",
    description: "creamy brow highlighting pencil",
    image_link:
      "https://www.benefitcosmetics.com/ca/sites/ca/files/styles/category_page_lg/public/1high-brow-component_0.png?itok=XpUgoe35",
    name: "high brow eyebrow highlighter ",
    price: "29.0",
    price_sign: "₤",
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/644.json",
    product_link:
      "https://www.benefitcosmetics.com/ca/en-gb/product/porefessional-agent-zero-shine",
    product_type: "foundation",
    rating: null,
    website_link: "https://www.benefitcosmetics.com",
  };

  return { props: { item } };
};

export default ProductDetail;
