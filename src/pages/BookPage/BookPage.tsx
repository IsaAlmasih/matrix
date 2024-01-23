import * as React from "react";
import styles from "./BookPage.module.scss";
import Book from "../../components/Book/Book";
import { useParams } from "react-router-dom";
import * as ReactQuill from "react-quill";
import ConstructorBook from "../../components/ConstructorBook/ConstructorBook";
const BookPage = () => {
  const {id}=useParams()
  const [ value,setValue ]= React.useState("")
  console.log(id)
  return (
    <>
      {id}
      <div className={styles.bookpage}>
        <ConstructorBook text={value}></ConstructorBook>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        {value}
      </div>
    </>
  );
};

export default BookPage;
