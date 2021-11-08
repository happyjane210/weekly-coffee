import router from "next/router";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import { RootState } from "../../provider";
import product, { ProductItem } from "../../provider/modules/product";

const Cats = () => {
  const cats = useSelector((state: RootState) => state.product.data);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>CATS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {cats.map((item: ProductItem, index: number) => (
              <Card
                key={index}
                style={{
                  width: "calc((100% - 3rem) / 4)",
                  marginLeft: index % 4 === 0 ? "0" : "1rem",
                  marginTop: index > 3 ? "1rem" : "0",
                }}
                onClick={() => {
                  // id값을 물고 이동해야함
                  router.push(`/cats/detail/${item.id}`);
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  width="150px"
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Body>
                    <h2 className="text-center">
                      <b>{item.description}</b>
                    </h2>
                    <h4 className="text-center">{item.description}</h4>
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
