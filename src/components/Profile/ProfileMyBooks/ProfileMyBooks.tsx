import { Link } from "react-router-dom";
import styles from "./ProfileMyBooks.module.scss";
export const ProfileMyBooks = () => (
  <div>
    <Link to="/mabooks" className={styles.button}>
      Мои книги
    </Link>
  </div>
);
