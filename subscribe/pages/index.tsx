import type { NextPage } from "next";
import Layout from "../components/layout";

import Image from "next/image";
import axios from "axios";

const Home: NextPage = () => {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";

  function getData() {
    axios.get(API_URL).then((res) => {});
  }

  return (
    <>
      <Layout>
        <div
          className="position-relative overflow-hidden p-md-5 m-md-3 text-center bg-light"
          style={{ height: 800 }}
        >
          <div className="col-md-5 p-lg-5 mt-5">
            <br />
            <br />
            <br />
            <h3>Whenever you need a cup of coffee.</h3>
            <h2></h2>
            <h1>WEEKLY COFFEE</h1>
            <br />
          </div>

          <h1>
            <a href="/products">Getting Start☕</a>
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
