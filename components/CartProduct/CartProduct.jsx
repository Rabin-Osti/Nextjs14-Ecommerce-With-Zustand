"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import { useCartStore } from "@/app/store/useCartStore";

const CartProducts = () => {
  const [cartInfo, setCartInfo] = useState({
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  });
  const { cart, totalItems, totalPrice, removeFromCart, handleInc, handleDec } =
    useCartStore((state) => state);

  useEffect(() => {
    setCartInfo({ cart, totalItems, totalPrice });
  }, [cart, totalItems, totalPrice]);
  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        {cartInfo.cart.map((product) => (
          <div className={styles.productWrapper} key={product._id}>
            <Image src={product.image} alt="" width={150} height={150} />
            <div className={styles.product}>
              <h2>{product.name}</h2>
              <div className={styles.quantityWrapper}>
                <span>Quantity</span>
                <div className={styles.quantity}>
                  <MinusIcon
                    className={styles.icon}
                    onClick={() => handleDec(product)}
                  />
                  <span>{product.quantity}</span>
                  <PlusIcon
                    className={styles.icon}
                    onClick={() => handleInc(product)}
                  />
                </div>
              </div>
              <span className="primaryColor">Rs {product.price}</span>
              <span onClick={() => removeFromCart(product)} className={styles.remove}>Remove</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <h3>Cart Total</h3>
        <div className={styles.cartInfo}>
          <div className={styles.info}>
            <span>Subtotal</span>
            <span>Rs {cartInfo.totalPrice}</span>
          </div>
          <div className={styles.info}>
            <span>No Delivery</span>
            <span>Rs 0</span>
          </div>
          <div className={styles.info}>
            <span>Total</span>
            <span className="primaryColor">Rs {cartInfo.totalPrice}</span>
          </div>
        </div>
        <button className="primary-btn" style={{width:"100%"}}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartProducts;
