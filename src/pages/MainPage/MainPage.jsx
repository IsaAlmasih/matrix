import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom';
import { staticLinks } from '../../config/routingsLinks';

const MainPage = () => {
  return (
    <div>
      <div class="matrix-text">
        <div style={{ fontSize: "120px", fontWeight: "bold" }}>
          <Link class="text_matrix" to={staticLinks.planet}>
            Matrix
          </Link>
        </div>
      </div>
      <div class="matrix-container"></div>
    </div>
  );
}

export default MainPage