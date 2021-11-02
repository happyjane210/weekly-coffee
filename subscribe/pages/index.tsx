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
        <div>
          <h1>this is section</h1>
          <h1>this is section</h1>
          <h1>this is section</h1>
          <h1>this is section</h1>
          <h1>this is section</h1>
          <h1>this is section</h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
