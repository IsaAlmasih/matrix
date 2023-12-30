import React from 'react'
import { Link } from 'react-router-dom';

const StudyPage = () => {
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

      <div className="main-studying">
        <div>
          <Link className="login" to="/votes/">
            Голосование
          </Link>
        </div>
      </div>
    </>
  );
}

export default StudyPage