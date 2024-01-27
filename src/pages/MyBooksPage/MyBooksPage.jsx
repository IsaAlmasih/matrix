import BooksList from "../../components/BooksList/BooksList";
import styles from "./MyBooksPage.module.scss";

const MyBooksPage = () => {
  const books = [
    {
      id: 1,
      name: "name 1",
      colorText: "light-black",
      // 1. Светло-черная
    },
    {
      id: 2,
      name: "name 2",
      colorText: "dark-purple",
      // 2. Темно-фиолетоавая
    },
    {
      id: 3,
      name: "name 3",
    },
    {
      id: 4,
      name: "name 4",
      colorText: "dull-pink",
      // Тускло-розовая
    },
    {
      id: 5,
      name: "name 5",
    },
    {
      id: 6,
      name: "name 6",
      colorText: "dark-green",
      // Красный темный
    },
    {
      id: 7,
      name: "name 7",
    },
    {
      id: 8,
      name: "name 8",
    },
    {
      id: 9,
      name: "name 9",
      colorText: "light-gray",
      // Светло-серый
    },
    {
      id: 10,
      name: "name 10",
    },
    {
      id: 11,
      name: "name 11",
    },
    {
      id: 12,
      name: "name 12",
    },
    {
      id: 13,
      name: "name 13",
      colorText: "dark-green",
      // Зеленый темный
    },
    {
      id: 14,
      name: "name 14",
    },
    {
      id: 15,
      name: "name 15",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <BooksList booksList={books}></BooksList>
    </div>
  );
};

export default MyBooksPage;
