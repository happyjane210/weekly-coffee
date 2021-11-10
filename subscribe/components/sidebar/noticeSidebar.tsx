import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function noticeSidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/notice">
        <a>NOTICE</a>
      </Link>
    </nav>
  );
}
