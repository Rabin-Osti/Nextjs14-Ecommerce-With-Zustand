import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import DownIcon from "../Icons/DownIcon";
import SearchIcon from "../Icons/SearchIcon";
import CartIcon from "../Icons/CartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import CartInfo from "../CartInfo/CartInfo";
import NavSearch from "../NavSearch/NavSearch";

const Navbar = () => {
  return (
    <nav className={`outer ${styles.navbar}`}>
      <h1>NewAbhishek</h1>
      <div className={styles.middle}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <NavSearch />

        <Link href="/cart">
          <CartInfo />
        </Link>
        <div className="dropdownContainer">
          <ProfileIcon className={styles.icon} />
          <div className="dropdown">
            <Link href="/login">
              <span className="hoverEffect">Login</span>
            </Link>
            <Link href="/register">
              <span className="hoverEffect">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
