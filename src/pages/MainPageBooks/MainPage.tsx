import "react-round-carousel/src/index.css";
import Clouds from "../../components/Clouds/Clouds";
import styles from "./MainPage.module.scss";
import logo from "../../assets/img/kingdom.png";
import { Link } from "react-router-dom";
const MainPagebook = () => {
  return (
    <div className={styles.app}>
      <Clouds />
      {/* Clouds from "./Clouds/Clouds"; */}
      {/* Название класса.className */}
      <img src={logo} className={styles.Applogo} alt="logo" />
      <div className={styles.title}>כס דוד</div>
      <div className={styles.subtitle}>ממלכת ישוע המשיח.</div>
      {/* Кнопка и её стили.  */}
      <Link to="/books" className={styles.link}>
        <button className={styles.button}>كتب الأقدار</button>
      </Link>
    </div>
  );
};

export default MainPagebook;
