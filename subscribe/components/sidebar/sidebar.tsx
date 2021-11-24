import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/products">
        <a>Colombia</a>
      </Link>
      <Link href="/products">
        <a>Ethiopia</a>
      </Link>
      <Link href="/products">
        <a>Guatemala</a>
      </Link>
      <Link href="/cats">
        <a>El Salvador</a>
      </Link>
    </nav>
  );
}
