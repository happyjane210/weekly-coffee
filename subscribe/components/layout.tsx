import React from "react";
import Head from "next/head";
import Footer from "./footer";
import Top from "./top";
import Navbar from "./navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>WEEKLY COFFEE</title>
        <meta name="description" content="weekly coffee home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Top />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
