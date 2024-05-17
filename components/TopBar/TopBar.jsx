import React from "react";
import styles from "./page.module.css";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={`outer ${styles.inner}`}>
        <div className={styles.iconText}>
          <EmailIcon size={2} />
          <span>newabhishekbooks@gmail.com</span>
        </div>
        <div className={styles.iconText}>
          <PhoneIcon size={2} className={styles.icon} />
          <span>+977-9841746245</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
