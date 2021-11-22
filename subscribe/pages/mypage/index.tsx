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
import { requestFetchPagingSubscribe } from "../../middleware/module/subscribe";

const mypage = ({ item }: ProductsProp) => {
  const subsData = useSelector((state: RootState) => state.subscribe.data);
  const subscribe = useSelector((state: RootState) => state.subscribe);
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
                    style={{ cursor: "pointer" }}
                  >
                    <td>{item.subscribeDate}</td>
                    <td>
                      <img
                        src={
                          item.subscribeDetails.length > 1
                            ? item.subscribeDetails[0].productImageUrl
                            : item.subscribeDetails[0].productImageUrl
                        }
                        alt={
                          item.subscribeDetails.length > 1
                            ? item.subscribeDetails[0].productName
                            : item.subscribeDetails[0].productName
                        }
                        width={100}
                      />
                    </td>
                    <td>
                      {/* 여러개 주문했을 경우 첫번째 한개만 보여준다, 
                      detail의 길이가 1보다 크면 배열의 첫번째만 보여주고,
                      그게 아니면 배열의 첫번째만 보여준다.*/}
                      {item.subscribeDetails.length > 1
                        ? item.subscribeDetails[0].productName +
                          ", 외 " +
                          (item.subscribeDetails.length - 1) +
                          "건"
                        : item.subscribeDetails[0].productName}
                    </td>
                    <td>
                      {item.subscribeDetails.length > 1
                        ? item.subscribeDetails[0].companyName
                        : item.subscribeDetails[0].companyName}
                    </td>
                    <td>{new Intl.NumberFormat().format(item.totalPayment)}</td>
                    <td>
                      {item.subscribeDetails.length > 1
                        ? item.subscribeId
                        : item.subscribeId}
                    </td>
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
  const res = await axios.get<ProductItem[]>(
    `${process.env.NEXT_PUBLIC_API_BASE}/products`
  );
  const item = res.data;

  console.log(item);

  return { props: { item } };
}

export default mypage;
