import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/sidebar";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ProductItem } from "../../provider/modules/product";

export interface ProductsProp {
  item: ProductItem[];
}

const Products = ({ item }: ProductsProp) => {
  console.log("--SSR | item:ProductsProp--");
  console.log(item);
  const router = useRouter();
  // const dispatch = useDispatch<AppDispatch>();
  // const productData = useSelector((state: RootState) => state.product.data);

  // const product: ProductItem = {
  //   productId: productData.length ? productData[0].productId + 1 : 1,
  //   partnerId: 0,
  //   productName: "",
  //   productPrice: 0,
  //   productImageUrl: "",
  //   fileName: "",
  //   fileType: "",
  //   foodType: "",
  //   expirationData: "",
  //   manufacturer: "",
  //   manufacturingDate: "",
  //   companyName: "",
  //   productUploadDate: 0,
  //   companyIntroduce: "",
  //   companyAddress: "",
  //   companyContact: "",
  //   beanType: "",
  //   beanTag: "",
  //   processing: "",
  //   country: "",
  //   region: "",
  //   farm: "",
  //   cupNote: "",
  //   roastingPoint: "",
  //   variety: "",
  //   salesStatus: 0,
  // };

  // useEffect(() => {
  //   dispatch(loadProduct(product));
  // }, []);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>PRODUCTS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {item.map(
              (item, index) =>
                !item.salesStatus && (
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
                        <h4 className="text-center">{item.cupNote}</h4>
                        <h3
                          className="text-center"
                          style={{ color: "#00bcd4" }}
                        >
                          <b>{item.productPrice}</b>
                        </h3>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                )
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<ProductItem[]>(`http://localhost:8080/products`);
  const item = res.data;

  // const item: ProductPagingResponse = {
  //   content: [
  //     {
  //       productId: 1,
  //       partnerId: 1,
  //       productName: "에티오피아 예가체프 게르시",
  //       productPrice: 11000,
  //       productImageUrl:
  //         "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
  //       foodType: "원두",
  //       expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
  //       manufacturer: "프릳츠커피컴퍼니",
  //       manufacturingDate: "제조일 별도 표기",
  //       companyName: "프릳츠커피컴퍼니",
  //       fileName: "영앤 도터스1.png",
  //       fileType: "image/png",
  //       productUploadDate: 11,
  //       companyIntroduce:
  //         "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
  //       companyAddress:
  //         "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
  //       companyContact: "010-2222-2222",
  //       beanType: "블랜드",
  //       beanTag: "달콤",
  //       processing: "내추럴",
  //       country: "에티오피아",
  //       region: "예가체프",
  //       farm: "게르시 소농들",
  //       cupNote: "새콤한 산미",
  //       roastingPoint: "라이트 미디엄",
  //       variety: "에티오피아 토착종",
  //       salesStatus: 0,
  //     },
  //     {
  //       productId: 2,
  //       partnerId: 2,
  //       productName: "에티오피아 예가체프 게르시",
  //       productPrice: 22000,
  //       productImageUrl:
  //         "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
  //       foodType: "원두",
  //       expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
  //       manufacturer: "프릳츠커피컴퍼니",
  //       manufacturingDate: "제조일 별도 표기",
  //       companyName: "프릳츠커피컴퍼니",
  //       fileName: "영앤 도터스1.png",
  //       fileType: "image/png",
  //       productUploadDate: 11,
  //       companyIntroduce:
  //         "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
  //       companyAddress:
  //         "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
  //       companyContact: "010-2222-2222",
  //       beanType: "블랜드",
  //       beanTag: "달콤",
  //       processing: "내추럴",
  //       country: "에티오피아",
  //       region: "예가체프",
  //       farm: "게르시 소농들",
  //       cupNote: "새콤한 산미",
  //       roastingPoint: "라이트 미디엄",
  //       variety: "에티오피아 토착종",
  //       salesStatus: 0,
  //     },
  //     {
  //       productId: 3,
  //       partnerId: 3,
  //       productName: "에티오피아 예가체프 게르시",
  //       productPrice: 33000,
  //       productImageUrl:
  //         "https://d15u18gvocrbio.cloudfront.net/91c5552acb1e27ef4eb6abc2516faec12e7e826fae0eb651a7a0824887b60b75",
  //       foodType: "원두",
  //       expirationData: "제조일로부터 1년(권장기한 제조일로부터 1달)",
  //       manufacturer: "프릳츠커피컴퍼니",
  //       manufacturingDate: "제조일 별도 표기",
  //       companyName: "프릳츠커피컴퍼니",
  //       fileName: "영앤 도터스1.png",
  //       fileType: "image/png",
  //       productUploadDate: 11,
  //       companyIntroduce:
  //         "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다",
  //       companyAddress:
  //         "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호",
  //       companyContact: "010-2222-2222",
  //       beanType: "블랜드",
  //       beanTag: "달콤",
  //       processing: "내추럴",
  //       country: "에티오피아",
  //       region: "예가체프",
  //       farm: "게르시 소농들",
  //       cupNote: "새콤한 산미",
  //       roastingPoint: "라이트 미디엄",
  //       variety: "에티오피아 토착종",
  //       salesStatus: 0,
  //     },
  //   ],
  //   last: false,
  //   totalElements: 0,
  //   totalPages: 0,
  //   size: 0,
  //   number: 0,
  // };

  // console.log(item);

  return { props: { item } };
}

export default Products;
