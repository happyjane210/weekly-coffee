import React from "react";
import Head from "next/head";
import Footer from "./footer";
import Top from "./top";
import Navbar from "./navbar/navbar";

//import styledcomponent from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

// const Main = styledcomponent.main`
//   min-height: calc(100vh - 80px - 76px - 22px);

// `;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>WEEKLY COFFEE</title>
        <meta name="description" content="weekly coffee home" />
        <link rel="icon" href="/favicon.ico" />
        <link
          type="text/css"
          rel="stylesheet"
          href="../styles/globals.css"
        ></link>
      </Head>
      <header>
        <Top />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main
        style={{
          minHeight: "calc(100vh - 290px)",
          minWidth: "calc(100vw - 250px)",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
