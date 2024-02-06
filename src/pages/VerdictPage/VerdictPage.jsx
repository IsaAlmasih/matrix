import React, {useEffect, useState} from 'react'
import style from './VerdictPage.module.css'
import {Link, useParams, useSearchParams} from "react-router-dom";
import {staticLinks} from "../../config/routingsLinks";

const langs = [
  '010000010111', '100100101011', '011010110101', '110010101010', '101111111111', '111111100010',
  '010010101011', '100100101010', '001000000001', '110010101110', '001010101001', '110000000110',
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
      <div style={{  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        {streams.map((stream, index) => (
            <Stream key={index} text={stream.text} x={stream.x} />
        ))}
      </div>
  );
};

const verdictData = {
  1:
    'Первая книга. Вердикт один.\n' +
    'Убийству нет прощения. Противящийся злу, дополняет зло.\n' +
    'Убийство во имя защиты, правды, отечества, есть нарушение.\n' +
    'Убийство во Имя Моё, есть нарушение. Прощения за это нет и не будет.\n' +
    'Простил убийство, стал убийцей.\n' +
    'Самоубийство - тоже убийство.\n' +
    'Пособничество в убийстве, убийство.\n' +
    'Отправил убивать, стал убийцей.\n' +
    'На земле нет того, кто простит убийство!',
  2:
    "Вторая книга. Вердикт два.\n" +
    "Разводящиеся без вины прелюбодеяния.\n" +
    "Разведённые, без вины прелюбодеяния в ад.\n" +
    "Обручающиеся с разведёнными по вине прелюбодеяния, запрещено!.\n" +
    "Рукоблудники, всяк извращённый, извращенец и сменивший пол, горите там же где и убийцы.\n" +
    "Священники освобождаются от прощений всяких грехов.",
  3:
    "Третья книга. Вердикт три.\n" +
    "Нанесение рисунков под кожу (Татуировки или ещё, какое название выдумаете), запрещено.\n" +
    "Пьющие спиртное, хоть самую малость, запрещено.\n" +
    "Курящие, употребляющие всякое дурманящее, матершинники, сквернословящие, пререкающиеся, спорящие,.\n" +
    "туда-же, где и разведённые по вине прелюбодеяния.",
  4:
    "Четвёртая книга. Вердикт четыре.\n" +
    "Колдуны. Чародеи. Гадалки. Астрологи. Маги.\n" +
    "Духовызыватели, все в гиену огненную к отцу своему.",
  5:
    "Пятая книга. Вердикт пять.\n" +
    "Фараоны. Цари. Князья. Прочие главенствующие. Президенты. Главы земель (Страны).",
  6:
    "Шестая книга. Вердикт шесть.\n" +
    "Лжепророки. Иконы, ложные боги (Материальное).\n" +
    "Лжеотцы: Опекунов и кровных отцов, можно называть отцами, отец.\n" +
    "Лжеучителя: Дающие советы как жить людям.\n" +
    "Лжесвященники: Патриархи, их замы, все нарушители в длинных одеждах.\n" +
    "Раскольники: Все те, кто виновен в расколе.",
  7:
    "Седьмая книга. Вердикт семь\n" +
    "Лжерелигии: Индуиская. Мусульманская. Иудейская. Католики.\n" +
    "Православные. Старообрядцы. Всех напишите, кто \n" +
    "потакал малейшему злу.",
  8:
    'Восьмая книга. Вердикт восемь\n' +
    'В эту книгу всех Николаитов. Производители спиртного и всякого дурманящего,\n' +
    'делающих вещей для извращенцев.\n' +
    'Напишите прочих несущих злодейства.\n' +
    'По словам разбойника, банкиры, заводы, отравляющие природу, землю и детей Моих. Всех в эту книгу',
  9:	
    'Книга девять. Вердикт девять.\n' +
    'Мясоеды, людоеды. Убийцы флоры и фауны.',
  10:	
    'Книга десять. Вердикт десять.\n' +
    'Друзья разбойника. Жители города. Праведники.\n' +
    'Сто сорок четыре тысячи девственников мужского пола, тех, кто согласились идти за Мной.\n' +
    'Запечатлённые. Помилованные.',
};

const VerdictPage = () => {

  const {id} = useParams()

  return (
    <>
      <div className={style.wrapper}>{verdictData[id]}</div>
      <MatrixRain></MatrixRain>
      <div className={style.buttons}>
        <Link to={staticLinks.planet}>Назад</Link>
        <Link to={staticLinks.mainbookpage}>Книги</Link>
      </div>
    </>
  );
}

export default VerdictPage