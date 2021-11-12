import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import router, { useRouter } from "next/router"; - router는 리덕스쓸때 쓰는거임
import Sidebar from "../../../components/sidebar/sidebar";
import style from "./productdetail.module.css";
import axios from "axios";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Card, Form, Button, NavItem } from "react-bootstrap";
import router, { useRouter } from "next/router";
import { AppDispatch, RootState } from "../../../provider";
import { addCart, CartItem } from "../../../provider/modules/cartItem";
import { iteratorSymbol } from "immer/dist/internal";
import { ProductPagingResponse } from "../..";

interface ProductItem {
  productId: number;
  partnerId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  fileName: string;
  fileType: string;
  foodType: string;
  expirationData: string;
  manufacturer: string;
  manufacturingDate: string;
  companyName: string;
  productUploadDate: number;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  beanType: string;
  beanTag: string;
  processing: string;
  country: string;
  region: string;
  farm: string;
  cupNote: string;
  roastingPoint: string;
  variety: string;
  salesStatus: number;
}

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

  const amountInput = useRef<HTMLSelectElement>(null);
  const substermInput = useRef<HTMLSelectElement>(null);
  const groundpointInput = useRef<HTMLSelectElement>(null);
  const quantityInput = useRef<HTMLInputElement>(null);

  const [total, setTotal] = useState(0);

  const calc = (price: number) => {
    let quantity = quantityInput.current ? quantityInput.current.value : "";

    let amount = 0;
    if (amountInput.current?.value === "200g") {
      amount = 1;
    } else if (amountInput.current?.value === "400g") {
      amount = 2;
    } else if (amountInput.current?.value === "600g") {
      amount = 3;
    }

    let term = 0;
    if (substermInput.current?.value === "1개월 - 4회") {
      term = 4;
    } else if (substermInput.current?.value === "2개월 - 8회") {
      term = 8;
    } else if (substermInput.current?.value === "3개월 - 12회") {
      term = 12;
    }

    let total = +(price * amount * term * +quantity);
    console.log(total);

    setTotal(total);
  };

  const handleAddOption = () => {
    console.log(amountInput.current?.value);
    console.log(substermInput.current?.value);
    console.log(groundpointInput.current?.value);
    console.log(quantityInput.current?.value);

    const orderItem: CartItem = {
      cartItemId: cartItemData.length ? cartItemData[0].cartItemId + 1 : 1,
      beanAmount: amountInput.current ? amountInput.current.value : "",
      term: substermInput.current ? substermInput.current.value : "",
      groundPoint: groundpointInput.current
        ? groundpointInput.current.value
        : "",
      orderQuantity: quantityInput.current ? +quantityInput.current.value : 0,
      productPrice: total,
      productId: item.productId,
      productImageUrl: item.productImageUrl,
      productName: item.productName,
      companyName: item.companyName,
      partnerId: item.partnerId,
    };

    dispatch(addCart(orderItem));
  };

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

            <Image
              loader={() => item.productImageUrl}
              alt={item.productName}
              objectFit="cover"
              src={item.productImageUrl}
              width={400}
              height={400}
            />
            <p>{item.productName}</p>
            <h1>
              <b>{item.companyName}</b>
            </h1>
            <h3>{item.country}</h3>
            <h2 className="text-center" style={{ color: "#00bcd4" }}>
              <b>KRW {new Intl.NumberFormat().format(item.productPrice)}</b>
            </h2>
            <br />
            <br />
            <br />
            <h4>{item.processing}</h4>
            <h4>{item.beanTag}</h4>
            <h4>{item.beanType}</h4>
            <h4>{item.roastingPoint}</h4>
          </div>
          {/* orderdetail */}
          <div className={style.order}>
            <Card className={style.orderbox}>
              <Card.Body>
                <Card.Body>
                  <h1>
                    [{item.companyName}] {item.companyIntroduce}
                  </h1>
                  <h1 style={{ color: "#00bcd4" }}>
                    <b>
                      KRW {new Intl.NumberFormat().format(item.productPrice)}
                    </b>
                  </h1>
                  <hr className="my-5" />
                  <h3>💡NOTE💡</h3>
                  <h3>It'll be shipped every Monday.</h3>
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
                  >
                    <option value="--" disabled>
                      select coffee amount
                    </option>
                    <option value="200g">200g</option>
                    <option value="400g">400g</option>
                    <option value="600g">600g</option>
                  </Form.Select>
                  <h3>subscribe term</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    ref={substermInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                  >
                    <option value="--" disabled>
                      select subscribe term
                    </option>
                    <option>1개월 - 4회</option>
                    <option>2개월 - 8회</option>
                    <option>3개월 - 12회</option>
                  </Form.Select>
                  <h3>ground-point</h3>
                  <Form.Select
                    aria-label="Floating label select example"
                    size="lg"
                    className="mb-4"
                    ref={groundpointInput}
                    onChange={() => {
                      calc(item.productPrice);
                    }}
                  >
                    <option value="--" disabled>
                      select ground-point
                    </option>
                    <option value="홀빈(갈지않음)">홀빈(갈지않음)</option>
                    <option>에스프레소</option>
                    <option>더치</option>
                    <option>프렌치프레스</option>
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
                        handleAddOption();
                        router.push("/cart");
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="outline-dark"
                      size="lg"
                      onClick={() => {
                        handleAddOption();
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
  console.log("함수 시작!");
  const id = context.params?.id as string;
  console.log(id);

  // const res = await axios.get<Item[]>(
  //   `http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit?id=${id}`
  // );
  // const item = res.data;

  const products: ProductPagingResponse = {
    content: [
      {
        productId: 1,
        partnerId: 1,
        productName: "에티오피아 예가체프 게르시",
        productPrice: 11000,
        productImageUrl:
          "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
        foodType: "원두",
        expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
        manufacturer: "프릳츠커피컴퍼니",
        manufacturingDate: "제조일 별도 표기",
        companyName: "프릳츠커피컴퍼니",
        fileName: "영앤 도터스1.png",
        fileType: "image/png",
        productUploadDate: 11,
        companyIntroduce:
          "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
        companyAddress:
          "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
        companyContact: "010-2222-2222",
        beanType: "블랜드",
        beanTag: "달콤",
        processing: "내추럴",
        country: "에티오피아",
        region: "예가체프",
        farm: "게르시 소농들",
        cupNote: "새콤한 산미",
        roastingPoint: "라이트 미디엄",
        variety: "에티오피아 토착종",
        salesStatus: 0,
      },
      {
        productId: 2,
        partnerId: 2,
        productName: "에티오피아 예가체프 게르시",
        productPrice: 22000,
        productImageUrl:
          "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
        foodType: "원두",
        expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
        manufacturer: "프릳츠커피컴퍼니",
        manufacturingDate: "제조일 별도 표기",
        companyName: "프릳츠커피컴퍼니",
        fileName: "영앤 도터스1.png",
        fileType: "image/png",
        productUploadDate: 11,
        companyIntroduce:
          "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
        companyAddress:
          "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
        companyContact: "010-2222-2222",
        beanType: "블랜드",
        beanTag: "달콤",
        processing: "내추럴",
        country: "에티오피아",
        region: "예가체프",
        farm: "게르시 소농들",
        cupNote: "새콤한 산미",
        roastingPoint: "라이트 미디엄",
        variety: "에티오피아 토착종",
        salesStatus: 0,
      },
      {
        productId: 3,
        partnerId: 3,
        productName: "에티오피아 예가체프 게르시",
        productPrice: 33000,
        productImageUrl:
          "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
        foodType: "원두",
        expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
        manufacturer: "프릳츠커피컴퍼니",
        manufacturingDate: "제조일 별도 표기",
        companyName: "프릳츠커피컴퍼니",
        fileName: "영앤 도터스1.png",
        fileType: "image/png",
        productUploadDate: 11,
        companyIntroduce:
          "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
        companyAddress:
          "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
        companyContact: "010-2222-2222",
        beanType: "블랜드",
        beanTag: "달콤",
        processing: "내추럴",
        country: "에티오피아",
        region: "예가체프",
        farm: "게르시 소농들",
        cupNote: "새콤한 산미",
        roastingPoint: "라이트 미디엄",
        variety: "에티오피아 토착종",
        salesStatus: 0,
      },
    ],
    last: false,
    totalElements: 0,
    totalPages: 0,
    size: 0,
    number: 0,
  };

  const item =
    products && products.content.find((item) => item && item.productId === +id);

  return { props: { item } };
};

export default ProductDetail;
