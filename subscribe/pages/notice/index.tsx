import router from "next/router";
import React from "react";
import { Table } from "react-bootstrap";
import NoticeSidebar from "../../components/sidebar/noticeSidebar";
import style from "./notice.module.css";
import Recommend, { ProductsProp } from "../../components/recommend/recommend";
import axios from "axios";
import { ProductItem } from "../../provider/modules/product";

const notice = ({ item }: ProductsProp) => {
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <NoticeSidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          {/* notice */}
          <div className={style.notice}>
            <h1 className="my-4">
              <b>NOTICE</b>
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
                  <th>No</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {/* map 삽입 */}
                <tr onClick={() => router.push("/notice/detail/1")}>
                  <td>1</td>
                  <td>주간커피를 가장 맛있게 이용하는 방법</td>
                  <td>관리자</td>
                  <td>2021-11-10</td>
                </tr>
                <tr onClick={() => router.push("/notice/detail/2")}>
                  <td>2</td>
                  <td>원두 배송 관련 안내</td>
                  <td>관리자</td>
                  <td>2021-11-10</td>
                </tr>
                <tr onClick={() => router.push("/notice/detail/3")}>
                  <td>3</td>
                  <td>파트너즈 로스터리 소개</td>
                  <td>관리자</td>
                  <td>2021-11-10</td>
                </tr>
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

export default notice;
