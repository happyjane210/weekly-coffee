import router from "next/router";
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import { RootState } from "../../provider";
import { ProductItem } from "../../provider/modules/product";
import style from "./mypage.module.css";

const mypage = () => {
  const mypage = useSelector((state: RootState) => state.product.data);

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
                  <th>수량</th>
                  <th>상품구매금액</th>
                  <th>주문처리상태</th>
                </tr>
              </thead>
              <tbody>
                {mypage.map((item: ProductItem, index: number) => (
                  <tr
                    key={index}
                    onClick={() => router.push(`/mypage/detail/${item.id}}`)}
                  >
                    <td>20211S09001</td>
                    <td>
                      <img src={item.image} alt={item.name} width="50px" />
                    </td>
                    <td>
                      [{item.name}] {item.description}
                    </td>
                    <td>{item.id}</td>
                    <td>{item.price}</td>
                    <td>미접수/접수/출고</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* recommand */}
          <div className={style.recommand}>
            <h5>
              <b>RECOMMAND</b>
            </h5>
            <div className={style.recomendWrap}>
              <div>d</div>
              <div>d</div>
              <div>d</div>
              <div>d</div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default mypage;
