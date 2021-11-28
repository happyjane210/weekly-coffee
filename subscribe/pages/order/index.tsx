import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import style from "./order.module.css";
import { Card, Form, Button, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { Subscribe } from "../../provider/modules/subscribe";
import { clearCart } from "../../provider/modules/cartItem";
import { requestAddSubscribe } from "../../middleware/module/subscribe";

const Order = () => {
  const cartData = useSelector((state: RootState) => state.cartItem.data);
  const subscribeData = useSelector((state: RootState) => state.subscribe.data);
  const isAddComplete = useSelector(
    (state: RootState) => state.subscribe.isAddCompleted
  );
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const nameInput = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneInput = useRef() as MutableRefObject<HTMLInputElement>;
  const addressInput1 = useRef() as MutableRefObject<HTMLInputElement>;
  const addressInput2 = useRef() as MutableRefObject<HTMLInputElement>;
  const memoInput = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [addTotal, setAddTotal] = useState(0);
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (isAddComplete === true) {
      router.push("/mypage");
    }
  }, [isAddComplete]);

  useEffect(() => {
    // 배송비 포함하기 전 합계 금액
    let total = 0;
    cartData.map((item) => {
      total += item.sum; // 모든 cartItem의 가격을 더함
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
      // 4 8 12
      if (convertTrm === 4) {
        setTerm("1개월 - 4회");
      } else if (convertTrm === 8) {
        setTerm("2개월 - 8회");
      } else if (convertTrm === 12) {
        setTerm("3개월 - 12회");
      }
    });
  }, [cartData, setTerm, setAmount, setAddTotal]);

  // 배송비 포함한 합계 금액
  let final = addTotal + 2500;

  const handleAddSubscribe = () => {
    console.log("버튼 클릭");
    const subsItem: Subscribe = {
      partnerId: cartData[0].partnerId,
      subscribeId: subscribeData.length ? subscribeData[0].subscribeId + 1 : 1,
      subscriberId: 1,
      subscribeDate: new Date().toLocaleDateString(),
      subscriberName: nameInput.current.value,
      subscriberPhone: phoneInput.current.value,
      deliveryMemo: memoInput.current.value,
      location: addressInput1.current.value + addressInput2.current.value,
      totalPayment: final,
      subscribeDetails: [...cartData],
    };

    //details: [...cartData],

    //dispatch(addSubscribe(subsItem));

    dispatch(requestAddSubscribe(subsItem));

    console.log("--dispatch in index--");
    console.log(subsItem);
  };

  // console.log(nameInput.current.value);
  //   console.log(phoneInput.current.value);
  //   console.log(addressInput1.current.value);
  //   console.log(addressInput2.current.value);
  //   console.log(memoInput.current.value);

  //SubscribeDetail: cartData[],

  //cartData.map((item:CartItem, index:Number, array:CartItem[]) =>)

  //(value: CartItem, index: number, array: CartItem[]) => CartItemState'

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
                ref={nameInput}
              />
            </Form.Group>

            {/* phoneInput */}
            <Form.Group className="mb-4" controlId="phoneNumber">
              <Form.Label>휴대전화</Form.Label>
              <Form.Control
                type="phone"
                placeholder="0000"
                style={{ width: "200px", marginRight: "0.5rem" }}
                ref={phoneInput}
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
                ref={addressInput1}
              />
              <Form.Control
                type="adress"
                placeholder="상세주소"
                style={{ width: "470px" }}
                ref={addressInput2}
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
                ref={memoInput}
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
              <thead>
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
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h4> 총 결제 금액</h4>
                  </td>
                  <td>
                    <h4>
                      <b>KRW {new Intl.NumberFormat().format(final)}</b>
                    </h4>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        {/* 상품정보 */}
        <div className={style.product}>
          <h2 style={{ textAlign: "center" }}>
            <b>상품 정보</b>
          </h2>
          {cartData.map((item, index) => (
            <Card className={style.card} key={index}>
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
                    {amount} <br />
                    {item.groundPoint} <br />
                    {term} <br />
                    quantity: {item.orderQuantity}
                  </p>
                  <h6></h6>
                  <h5>
                    <b>PRICE: {new Intl.NumberFormat().format(item.sum)}</b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          ))}
          <div className="d-grid gap-2">
            <Button
              variant="outline-success"
              size="lg"
              onClick={() => {
                handleAddSubscribe();
                //router.push("/mypage");
                // 순차적으로 처리 안될 수도 있음
              }}
            >
              결제하기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
