"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import SearchIcon from "../Icons/SearchIcon";

const NavSearch = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SearchIcon
        className="navSearch"
        onClick={() => setShow((prev) => !prev)}
      />
      {show && <SearchComponent setShow={setShow} />}
    </>
  );
};

export default NavSearch;
