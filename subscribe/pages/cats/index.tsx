import router from "next/router";
import React, { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import { requestFatchAllProduct } from "../../middleware/module/product";
import { AppDispatch, RootState } from "../../provider";
import product, { ProductItem } from "../../provider/modules/product";

const Cats = () => {
  // useseletor로 product state 전체를 가져옴
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector((state: RootState) => state.product.data);

  useEffect(() => {
    dispatch(requestFatchAllProduct());
  }, [dispatch]);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>CATS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {cats &&
              cats.map((item, index) => (
                <Card
                  key={index}
                  style={{
                    width: "calc((100% - 3rem) / 4)",
                    marginLeft: index % 4 === 0 ? "0" : "1rem",
                    marginTop: index > 3 ? "1rem" : "0",
                  }}
                  onClick={() => {
                    // id값을 물고 이동해야함
                    router.push(`/cats/detail/${item.productId}`);
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.productImageUrl}
                    alt={item.productName}
                    width="150px"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {item.companyName}
                    </Card.Title>
                    <Card.Body>
                      <h2 className="text-center">
                        <b>{item.productName}</b>
                      </h2>
                      <h4 className="text-center">{item.productPrice}</h4>
                    </Card.Body>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default Cats;
