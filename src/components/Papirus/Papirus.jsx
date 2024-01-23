/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import papirus from "../../assets/img/papirus.jpg";
import { BOOKS_TEXT } from "../../utils";
import styles from "./Papirus.module.scss";

function Papirus({ bookId, ...props }) {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1);
  return (
    <div className={styles.container}>
      <img className={styles.papirus} src={papirus} />
      <span className={styles.text}>
        {
          BOOKS_TEXT[bookId]
            .map((page, index) => [
              <div key={`left-${index}`} className="demoPage left">
                <div
                  className={styles["text-container"]}
                  dangerouslySetInnerHTML={{ __html: page.leftPage }}
                ></div>
              </div>,
              <div key={`right-${index}`} className="demoPage right">
                <div
                  className="text-container"
                  dangerouslySetInnerHTML={{ __html: page.rightPage }}
                ></div>
              </div>,
            ])
            .flat()[currentPageIndex]
        }
      </span>
      <button
        className={styles.btn}
        onClick={() =>
          setCurrentPageIndex(
            (currentPageIndex - 1) % BOOKS_TEXT[bookId].length,
          )
        }
      >
        Переключить обратно
      </button>
      <button
        className={styles.btn}
        onClick={() =>
          setCurrentPageIndex(
            (currentPageIndex + 1) % BOOKS_TEXT[bookId].length,
          )
        }
      >
        Переключить
      </button>
    </div>
  );
}
export default Papirus;
