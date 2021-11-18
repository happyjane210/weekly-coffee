import axios from "axios";
import router from "next/router";
import React from "react";
import { Button, Table } from "react-bootstrap";
import Recommend, {
  ProductsProp,
} from "../../../components/recommend/recommend";
import Sidebar from "../../../components/sidebar/sidebar";
import { ProductItem } from "../../../provider/modules/product";
import style from "./mypagedetail.module.css";

const MypageDetail = ({ item }: ProductsProp) => {
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          <div className={style.mypage}>
            <h1>
              <b>ORDER DETAIL</b>
            </h1>
            <Table>
              <thead>
                <tr>
                  <th>주문번호</th>
                  <th>상품</th>
                  <th>상품정보</th>
                  <th>금액(수량)</th>
                  <th>배송비</th>
                  <th>판매자</th>
                  <th>진행상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Button
              variant="outline-dark"
              onClick={() => router.push("/mypage")}
            >
              목록
            </Button>
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

export default MypageDetail;
