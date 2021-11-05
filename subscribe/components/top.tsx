import React from "react";
import Link from "next/link";

export default function Top() {
  return (
    <>
      <Link href="/">
        <a>
          <div className="d-flex justify-content-center my-3">
            <img src="/image/logo.png" alt="logo" style={{ width: 200 }} />
          </div>
        </a>
      </Link>
    </>
  );
}
