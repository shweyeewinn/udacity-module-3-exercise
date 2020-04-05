import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/shoppinglist">Shopping List</Link>
      </li>
      <li>
        <Link to="/randomnumbergame">Random Numbers Game</Link>
      </li>
      <li>
        <Link to="/favouritemovies">Favourite Movie List</Link>
      </li>
      <li>
        <Link to="/moviecardlist">Movie Cards List</Link>
      </li>
    </ul>
  );
}

export default Header;
