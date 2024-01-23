import { Link } from "react-router-dom";
import styles from "./BookItem.module.scss";
import clsx from "clsx";
export const BookItem = ({ id, name, colorText }) => {
  return (
    <Link to={`/book/${id}`} className={styles.wrapper}>
      <div className={clsx(styles.book, colorText && styles[colorText])}>
        {name}
      </div>
    </Link>
  );
};
