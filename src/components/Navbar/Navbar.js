import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <ul className="menu">
      <li>
        <Link to="/" className="navItem">Home</Link>
      </li>
      <li>
        <Link to="/calculator" className="navItem">Calculator</Link>
      </li>
      <li>
        <Link to="/inspiration" className="navItem">Inspiration</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
