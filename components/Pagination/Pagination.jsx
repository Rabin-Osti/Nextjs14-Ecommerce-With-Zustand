import styles from "./page.module.css";
import Link from "next/link";
import ArrowIcon from "../Icons/ArrowIcon";

const Pagination = ({ currentPage, totalPage, baseUrl }) => {
  console.log("this is baseurl = ",baseUrl);
  return (
    <div className={styles.alignCenter}>
      <Link href={currentPage === 1 ? "" : `/${baseUrl}${currentPage - 1}`}>
        <ArrowIcon
          className={styles.icon}
          disabled={currentPage === 1 ? true : false}
        />
      </Link>
      {[...Array(totalPage)].map((_ele, ind) => (
        <Link href={`/${baseUrl}${ind + 1}`}>
          <button
            className={`${styles.btn} ${
              currentPage === ind + 1 ? styles.circle : ""
            }`}
          >
            {ind + 1}
          </button>
        </Link>
      ))}
      <Link
        href={currentPage === totalPage ? "" : `/${baseUrl}${currentPage + 1}`}
      >
        <ArrowIcon
          className={`${styles.right} ${styles.icon}`}
          disabled={currentPage === totalPage ? true : false}
        />
      </Link>
    </div>
  );
};

export default Pagination;
