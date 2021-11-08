import React from "react";
import NoticeSidebar from "../../components/sidebar/noticeSidebar";
import style from "./notice.module.css";

const notice = () => {
  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <NoticeSidebar />
        <section
          className="d-flex justify-content-between"
          style={{ width: "90vw", margin: "0 auto", padding: "2rem" }}
        >
          <div className={style.notice}>
            <h1>NOTICE</h1>
          </div>
          <div className={style.recommand}>
            <h2>recommand</h2>
          </div>
        </section>
      </article>
    </>
  );
};

export default notice;
