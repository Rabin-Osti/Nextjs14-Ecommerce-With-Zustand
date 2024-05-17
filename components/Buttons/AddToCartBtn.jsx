"use client";
import React from "react";
import { useCartStore } from "@/app/store/useCartStore";
const AddToCartBtn = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  console.log("product in add tocart btn = ", product);
  return (
    <button className="primary-btn" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
