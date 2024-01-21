import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainStudyPage.module.css";

const MainStudyPage = () => {
  return (
    <>
      <div className="header-site">
        <div>
          <Link className="login" to="/profile/studying">
            Учеба
          </Link>
        </div>
        <div>
          <Link className="login" to="/profile/work">
            Работа
          </Link>
        </div>
        <div>
          <Link className="login" to="/profile/">
            Профиль
          </Link>
        </div>

        <div>
          <div>
            <Link className="login" to="/user/logout/">
              Выйти
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.linkWrapper}>
          <Link className="login" to="/votes/">
            Голосование.
          </Link>
          <Link className="login" to="/studylist/">
            Учение.
          </Link>
          <Link className="login" to="/studylist/">
            Практика.
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainStudyPage;
