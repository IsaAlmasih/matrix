import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProfilePage.module.css"

export const ProfilePage = () => {
  // const { id } = useParams();
  return (
    <h2 className={styles.title}>
    <dev className={styles.wrapper}>
      <Link to={"/study/"}> В матрицу </Link>
      <>
        <Link to={"profile/work/"}>Работа.</Link>
        <Link>Услуги.</Link>
        <Link> Сеть. </Link>
        <Link> Финансы. </Link>
      </>
    </dev>
    </h2>
  );
};
