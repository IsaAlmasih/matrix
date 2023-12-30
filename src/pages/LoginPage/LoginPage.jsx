import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { staticLinks } from '../../config/routingsLinks';

const langs = [
  "010011010111",
  "100100101011",
  "011110110101",
  "110011101010",
  "101100111111",
  "110011100010",
  "010010101111",
  "100100101010",
  "001001100001",
  "110010101110",
  "001010101001",
  "110100000110",
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
      style={{ position: "absolute", left: x, top: yPos, color: "#0C1BD4" }}
    >
      {char}
    </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * text.length);
    const speed = Math.floor(Math.random() * 5) + 5;
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
        background: "rgba(0, 0, 0, 0.4)",
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

const LoginPage = () => {
  return (
    <>
      <MatrixRain></MatrixRain>
      <div className="block-login-user">
        <h3 className="text-auth">Авторизация</h3>
        <div className="block-form-login">
          <form action="" method="">
            <label htmlFor="{}" className="label-auth">
              {/* {f.label} */}
            </label>
            <br />
            <>
              <label htmlFor="textArea" className="label-auth">
                Почта
              </label>
              <br />
              <input
                type="email"
                name="username"
                id="textArea"
                className="login"
                maxLength={254}
                required=""
              />
              <p />
              <label htmlFor="textArea" className="label-auth">
                Пароль
              </label>
              <br />
              <input
                type="password"
                name="password"
                cols={40}
                rows={6}
                id="textArea"
                className="password"
                required=""
              />
              <p />
            </>
            {/* {f}
          <p>{f.errors}</p> */}
            <button className="btn-login">Войти</button>
          </form>
          <div>{/* <p>{error}</p> */}</div>
          <div className="block-with-text-reg-acc">
            <p className="text-create-acc">
              Ещё нет аккаунта?
              <br /> Создай его, нажав на ссылку ниже
            </p>
            <Link to={staticLinks.register} className="small-text">
              <small>Зарегестрировать аккаунт</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage