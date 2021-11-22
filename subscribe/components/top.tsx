import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Top() {
  return (
    <>
      <Link href="/">
        <a>
          <div className="d-flex justify-content-center my-3">
            <Image src="/image/logo.png" alt="logo" width={200} height={70} />
          </div>
        </a>
      </Link>
    </>
  );
}
