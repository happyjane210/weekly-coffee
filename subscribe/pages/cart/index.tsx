import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { Table, Form, Button } from "react-bootstrap";
import style from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import router, { useRouter } from "next/router";

const cart = () => {
  const cartData = useSelector((state: RootState) => state.cartItem.data);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const checkInput = useRef<HTMLInputElement>(null);

  const [addTotal, setAddTotal] = useState(0);

  const selectAll = () => {};
  const deleteAll = () => {};
  const deleteOne = () => {};

  // 장바구니에 들어있는 총액 더해서 보여줌
  useEffect(() => {
    let total = 0;
    cartData.map((item) => {
      total += item.productPrice;
    });
    setAddTotal(total);
  }, []);

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
                      <Form.Check type={"checkbox"} ref={checkInput} />
                    </Form>
                  </th>
                  <th>ITEM</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>OPTION</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((cartitem, index) => (
                  <tr key={index}>
                    <td>
                      <Form>
                        <Form.Check
                          type={"checkbox"}
                          ref={checkInput}
                          onClick={() => {
                            selectAll();
                          }}
                        />
                      </Form>
                    </td>
                    <td>
                      <img
                        src={cartitem.productImageUrl}
                        alt={cartitem.productName}
                        width="100px"
                      />
                    </td>
                    <td>
                      [{cartitem.companyName}] {cartitem.productName}
                    </td>
                    <td>
                      <b>
                        {new Intl.NumberFormat().format(cartitem.productPrice)}
                      </b>
                    </td>
                    <td>{cartitem.orderQuantity}</td>
                    <td>
                      {cartitem.beanAmount} <br />
                      {cartitem.groundPoint} <br />
                      {cartitem.term}
                    </td>
                    <td>
                      <i
                        className="bi bi-x-lg"
                        onClick={() => {
                          deleteOne();
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <div className="d-flex">
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          deleteAll();
                        }}
                      >
                        전체삭제
                      </Button>
                    </div>
                  </td>
                  <td>
                    <b>Order Total</b>
                  </td>
                  <td>
                    <b>{new Intl.NumberFormat().format(addTotal)}</b>
                  </td>

                  <td colSpan={3}>
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="outline-dark"
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
                    </div>
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
