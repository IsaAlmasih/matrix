import { Link } from "react-router-dom";
import styles from "./ProfileButton.module.scss";
export const ProfileButton = () => (
  <div>
    <Link to={"/personalpage"}>
      <button className={styles.button}>Войти</button>
    </Link>
  </div>
);
