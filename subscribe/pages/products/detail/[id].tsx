import router, { useRouter } from "next/router";
import React from "react";
import { DefaultRootState, useSelector } from "react-redux";
import Products from "../index";
import Sidebar from "../../../components/sidebar/sidebar";

const ProductDetail = () => {
  const router = useRouter();

  const id = router.query.id as string;
  console.log(id);

  // let productItem = useSelector((state: RootState) =>
  // state.item.data.find((item) => item.id === id)
  // )

  return (
    <>
      <article className="d-flex">
        <Sidebar />
        <section>
          <h1>ProductDetail</h1>
          <p>{id}</p>
        </section>
      </article>
    </>
  );
};

export default ProductDetail;
