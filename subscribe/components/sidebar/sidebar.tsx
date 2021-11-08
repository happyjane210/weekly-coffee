import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>DECAF</a>
      </Link>
      <Link href="/">
        <a>SINGLE ORIGIN</a>
      </Link>
      <Link href="/">
        <a>BLEND</a>
      </Link>
      <Link href="/cats">
        <a>COLD BREW</a>
      </Link>
    </nav>
  );
}
