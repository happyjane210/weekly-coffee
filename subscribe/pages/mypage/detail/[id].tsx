import axios from "axios";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Recommend, {
  ProductsProp,
} from "../../../components/recommend/recommend";
import Sidebar from "../../../components/sidebar/sidebar";
import { requestFetchPagingSubscribe } from "../../../middleware/module/subscribe";
import { AppDispatch, RootState } from "../../../provider";
import cartItem from "../../../provider/modules/cartItem";
import { ProductItem } from "../../../provider/modules/product";
import style from "./mypagedetail.module.css";

const MypageDetail = ({ item }: ProductsProp) => {
  const id = router.query.id as string;
  const subsData = useSelector((state: RootState) =>
    state.subscribe.data.find((item) => item.subscribeId === +id)
  );
  const subscribe = useSelector((state: RootState) => state.subscribe);
  const cartData = useSelector((state: RootState) =>
    state.cartItem.data.find((item) => item.productId === +id)
  );
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");

  //console.log(subsData && subsData?.orderNumber);

  useEffect(() => {
    if (subscribe.isFetched === false) {
      dispatch(
        requestFetchPagingSubscribe({
          subscriberId: 1,
          page: subscribe.page ? subscribe.page : 0,
          size: subscribe.pageSize ? subscribe.pageSize : 0,
        })
      );
    }

    // let convertAmt = 0;
    // let convertTrm = 0;
    // subsData?.subscribeDetails.map((option) => {
    //   convertAmt = option.beanAmount;

    //   if (convertAmt === 1) {
    //     setAmount("200g");
    //   } else if (convertAmt === 2) {
    //     setAmount("400g");
    //   } else if (convertAmt === 3) {
    //     setAmount("600g");
    //   }

    //   convertTrm = option.term;

    //   if (convertTrm === 4) {
    //     setTerm("1개월 - 4회");
    //   } else if (convertTrm === 8) {
    //     setTerm("2개월 - 8회");
    //   } else if (convertTrm === 12) {
    //     setTerm("3개월 - 12회");
    //   }
    // });
  }, []);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          <div className={style.mypage}>
            <h1 className="mb-5">
              <b>ORDER DETAIL</b>
            </h1>
            <h3 className="py-4 d-flex">
              <b>주문 상세 정보</b>
            </h3>
            <Table className={style.table}>
              <thead>
                <tr>
                  <th>주문번호</th>
                  <th>상품</th>
                  <th>상품정보</th>
                  <th>판매자</th>
                  <th>옵션</th>
                  <th>금액(수량)</th>
                  <th>진행상태</th>
                </tr>
              </thead>
              <tbody>
                {subsData &&
                  subsData.subscribeDetails.map((item, index) => (
                    <tr key={index}>
                      <td>{subsData.orderNumber}</td>
                      <td>
                        <img
                          src={item.productImageUrl}
                          alt={item.productName}
                          width={100}
                          className={style.img}
                          onClick={() => {
                            router.push(`/products/detail/${item.productId}`);
                          }}
                        />
                      </td>
                      <td>
                        <div
                          onClick={() => {
                            router.push(`/products/detail/${item.productId}`);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {item.productName}
                        </div>
                      </td>
                      <td>{item.companyName}</td>
                      <td>
                        {item.beanAmount === 1
                          ? "200g"
                          : item.beanAmount === 2
                          ? "400g"
                          : item.beanAmount === 3
                          ? "600g"
                          : ""}{" "}
                        <br />
                        {item.groundPoint}
                        <br />
                        {item.term === 4
                          ? "1개월 - 4회"
                          : item.term === 8
                          ? "2개월 - 8회"
                          : item.term === 12
                          ? "3개월 - 12회"
                          : ""}
                      </td>
                      <td>
                        {new Intl.NumberFormat().format(item.sum)}
                        <br />
                        {item.orderQuantity}개
                      </td>

                      <td>접수완료</td>
                    </tr>
                  ))}
                {/* {subscribe.data.map((item, index) => ( */}
                <tr>
                  <td colSpan={4}></td>

                  <td>
                    <b>
                      상품금액:{" "}
                      {subsData &&
                        new Intl.NumberFormat().format(subsData.totalPayment)}
                    </b>
                  </td>
                  <td>
                    <b>배송비: {new Intl.NumberFormat().format(2500)}</b>
                  </td>
                  <td>
                    <b>
                      합계: KRW{" "}
                      {subsData &&
                        new Intl.NumberFormat().format(
                          subsData.totalPayment + 2500
                        )}
                    </b>
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </Table>
            <h3 className="py-4 mt-5 d-flex">
              <b>배송지 정보</b>
            </h3>
            <Table className={style.table}>
              <thead>
                <tr>
                  <th>주문일자</th>
                  <th>수령인</th>
                  <th>주소</th>
                  <th>연락처</th>
                  <th>배송메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{subsData?.subscribeDate}</td>
                  <td>{subsData?.subscriberName}</td>
                  <td>{subsData?.location}</td>
                  <td>{subsData?.subscriberPhone}</td>
                  <td>{subsData?.deliveryMemo}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end py-4">
              <Button
                variant="outline-dark"
                onClick={() => router.push("/mypage")}
              >
                목록
              </Button>
            </div>
          </div>
          {/* recommand */}
          <Recommend item={item} />
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

  console.log(item);

  return { props: { item } };
}

export default MypageDetail;

//{subsData.map((item, index) => (
//  <tr key={index}>
//    <td>{item.orderNumber}</td>
//    <td></td>
//    <td></td>
//    <td></td>
//    <td></td>
//    <td></td>
//    <td></td>
//  </tr>
//))}
