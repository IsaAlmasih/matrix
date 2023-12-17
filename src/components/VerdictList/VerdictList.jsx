import React from 'react'
import { staticLinks } from '../../config/routingsLinks';
import { Link } from 'react-router-dom';

const VerdictList = ({verdict}) => {
  return (
    <div className="block-zapoved">
      {verdict.map((item) => (
        <Link className="border-index" to={`${staticLinks.verdict}/${item.id}`}>
          Вердикт {item.id}
        </Link>
      ))}
    </div>
  );
}

export default VerdictList