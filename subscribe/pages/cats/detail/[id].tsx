import { useRouter } from "next/router";
import React from "react";
import { NavItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../../../components/sidebar/sidebar";
import { RootState } from "../../../provider";
import { ProductItem, ProductState } from "../../../provider/modules/product";
import { ProductsProp } from "../../products";
import style from "./catsdetail.module.css";

const CatDetail = ({ item }: ProductsProp) => {
  const router = useRouter();

  const id = router.query.id as string;

  const product = useSelector((state: RootState) =>
    state.product.data.find((item) => item.partnerId === +id)
  );
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "2rem" }}
        >
          <div className={style.product}>
            <h1>ProductDetail</h1>
          </div>
          <div className={style.order}>
            <h1>ORDER DETAIL</h1>
          </div>
        </section>
      </article>
    </>
  );
};

export default CatDetail;
