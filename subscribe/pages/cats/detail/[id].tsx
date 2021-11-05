import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../../components/sidebar/sidebar";
import { RootState } from "../../../provider";
import style from "./catsdetail.module.css";

const CatDetail = () => {
  const router = useRouter();

  const id = router.query.id as string;

  const cat = useSelector((state: RootState) =>
    state.product.data.find((item) => item.id === +id)
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
            <p>{id}</p>
            <img
              src={cat && cat?.image}
              alt={cat && cat?.name}
              className={style.img}
            />
            <h1>{cat?.name}</h1>
            <hr />
            <h3>{cat?.description}</h3>
            <h3>{cat?.description}</h3>
            <h3>{cat?.description}</h3>
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
