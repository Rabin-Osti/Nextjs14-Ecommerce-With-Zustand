"use client";
import React, { useEffect, useState } from "react";

import styles from "./page.module.css";
import CartIcon from "../Icons/CartIcon";
import { useCartStore } from "@/app/store/useCartStore";

const CartInfo = () => {
  const [total, setTotal] = useState(0);
  const totalItems = useCartStore((state) => state.totalItems);
  useEffect(() => {
    console.log("infinite");
    setTotal(totalItems);
  }, [totalItems]);

  return (
    <div className={styles.cart}>
      <CartIcon className={styles.icon} />
      <span className={styles.cartInfo}>{total}</span>
    </div>
  );
};

export default CartInfo;
