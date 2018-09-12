import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cards">Cards</Link>
      </li>
      <li>
        <Link to="/decks">Decks</Link>
      </li>
    </ul>
);

export default NavBar;
