import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import router, { useRouter } from "next/router"; - router는 리덕스쓸때 쓰는거임
import Sidebar from "../../../components/sidebar/sidebar";
import style from "./productdetail.module.css";
import axios from "axios";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Card, Form, Button, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../../../provider";
import { addCart, CartItem } from "../../../provider/modules/cartItem";
import { ProductItem } from "../../../provider/modules/product";
import alert, { addAlert, removeAlert } from "../../../provider/modules/alert";
import { nanoid } from "@reduxjs/toolkit";
import Alert from "../../../components/alertStack";
//import icon1 from "../../../public/image/calendar.png";

interface ProductsProp {
  item: ProductItem;
}

const ProductDetail = ({ item }: ProductsProp) => {
  console.log("--SSR item--");
  console.log(item);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cartItemData = useSelector((state: RootState) => state.cartItem.data);

  //const productData = useSelector((state: RootState) => state.product.data);
  //const id = router.query.id as string;

  // const amountInput = useRef() as MutableRefObject<HTMLInputElement>;

  const amountInput = useRef<HTMLSelectElement>(null);
  const substermInput = useRef<HTMLSelectElement>(null);
  const groundpointInput = useRef<HTMLSelectElement>(null);
  const quantityInput = useRef<HTMLInputElement>(null);
  const alert = useSelector((state: RootState) => state.alert);

  const [total, setTotal] = useState(item.productPrice);

  const calc = (price: number) => {
    let quantity = quantityInput.current ? +quantityInput.current.value : 1;

    let amount = amountInput.current ? +amountInput.current.value : 1;
    let term = substermInput.current ? +substermInput.current.value : 1;
    if (price && quantity && amount && term) {
      let total = price * amount * term * quantity;
      console.log(total);
      setTotal(total);
    } else {
      setTotal(price);
    }
  };

  const handleAddCart = () => {
    console.log(amountInput.current?.value);
    console.log(substermInput.current?.value);
    console.log(groundpointInput.current?.value);
    console.log(quantityInput.current?.value);

    const orderItem: CartItem = {
      seq: cartItemData.length ? cartItemData[0].seq + 1 : 1,
      beanAmount: amountInput.current ? +amountInput.current.value : 0,
      term: substermInput.current ? +substermInput.current.value : 0,
      groundPoint: groundpointInput.current
        ? groundpointInput.current.value
        : "",
      orderQuantity: quantityInput.current ? +quantityInput.current.value : 1,
      sum: total,
      productPrice: item.productPrice,
      productId: item.productId,
      productImageUrl: item.productImageUrl,
      productName: item.productName,
      companyName: item.companyName,
      partnerId: item.partnerId,
    };

    console.log(orderItem);

    if (
      amountInput.current?.value === "select coffee amount" ||
      substermInput.current?.value === "select subscribe term" ||
      groundpointInput.current?.value === "select ground-point" ||
      quantityInput.current?.value === null
    ) {
      dispatch(
        addAlert({
          id: nanoid(),
          variant: "danger",
          message: "옵션을 모두 선택하세요!",
        })
      );
    } else {
      dispatch(addCart(orderItem));
      router.push("/cart");
    }

    console.log("sum " + total);
    console.log("productPrice " + item.productPrice);
  };

  const handleSubscribe = () => {
    const orderItem: CartItem = {
      seq: cartItemData.length ? cartItemData[0].seq + 1 : 1,
      beanAmount: amountInput.current ? +amountInput.current.value : 0,
      term: substermInput.current ? +substermInput.current.value : 0,
      groundPoint: groundpointInput.current
        ? groundpointInput.current.value
        : "",
      orderQuantity: quantityInput.current ? +quantityInput.current.value : 1,
      sum: total,
      productPrice: item.productPrice,
      productId: item.productId,
      productImageUrl: item.productImageUrl,
      productName: item.productName,
      companyName: item.companyName,
      partnerId: item.partnerId,
    };

    console.log(orderItem);

    if (
      amountInput.current?.value === "select coffee amount" ||
      substermInput.current?.value === "select subscribe term" ||
      groundpointInput.current?.value === "select ground-point" ||
      quantityInput.current?.value === null
    ) {
      dispatch(
        addAlert({
          id: nanoid(),
          variant: "danger",
          message: "옵션을 모두 선택하세요!",
        })
      );
    } else {
      dispatch(addCart(orderItem));
      router.push("/order");
    }

    console.log("sum " + total);
    console.log("productPrice " + item.productPrice);
  };

  return (
    <>
      <Alert />
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "4rem" }}
        >
          {/* product detail */}
          <div className={style.product}>
            <h1 className="mb-5">
              <b>PRODUCT DETAIL</b>
            </h1>

            <Image
              loader={() => item.productImageUrl}
              src={item.productImageUrl}
              alt={item.productName}
              objectFit="cover"
              width={700}
              height={700}
              placeholder="blur"
              blurDataURL={item.productImageUrl}
            />

            <div className="my-5">
              <h1>
                <b>{item.companyName}</b>
              </h1>
              <h3>{item.productName}</h3>
            </div>

            <Table className={style.table}>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/calendar.png"
                        alt="icon1"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>로스팅 스케줄</b> <br />
                        매주 월 화 수 목 금
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/lemon.png"
                        alt="icon2"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-2">
                        <b>산미</b>
                        <br />
                        {item.cupNote}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/coffee-beans.png"
                        alt="icon3"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-2">
                        <b>원두 타입</b>
                        <br />
                        {item.beanType}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/roasting.png"
                        alt="icon4"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-2">
                        <b>로스팅 포인트</b>
                        <br />
                        {item.roastingPoint}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h2 className="my-5">원두 노트</h2>
            <Table className={style.table}>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/globe.png"
                        alt="icon5"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>원산지</b> <br />
                        {item.country}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/location.png"
                        alt="icon6"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>지역</b> <br />
                        {item.country}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/field.png"
                        alt="icon7"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>농장</b> <br />
                        {item.farm}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/plant.png"
                        alt="icon8"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>품종</b> <br />
                        {item.variety}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/wash.png"
                        alt="icon9"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>가공 방식</b> <br />
                        {item.processing}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h2 className="my-5">로스터리 소개</h2>
            <Table className={style.table}>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <div className="d-flex">
                      <img
                        src="/image/building.png"
                        alt="icon5"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div>
                        <h3>{item.companyName}</h3>
                        {item.companyIntroduce}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/location.png"
                        alt="icon5"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>위치</b> <br />
                        {item.companyAddress}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img
                        src="/image/phone.png"
                        alt="icon9"
                        width={50}
                        height={50}
                        className="me-3"
                      />
                      <div className="mt-1">
                        <b>Contact</b> <br />
                        {item.companyContact}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* 
            <div className="my-5">
              <h4>{item.expirationData}</h4>
              <h4>{item.manufacturer}</h4>
              <h4>{item.manufacturingDate}</h4>
            </div>

            <div>
              <h2>상품 필수 표기 정보</h2>
              <h4>{item.foodType}</h4>
            </div>
            <div>
              <h2>배송안내</h2>
            </div> */}
          </div>
          {/* orderdetail */}
          <div className={style.order}>
            <Card className={style.orderbox}>
              <Card.Body>
                <Card.Body>
                  <h1>
                    [{item.companyName}] {item.productName}
                  </h1>
                  <h1 style={{ color: "#00bcd4" }}>
                    <b>
                      KRW {new Intl.NumberFormat().format(item.productPrice)}
                    </b>
                  </h1>
                  <hr className="my-5" />
                  <h3>💡NOTE💡</h3>
                  <h3>It&apos;ll be shipped every Monday.</h3>
                  <hr className="my-5" />
                  <h3>amount</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    defaultValue={"select coffee amount"}
                    ref={amountInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <option disabled>select coffee amount</option>

                    <option value={1}>200g</option>
                    <option value={2}>400g</option>
                    <option value={3}>600g</option>
                  </Form.Select>
                  <h3>subscribe term</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    defaultValue={"select subscribe term"}
                    ref={substermInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <option disabled>select subscribe term</option>
                    <option value={4}>1개월 - 4회</option>
                    <option value={8}>2개월 - 8회</option>
                    <option value={12}>3개월 - 12회</option>
                  </Form.Select>
                  <h3>ground-point</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    defaultValue={"select ground-point"}
                    ref={groundpointInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <option disabled>select ground-point</option>
                    <option value="홀빈(갈지않음)">홀빈(갈지않음)</option>
                    <option value="에스프레소">에스프레소</option>
                    <option value="더치">더치</option>
                    <option value="프렌치프레스">프렌치프레스</option>
                  </Form.Select>
                  <h3>quantity</h3>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    className={style.quantity}
                    ref={quantityInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                    defaultValue="1"
                  />

                  <hr className="my-5" />
                  <div className="d-flex">
                    <h2 className="me-3">
                      <b>PRICE</b>
                    </h2>
                    <h2>
                      <b>{new Intl.NumberFormat().format(total)}</b>
                    </h2>
                  </div>

                  <div className="d-grid gap-2 mt-5">
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      onClick={() => {
                        handleAddCart();
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="outline-dark"
                      size="lg"
                      onClick={() => {
                        handleSubscribe();
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

  const res = await axios.get<ProductItem[]>(
    `${process.env.NEXT_PUBLIC_API_BASE}/products/${id}`
  );
  const item = res.data;

  return { props: { item } };
};

// export async function getServerSideProps() => {
//   const id = context.params?.id as string;
//   console.log(id);

//   const res = await axios.get<ProductItem[]>(`http://localhost:8080/products`);
//   const item = res.data;

//   const item =
//     products && products.content.find((item) => item && item.productId === +id);

//   return { props: { item } };
// };

export default ProductDetail;
