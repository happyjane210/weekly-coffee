import React from "react";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar/sidebar";

const cart = () => {
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1>CART</h1>
        </section>
      </article>
    </>
  );
};

export default cart;
