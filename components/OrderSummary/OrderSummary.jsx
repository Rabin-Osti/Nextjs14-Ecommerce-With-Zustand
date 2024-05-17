"use client";
import React, { useState, useEffect } from "react";
import { useCartStore } from "@/app/store/useCartStore";
import styles from "./page.module.css";
const OrderSummary = () => {
  const [cartInfo, setCartInfo] = useState({
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  });
  const { cart, totalItems, totalPrice } = useCartStore((state) => state);

  useEffect(() => {
    setCartInfo({ cart, totalItems, totalPrice });
  }, [cart, totalItems, totalPrice]);
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.cartInfo}>
        {cartInfo.cart.map((product) => (
          <div className={styles.info}>
            <span>
              {product.name} X{product.quantity}
            </span>
            <span>Rs {product.quantity * product.price}</span>
          </div>
        ))}
        <div className={styles.info}>
          <span>Total</span>
          <span className="primaryColor">Rs {cartInfo.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
