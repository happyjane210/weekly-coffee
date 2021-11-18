import router from "next/router";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import { AppDispatch, RootState } from "../../provider";
import { ProductItem } from "../../provider/modules/product";
import style from "./mypage.module.css";
import Recommend, { ProductsProp } from "../../components/recommend/recommend";
import axios from "axios";
import Image from "next/image";
import { requestFetchPagingSubscribe } from "../../middleware/module/subscribe";

const mypage = ({ item }: ProductsProp) => {
  const subsData = useSelector((state: RootState) => state.subscribe.data);
  const subscribe = useSelector((state: RootState) => state.subscribe);
  const cartData = useSelector((state: RootState) => state.cartItem.data);
  const dispatch = useDispatch<AppDispatch>();

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
  }, []);

  console.log(subsData);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          {/* mypage */}
          <div className={style.mypage}>
            <h1 className="my-4">
              <b>MY PAGE</b>
            </h1>
            <Table
              className="table-hover"
              style={{
                width: "85%",
                margin: "0 auto",
                verticalAlign: "middle",
              }}
            >
              <thead>
                <tr>
                  <th>주문일자</th>
                  <th>제품</th>
                  <th>제품정보</th>
                  <th>판매자</th>
                  <th>상품구매금액</th>
                  <th>주문처리상태</th>
                </tr>
              </thead>
              <tbody>
                {subsData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() =>
                      router.push(`/mypage/detail/${item.subscribeId}`)
                    }
                  >
                    <td>{item.subscribeDate}</td>
                    <td>
                      <img
                        src={item.subscribeDetails.map(
                          (item) => item.productImageUrl
                        )}
                        alt={item.subscribeDetails.map(
                          (item) => item.productName
                        )}
                        width={100}
                      />
                    </td>
                    <td>
                      {item.subscribeDetails.map((item) => item.productName)}
                    </td>
                    <td>
                      {item.subscribeDetails.map((item) => item.companyName)}
                    </td>
                    <td>{item.totalPayment}</td>
                    <td>{item.subscriberName}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* recommand */}
          <Recommend item={item} />
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<ProductItem[]>(`http://localhost:8080/products`);
  const item = res.data;

  console.log(item);

  return { props: { item } };
}

export default mypage;
