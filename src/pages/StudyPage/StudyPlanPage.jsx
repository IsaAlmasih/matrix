import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./StudyPlanPage.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const langs = [
  "010000010111",
  "100100101011",
  "011010110101",
  "110010101010",
  "101111111111",
  "111111100010",
  "010010101011",
  "100100101010",
  "001000000001",
  "110010101110",
  "001010101001",
  "110000000110",
  "011010101001",
  "100110111110",
  "010101010101",
  "110010101110",
  "100000011111",
];

const Char = ({ value, x, y, speed }) => {
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPos((yPos) => {
        const newYPos = yPos > window.innerHeight ? 0 : yPos + speed;
        return newYPos;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [speed]);

  const flick = Math.random() * 100;
  const char = flick < 10 ? 0 : value;

  return (
    <span
      style={{ position: "absolute", left: x, top: yPos, color: "#0000FF" }}
    >
      {char}
    </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * text.length);
    const speed = Math.floor(Math.random() * 6) + 3;
    const charArray = [];

    for (let i = text.length - 1; i >= 0; i--) {
      charArray.push({ value: text[i], y: (y + text.length - i) * 20, speed });
    }

    setChars(charArray);
  }, [text]);

  return (
    <>
      {chars.map((char, index) => (
        <Char
          key={index}
          value={char.value}
          x={x}
          y={char.y}
          speed={char.speed}
        />
      ))}
    </>
  );
};

const MatrixRain = () => {
  const [streams, setStreams] = useState([]);
  const createStreams = () => {
    const streamArray = [];

    for (let i = 0; i < window.innerWidth; i += 20) {
      streamArray.push({
        text: langs[Math.floor(Math.random() * langs.length)],
        x: i,
      });
    }

    setStreams(streamArray);
  };
  useEffect(() => {
    createStreams();
  }, []);

  const reset = () => {
    createStreams();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {streams.map((stream, index) => (
        <Stream key={index} text={stream.text} x={stream.x} />
      ))}
    </div>
  );
};

function StudyPlanPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const studies = {
    1: "Всевышний.",
    2: "Природа.",
    3: "Культура.",
    4: "Наука.",
  };

  const studiesdesc = {
    1: [
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Семь церквей." },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Вердикты." },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Синедрион." },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Заповеди." },
      { id: 1, title: "Всевышний" },
      { id: 1, title: "Ад" },
    ],
    2: [
      { id: 1, title: "Фауна" },
      { id: 1, title: "Флора" },
      { id: 1, title: "Воздух" },
      { id: 1, title: "Растения" },
      { id: 1, title: "Планеты" },
      { id: 1, title: "Космос" },
      { id: 1, title: "Природа" },
      { id: 1, title: "Природа" },
      { id: 1, title: "Природа" },
      { id: 1, title: "Природа" },
      { id: 1, title: "Природа" },
      { id: 1, title: "Природа" },
    ],
    3: [
      { id: 1, title: "Математика." },
      { id: 2, title: "Физика" },
      { id: 3, title: "Химия" },
      { id: 4, title: "Библия" },
      { id: 5, title: "Культуралогия" },
      { id: 6, title: "Физкультура" },
      { id: 7, title: "Обществознание" },
      { id: 8, title: "Культура" },
      { id: 9, title: "Флора" },
      { id: 10, title: "Культура" },
      { id: 11, title: "Фауна" },
      { id: 12, title: "Культура" },
    ],
    4: [
      { id: 1, title: "Программирование" },
      { id: 1, title: "Заводы." },
      { id: 1, title: "Колхозы" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Искусственный интеллект" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
      { id: 1, title: "Наука" },
    ],
  };

  return (
    <>
      <button onClick={() => navigate(-1)} className={styles.button}>
          {"<--"}Назад
      </button>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{studies[id]}</h1>
        <div className={styles.wrapperList}>
          {studiesdesc[id].map((item) => (
            <Link to={`/themepage/${item.id}`}>{item.title}</Link>
          ))}
        </div>
      </div>
    <MatrixRain></MatrixRain></>
  );
}

export default StudyPlanPage;
