"use client";
import React from "react";
import Image from "next/image";

const error = () => {
  function handleClick() {
    window.location.href = "/";
  }
  return (
    <div className="errorWrapper">
      <div className="errorContainer">
        <Image src={"/error.png"} fill className="errorImg" />
      </div>
      <button type="button" className="primary-btn" onClick={handleClick}>
        Go Home
      </button>
    </div>
  );
};

export default error;
