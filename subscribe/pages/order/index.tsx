import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../provider";
import { ProductItem } from "../../provider/modules/product";
import style from "./order.module.css";
import {
  Card,
  Col,
  Form,
  Row,
  Container,
  Button,
  Table,
} from "react-bootstrap";

const order = () => {
  const order = useSelector((state: RootState) => state.product.data);

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
            <Form.Group className="mb-4" controlId="name">
              <Form.Label>받으시는 분</Form.Label>

              <Form.Control
                type="name"
                placeholder="이름"
                style={{ width: "200px" }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="phoneNumber">
              <Form.Label>휴대전화</Form.Label>
              <div className="d-flex">
                <Form.Select
                  defaultValue="선택하세요"
                  style={{ width: "150px", marginRight: "0.5rem" }}
                >
                  <option>선택하세요</option>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </Form.Select>
                <Form.Control
                  type="phone"
                  placeholder="0000"
                  style={{ width: "150px", marginRight: "0.5rem" }}
                />
                <Form.Control
                  type="phone"
                  placeholder="0000"
                  style={{ width: "150px" }}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-4" controlId="adress">
              <Form.Label>주소</Form.Label>
              <div className="d-flex mb-2">
                <Form.Control
                  type="zip"
                  placeholder="우편번호"
                  style={{ width: "150px", marginRight: "0.5rem" }}
                />
                <Button variant="outline-secondary">검색</Button>
              </div>
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
                  주문금액
                  <br />
                  배송비
                </td>
                <td>
                  KRW 100,000
                  <br />
                  KRW 2,500
                </td>
              </tr>
              <tfoot>
                <td>총 결제 금액</td>
                <td>KRW 102,500</td>
              </tfoot>
            </Table>
          </div>
        </div>
        {/* 상품정보 */}
        <div className={style.product}>
          <h2 style={{ textAlign: "center" }}>
            <b>상품 정보</b>
          </h2>
          {order.map((item: ProductItem, index: number) => (
            <Card className={style.card}>
              <Card.Body className="d-flex">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="100px"
                    style={{ margin: "auto auto" }}
                  />
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <h5>
                    [{item.name}] {item.description}
                  </h5>
                  <p>
                    option1:00000 <br />
                    option2:00000 <br />
                    option3:00000 <br />
                    quantity: 1
                  </p>
                  <h6></h6>
                  <h5>price: {item.price}</h5>
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
