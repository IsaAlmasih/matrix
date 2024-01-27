import React from "react";
import styles from "./ConstructorBook.module.scss";
import bookImage from "../../assets/img/book.jpg";
const ConstructorBook = ({ text }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bookImage})` }}
      className={styles.wrapper}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ConstructorBook;
