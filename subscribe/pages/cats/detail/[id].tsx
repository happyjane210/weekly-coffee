import { useRouter } from "next/router";
import React from "react";
import { NavItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/sidebar/sidebar";
import { AppDispatch, RootState } from "../../../provider";
import { ProductItem, ProductState } from "../../../provider/modules/product";
import style from "./catsdetail.module.css";

const CatDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const id = router.query.id as string;

  const product = useSelector((state: RootState) =>
    state.product.data.find((item) => item.productId === +id)
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
