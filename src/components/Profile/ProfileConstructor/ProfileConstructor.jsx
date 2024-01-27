import styles from "./ProfileConstructor.module.scss";
import { Link } from "react-router-dom";
export const ProfileConstructor = () => (
  <div>
    <Link to="/constuctor" className={styles.button}>
      <button className={styles.button}>В конструктор</button>
    </Link>
  </div>
);
