import * as React from "react";
import "react-round-carousel/src/index.css";
import styles from "./BooksPage.module.scss";
import Clouds from "../../components/Clouds/Clouds";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import Book from "../../components/Book/Book";
import Papirus from "../../components/Papirus/Papirus";
import { Carousel, CarouselRef } from "react-round-carousel";
import { items } from "../../mocks/mainPageImagesData";
import { Link } from "react-router-dom";
import file1 from "../../assets/files/Eternal_Covenant.pdf";
import file2 from "../../assets/files/Book_Keys.pdf";
import { FileDownloadButton } from "../../components/FileDownloadButton/FileDownloadButton";
import { ProfileButton } from "../../components/Profile/ProfileButton/ProfileButton";
import { ProfileConstructor } from "../../components/Profile/ProfileConstructor/ProfileConstructor";
import { ProfileMyBooks } from "../../components/Profile/ProfileMyBooks/ProfileMyBooks";
import { ProfileEnterName } from "../../components/Profile/ProfileEnterName/ProfileEnterName";
const BooksPage = () => {
  const [bookId, setBookId] = React.useState(1);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [scaleBook, setScaleBook] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselRef = React.useMemo(
    () => (node) => {
      if (node !== null) {
        let bookId = (node.getSelectedIndex() + 1) % items.length;
        if (Math.abs(bookId) === 0) bookId = items.length;
        localStorage.setItem("bookId", bookId);
        setBookId(bookId);
      }
    },
    [],
  );

  const handleClick = () => {
    setScaleBook((prev) => !prev);
  };

  return (
    <div className={styles.page}>
      {/* <Clouds /> */}
      <Carousel ref={carouselRef} items={items} slideOnClick />;
      <Link to="/" className={styles.linkbtn}>
        <button className={styles.button}>Exit</button>
      </Link>
      {windowWidth >= 750 ? (
        <div className={styles.container}>
          <Book bookId={bookId} isScale={scaleBook} />
          <button className={styles.btnScale} onClick={handleClick}>
            Увеличить
          </button>
        </div>
      ) : (
        <Papirus bookId={bookId} />
      )}
      <div className={styles.downloadButtonWrapper}>
        {!scaleBook && (
          <>
            <FileDownloadButton fileName={"Вечный Завет"} fileSrc={file1} />
            <FileDownloadButton fileName={"Ключи"} fileSrc={file2} />
          </>
        )}

        {/* <Bookshelf /> */}
      </div>
      <div className={styles.profileWrapper}>
        {!scaleBook && (
          <>
            <ProfileButton />
            <ProfileConstructor />
            <ProfileMyBooks />
            <ProfileEnterName />
          </>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
