import { coffee } from "../lib/data/coffee";
import axios from "axios";
import React from "react";
import router from "next/router";
import { Card } from "react-bootstrap";

export interface ProductPagingResponse {
  content: ProductItem[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface ProductItem {
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

export interface ProductsProp {
  item: ProductPagingResponse;
}

const Index = ({ item }: ProductsProp) => {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";

  function getData() {
    axios.get(API_URL).then((res) => {});
  }

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
        <hr />
        <div className="d-flex justify-content-center my-5 py-5">
          {item.content.map((item, index) => (
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
              <Card.Body>
                <Card.Title className="text-center">
                  {item.productName}
                </Card.Title>
                <Card.Body>
                  <h2 className="text-center">
                    <b>{item.companyName}</b>
                  </h2>
                </Card.Body>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // const res = await axios.get<ProductPagingResponse>(
  //   `http://localhost:8082/partner/products/paging/1?page=0&size=10`
  // );
  // const item = res.data;

  const item: ProductPagingResponse = {
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

  // console.log(item);

  return { props: { item } };
}

export default Index;
