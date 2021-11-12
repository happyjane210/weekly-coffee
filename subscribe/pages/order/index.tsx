import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import style from "./order.module.css";
import { Card, Form, Button, Table } from "react-bootstrap";
import { useRouter } from "next/router";

const order = () => {
  const cartData = useSelector((state: RootState) => state.cartItem.data);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const nameInput = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneInput = useRef<HTMLInputElement>(null);
  const addressInput1 = useRef<HTMLInputElement>(null);
  const addressInput2 = useRef<HTMLInputElement>(null);
  const memoInput = useRef<HTMLInputElement>(null);

  const [addTotal, setAddTotal] = useState(0);

  useEffect(() => {
    // 배송비 포함하기 전 합계 금액
    let total = 0;
    cartData.map((item) => {
      total += item.productPrice; // 모든 cartItem의 가격을 더함
    });
    setAddTotal(total);
  }, []);

  // 배송비 포함한 합계 금액
  let final = addTotal + 2500;

  return (
    <>
      <section
        style={{
          width: "75vw",
          margin: "0 auto",
          paddingTop: "3rem",
        }}
        className="d-flex justify-content-between"
      >
        <div className={style.info}>
          {/* 주문정보 */}
          <h2>
            <b>배송지 정보</b>
          </h2>
          <Form style={{ padding: "1rem", marginTop: "2rem" }}>
            {/* nameInput */}
            <Form.Group className="mb-4" controlId="name">
              <Form.Label>받으시는 분</Form.Label>
              <Form.Control
                type="name"
                placeholder="이름"
                style={{ width: "200px" }}
              />
            </Form.Group>

            {/* phoneInput */}
            <Form.Group className="mb-4" controlId="phoneNumber">
              <Form.Label>휴대전화</Form.Label>
              <Form.Control
                type="phone"
                placeholder="0000"
                style={{ width: "200px", marginRight: "0.5rem" }}
              />
            </Form.Group>

            {/* addressInput */}
            <Form.Group className="mb-4" controlId="adress">
              <Form.Label>주소</Form.Label>
              <div className="d-flex mb-2"></div>
              <Form.Control
                type="adress"
                placeholder="주소"
                style={{ width: "470px", marginBottom: "0.5rem" }}
              />
              <Form.Control
                type="adress"
                placeholder="상세주소"
                style={{ width: "470px" }}
              />
            </Form.Group>

            {/*  */}
            <Form.Group>
              <Form.Label>배송 메모</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="memo"
                placeholder="배송메모"
                style={{ width: "470px" }}
              />
            </Form.Group>
          </Form>
          {/* 결제정보 */}

          <hr className="my-4" />

          <h2>
            <b>결제 정보</b>
          </h2>
          <div style={{ padding: "1rem", marginTop: "1rem" }}>
            <Table>
              <tr>
                <td>
                  <h4>
                    주문금액
                    <br />
                    배송비
                  </h4>
                </td>
                <td>
                  <h4>
                    KRW {new Intl.NumberFormat().format(addTotal)}
                    <br />
                    KRW 2,500
                  </h4>
                </td>
              </tr>
              <tfoot>
                <td>
                  <h4> 총 결제 금액</h4>
                </td>
                <td>
                  <h4>
                    <b>KRW {new Intl.NumberFormat().format(final)}</b>
                  </h4>
                </td>
              </tfoot>
            </Table>
          </div>
        </div>
        {/* 상품정보 */}
        <div className={style.product}>
          <h2 style={{ textAlign: "center" }}>
            <b>상품 정보</b>
          </h2>
          {cartData.map((item, index) => (
            <Card className={style.card}>
              <Card.Body className="d-flex">
                <div>
                  <img
                    src={item.productImageUrl}
                    alt={item.productName}
                    width="100px"
                    style={{ margin: "auto auto" }}
                  />
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <h5>
                    [{item.companyName}] {item.productName}
                  </h5>
                  <p>
                    {item.beanAmount} <br />
                    {item.groundPoint} <br />
                    {item.term} <br />
                    quantity: {item.orderQuantity}
                  </p>
                  <h6></h6>
                  <h5>
                    <b>
                      PRICE: {new Intl.NumberFormat().format(item.productPrice)}
                    </b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          ))}
          <div className="d-grid gap-2">
            <Button variant="outline-success" size="lg">
              결제하기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default order;
function final(final: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
