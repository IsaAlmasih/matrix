import React from "react";
import { BookItem } from "../BookItem/BookItem";
import styles from "./BooksList.module.scss";
const BooksList = ({ booksList }) => {
  return (
    <div className={styles.wrapper}>
      {booksList.map((book) => (
        <BookItem
          id={book.id}
          name={book.name}
          colorText={book.colorText}
        ></BookItem>
      ))}
    </div>
  );
};

export default BooksList;
