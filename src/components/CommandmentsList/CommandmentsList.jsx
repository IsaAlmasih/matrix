import React from 'react'
import { Link } from 'react-router-dom';
import { staticLinks } from '../../config/routingsLinks';

const CommandmentsList = ({commandments}) => {
  return (
    <div className="block-zapoved">
      {commandments.map((item) => (
        <Link
          className="border-index"
          to={`${staticLinks.commandment}/${item.id}`}
        >
          Заповедь {item.id}
        </Link>
      ))}
    </div>
  );
}

export default CommandmentsList