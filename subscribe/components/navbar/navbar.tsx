import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import style from "./navbar.module.css";
import Top from "../top";

const navbar = () => {
  // useEffect(() => {

  // },[])
  return (
    <>
      <Navbar expand="lg" className={style.nav}>
        <Container className="w-100">
          <Navbar.Brand className="ms-3">
            <Link href="/">
              <a className={style.span}>WEEKLY COFFEE</a>
            </Link>
          </Navbar.Brand>
          <div className="d-flex justify-content-end me-3">
            <Nav className="me-auto">
              <Nav.Item className="me-3">
                {/* next/link 안에 a태그를 주어서 스타일 먹인다 */}
                {/* 변환된 태그 <a class="text-light" href="/">HOME</> */}
                <Link href="/products">
                  <a className={style.a}>PRODUCT</a>
                </Link>
              </Nav.Item>

              <Nav.Item className="me-3">
                <Link href="/notice">
                  <a className={style.a}>NOTICE</a>
                </Link>
              </Nav.Item>

              <Nav.Item className="me-3">
                <Link href="/cart">
                  <a className={style.a}>CART</a>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/mypage">
                  <a className={style.a}>MYPAGE</a>
                </Link>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
