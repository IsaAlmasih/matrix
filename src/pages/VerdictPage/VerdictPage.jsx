import React, {useEffect, useState} from 'react'
import style from './VerdictPage.module.css'
import {Link, useParams, useSearchParams} from "react-router-dom";
import {staticLinks} from "../../config/routingsLinks";

const langs = [
  '0101', '10010', '0011', '11010', '101', 'dfgdgfqt ',
  '0101', '10010', '0011', '11010', 'dfgfddf', '1110',
  '0101', '10010', '00gdfgdfgfdh11', '11010', '101',
  'hdfhdfhfdh',
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
      <span  style={{ position: 'absolute', left: x, top: yPos, color: '#0D16C4' }}>
            {char}
        </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * text.length);
    const speed = Math.floor(Math.random() * 2) + 4;
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

const verdictData = {
  1: 'Первая книга. Вердикт один.\n' +
      '          Убийству нет прощения. Противящийся злу, дополняет зло.\n' +
      '          Убийство во имя защиты, правды, отечества, есть нарушение.\n' +
      '          Убийство во Имя Моё, есть нарушение. Прощения за это нет и не будет.\n' +
      '          Простил убийство, стал убийцей.\n' +
      '          Самоубийство - тоже убийство.\n' +
      '          Пособничество в убийстве, убийство.\n' +
      '          Отправил убивать, стал убийцей.\n' +
      '          На земле нет того, кто простит убийство!',
  2: '2',
  3: '3',
  4: '4'
}

const VerdictPage = () => {

  const {id} = useParams()

  return (
      <>
        <div className={style.wrapper}>{verdictData[id]}</div>
        <MatrixRain></MatrixRain>
        <div className={style.buttons}>
          <Link to={staticLinks.main}>Назад</Link>
          <Link to={"http://isav.su/"}>Книги</Link>
        </div>
      </>
  )
}

export default VerdictPage