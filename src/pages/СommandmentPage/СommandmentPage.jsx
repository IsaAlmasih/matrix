import React, {useEffect, useState} from 'react'
import style from './СommandmentPage.module.css'
import {Link} from "react-router-dom";
import {staticLinks} from "../../config/routingsLinks";

const langs = [
  '010011010111', '100100101011', '011110110101', '110011101010', '101100111111', '110011100010',
  '010010101111', '100100101010', '001001100001', '110010101110', '001010101001', '110100000110',
  '011010101001', '100110111110', '010101010101', '110010101110', '100000011111',

];

const Char = ({ value, x, y, speed }) => {
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPos(yPos => {
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
      style={{ position: "absolute", left: x, top: yPos, color: "#07085A" }}
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
            <Char key={index} value={char.value} x={x} y={char.y} speed={char.speed} />
        ))}
      </>
  );
};

const MatrixRain = () => {
  const [streams, setStreams] = useState([]);
  const createStreams = () => {
    const streamArray = [];

    for (let i = 0; i < window.innerWidth; i += 20) {
      streamArray.push({ text: langs[Math.floor(Math.random() * langs.length)], x: i });
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
      <div style={{ background: 'rgba(0, 0, 0, 0.4)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        {streams.map((stream, index) => (
            <Stream key={index} text={stream.text} x={stream.x} />
        ))}
      </div>
  );
};

const СommandmentPage = () => {
  return (
    <>
      <div className={style.wrapper}>
        Я, Всевышний Иисус Христос, Бог твой, Который Привёл тебя в Дом Свой как
        Клялся отцам твоим народу Моему Израилю. Да не будет у вас иных богов
        Пред Лицом Моим
      </div>
      <div className={style.wrapper}>
        2. Заповедь новую Даю вам: любите друг друга как Я Полюбил вас.
      </div>
      <div className={style.wrapper}>
        Я, Всевышний Иисус Христос, Бог твой, Который Привёл тебя в Дом Свой как
        Клялся отцам твоим народу Моему Израилю. Да не будет у вас иных богов
        Пред Лицом Моим
      </div>
      <MatrixRain></MatrixRain>
      <div className={style.buttons}>
        <Link to={staticLinks.planet}>Назад</Link>
        <Link to={"http://isav.su/"}>Книги</Link>
      </div>
    </>
  );
}

export default СommandmentPage