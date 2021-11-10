import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { Table, Form, Button } from "react-bootstrap";
import style from "./cart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../provider";
import product, { ProductItem } from "../../provider/modules/product";
import router from "next/router";

const cart = () => {
  const cart = useSelector((state: RootState) => state.product.data);

  const deleteAll = () => {
    return null;
  };

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "3rem" }}
        >
          {/* cart */}
          <div className={style.cart}>
            <h1 className="my-4">
              <b>SHOPPING CART</b>
            </h1>
            <Table className={style.table}>
              <thead>
                <tr>
                  <th>
                    <Form>
                      <Form.Check type={"checkbox"} />
                    </Form>
                  </th>
                  <th>ITEM</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: ProductItem, index: number) => (
                  <tr key={index}>
                    <td>
                      <Form>
                        <Form.Check type={"checkbox"} />
                      </Form>
                    </td>
                    <td>
                      <img src={item.image} alt={item.name} width="100px" />
                    </td>
                    <td>
                      [{item.name}] {item.description}
                    </td>
                    <td>
                      <b>{item.price}</b>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="quantity"
                        placeholder="1"
                        id="quantity"
                        min="1"
                        style={{
                          padding: "0.4rem",
                          fontSize: "18px",
                          textAlign: "center",
                          maxWidth: "100px",
                        }}
                      />
                    </td>
                    <td>
                      <i className="bi bi-x-lg"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        deleteAll();
                      }}
                    >
                      전체삭제
                    </Button>
                  </td>
                  <td>
                    <b>Order Total</b>
                  </td>
                  <td>
                    <b>KRW 00,000</b>
                  </td>
                  <td colSpan={2}>
                    <Button
                      variant="outline-secondary"
                      className="me-2"
                      onClick={() => {
                        router.push("/order");
                      }}
                    >
                      선택 상품 주문
                    </Button>
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        router.push("/order");
                      }}
                    >
                      전체 상품 주문
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
          {/* recommand */}
          <div className={style.recommand}>
            <h5>
              <b>RECOMMAND</b>
            </h5>
            <div className={style.recommandWrap}>
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

export default cart;
