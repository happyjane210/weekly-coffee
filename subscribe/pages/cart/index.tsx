import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { Table, Form, Button } from "react-bootstrap";
import style from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import router, { useRouter } from "next/router";
import {
  CartItem,
  clearCart,
  removeOne,
} from "../../provider/modules/cartItem";
import Recommend, { ProductsProp } from "../../components/recommend/recommend";
import axios from "axios";
import { ProductItem } from "../../provider/modules/product";

const cart = ({ item }: ProductsProp) => {
  const cartData = useSelector((state: RootState) => state.cartItem.data);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const checkInput = useRef<HTMLInputElement>(null);

  const [addTotal, setAddTotal] = useState(0);
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");

  const selectAll = () => {};
  const deleteAll = () => {};
  const deleteOne = (id: number) => {
    dispatch(removeOne(id));
  };

  // 장바구니에 들어있는 총액 더해서 보여줌
  useEffect(() => {
    let total = 0;
    cartData.map((item) => {
      total += item.sum;
    });
    setAddTotal(total);

    let convertAmt = 0;
    let convertTrm = 0;
    cartData.map((option) => {
      convertAmt = option.beanAmount;
      console.log(convertAmt);

      if (convertAmt === 1) {
        setAmount("200g");
      } else if (convertAmt === 2) {
        setAmount("400g");
      } else if (convertAmt === 3) {
        setAmount("600g");
      }

      convertTrm = option.term;
      console.log(convertTrm);

      if (convertTrm === 4) {
        setTerm("1개월 - 4회");
      } else if (convertTrm === 8) {
        setTerm("2개월 - 8회");
      } else if (convertTrm === 12) {
        setTerm("3개월 - 12회");
      }
    });
  }, [cartData]);

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
                  <th>SELECT</th>
                  <th>ITEM</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>OPTION</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {/* 장바구니 비어있을때 비어있습니다 구현하기 */}
                {cartData.length === 0 && (
                  <tr>
                    <td colSpan={7}>
                      <h4 className="my-5">🛒This cart is empty😥</h4>
                    </td>
                  </tr>
                )}
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
                      <b>{new Intl.NumberFormat().format(cartitem.sum)}</b>
                    </td>
                    <td>{cartitem.orderQuantity}</td>
                    <td>
                      {amount} <br />
                      {cartitem.groundPoint} <br />
                      {term}
                    </td>
                    <td className={style.icon}>
                      <i
                        className="bi bi-x-lg"
                        onClick={() => {
                          deleteOne(cartitem.seq);
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
                          //deleteAll();
                          dispatch(clearCart());
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

export default cart;
