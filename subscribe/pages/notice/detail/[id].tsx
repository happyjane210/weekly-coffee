import router from "next/router";
import React from "react";
import { Button, Table } from "react-bootstrap";
import NoticeSidebar from "../../../components/sidebar/noticeSidebar";
import style from "./noticedetail.module.css";

const NoticeDetail = () => {
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <NoticeSidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          {/* notice detail */}
          <div className={style.notice}>
            <h1>
              <b>NOTICE</b>
            </h1>
            <div>
              <Table>
                <tbody>
                  {/* redux 처리 */}
                  <tr>
                    <th>제목</th>
                    <td colSpan={3}>원두 배송 관련 안내</td>
                  </tr>
                  <tr>
                    <th>작성자</th>
                    <td>주간커피 관리자</td>
                    <th>작성일</th>
                    <td>2021-11-10</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div>
                        <p>
                          빈블에서는 재고를 쌓아두고 판매하지않고, 고객님의
                          주문건이 들어오면 그날밤 거래처에 오더를 넣은 후
                          다음날에 입고가 되는 방식입니다. <br />
                          따라서 기본배송일 1~5일정도(주말,공휴일제외)
                          소요됩니다. (간혹, 재고있는 상품에 한해서는 당일출고
                          가능)
                        </p>
                        <p>
                          쌓아두고 판매하지 않기때문에 거래처 사정으로인해
                          갑작스러운 품절&지연 되는경우가 있습니다. 이러한
                          경우에는 개별적으로 연락 드리고있습니다.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className={style.buttonarea}>
                <Button
                  variant="outline-dark"
                  onClick={() => router.push("/notice")}
                >
                  목록
                </Button>
                <div>
                  <Button variant="outline-dark" className="me-2">
                    <i className="bi bi-caret-left"></i>
                  </Button>

                  <Button variant="outline-dark">
                    <i className="bi bi-caret-right"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* recommand */}
          <div className={style.recommand}>
            <h5>
              <b>RECOMMAND</b>
            </h5>
            <div className={style.recommandwrap}>
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

export default NoticeDetail;
