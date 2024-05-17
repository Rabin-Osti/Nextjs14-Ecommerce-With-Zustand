import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Grid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products?.map((product) => (
        <Link href={`/product/${product._id}`} key={product._id}>
          <div className={styles.product}>
            <div className={`loading-effect ${styles.top}`}>
              <Image src={product.image} fill />
            </div>
            <div className={styles.bottom}>
              <h3>
                {product.name.length > 48
                  ? `${product.name.slice(0, 45)}...`
                  : product.name}
              </h3>
              <span>Rs {product.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
