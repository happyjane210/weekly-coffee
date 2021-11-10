import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
//import router, { useRouter } from "next/router"; - router는 리덕스쓸때 쓰는거임
import Sidebar from "../../../components/sidebar/sidebar";
import style from "./productdetail.module.css";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Card, Form, Button } from "react-bootstrap";
import router, { useRouter } from "next/router";

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
  const router = useRouter();
  const id = router.query.id as string;

  const coffeebeanInput = useRef<HTMLSelectElement>();
  const substermInput = useRef<HTMLSelectElement>();
  const grindpointInput = useRef<HTMLSelectElement>();
  const quantityInput = useRef<HTMLInputElement>();

  const [quantity, setQuantity] = useState<number | undefined>(Number);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "4rem" }}
        >
          {/* product detail */}
          <div className={style.product}>
            <h1>
              <b>ProductDetail</b>
            </h1>
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
                <Card.Body>
                  <h1>
                    [{item.brand}] {item.name}
                  </h1>
                  <h1 style={{ color: "#00bcd4" }}>
                    <b>
                      {item.price_sign}
                      {item.price}
                    </b>
                  </h1>
                  <hr className="my-5" />
                  <h3>💡NOTE💡</h3>
                  <h3>It'll be shipped every Monday.</h3>
                  <hr className="my-5" />
                  <h3>coffee bean</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    defaultValue={"select coffee bean"}
                  >
                    <option value="--" disabled>
                      select coffee bean
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </Form.Select>
                  <h3>subscribe term</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                  >
                    <option value="--" disabled>
                      select subscribe term
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <h3>grind-point</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                  >
                    <option value="--" disabled>
                      select grind-point
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <h3>quantity</h3>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="1"
                    id="quantity"
                    min="1"
                    style={{
                      padding: "0.4rem",
                      fontSize: "18px",
                      textAlign: "center",
                      maxWidth: "100px",
                    }}
                  />

                  <hr className="my-5" />
                  <div className="d-flex">
                    <h2 className="me-3">
                      <b>PRICE</b>
                    </h2>
                    <h2>
                      <b>
                        {item.price_sign}
                        {item.price}
                      </b>
                    </h2>
                  </div>

                  <div className="d-grid gap-2 mt-5">
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      onClick={() => {
                        router.push("/cart");
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="outline-dark"
                      size="lg"
                      onClick={() => {
                        router.push("/order");
                      }}
                    >
                      SUBSCRIBE NOW
                    </Button>
                  </div>
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
  //   `http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit?id=${id}`
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
