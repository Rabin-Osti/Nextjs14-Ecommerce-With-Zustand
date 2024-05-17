"use client";
import React, { useEffect, useRef, useCallback } from "react";
import styles from "./page.module.css";
import TrendingIcon from "../Icons/TrendingIcon";
import { useRouter } from "next/navigation";

const SearchComponent = ({ setShow }) => {
  const containerRef = useRef(null);
  const searchRef = useRef(null);
  const router = useRouter();

  const sampleData = [
    {
      id: 1,
      title: "The Intelligent Investor",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
    },
    {
      id: 3,
      title: "A4 colorful paper",
    },
    {
      id: 4,
      title: "Cricket Bat",
    },
    {
      id: 5,
      title: "Vedanta Math 5",
    },
    {
      id: 6,
      title: "BLE set book",
    },
  ];
  useEffect(() => {
    searchRef.current.focus();
    setShow(true);
  }, []);

  const keyPress = useCallback((e) => {
    if (e.key === "Escape") {
      setShow((prev) => !prev);
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchRef.current.value) {
      const keyword = searchRef.current.value;
      setShow((prev) => !prev);

      searchRef.current.blur();
      searchRef.current.value = "";
      router.push(`/search?query=${keyword}&page=1`);
    }
  };

  const handleSearchClick = (text) => {
    setShow((prev) => !prev);

    router.push(`/search?query=${text}&page=1`);
  };
  const closeModal = (e) => {
    if (e.target === containerRef.current) {
      setShow((prev) => !prev);
    }
  };

  return (
    <div
      className={styles.searchWrapper}
      onClick={closeModal}
      ref={containerRef}
    >
      <div className={styles.searchContainer}>
        <div className={styles.top}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your search term"
              ref={searchRef}
            />
          </form>
          <div className={`hoverEffect ${styles.circle}`}>
            <span onClick={() => setShow((prev) => !prev)}>&#9587;</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.textIcon}>
            <span>Trending Searches</span>
          </div>
          {sampleData.map((ind) => (
            <div
              className={`hoverEffect ${styles.textIcon}`}
              onClick={() => handleSearchClick(ind.title)}
            >
              <span>{ind.title}</span>
              <TrendingIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
