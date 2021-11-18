import Image from "next/image";
import router from "next/router";
import React from "react";
import { ProductItem } from "../../provider/modules/product";
import style from "./recommend.module.css";

export interface ProductsProp {
  item: ProductItem[];
}

const recommend = ({ item }: ProductsProp) => {
  return (
    <div className={style.recommend}>
      <h5>
        <b>RECOMMEND</b>
      </h5>
      <div className={style.recommendWrap}>
        {item.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(`/products/detail/${item.productId}`);
            }}
          >
            <Image
              loader={() => item.productImageUrl}
              alt={item.productName}
              objectFit="cover"
              src={item.productImageUrl}
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={item.productImageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default recommend;
