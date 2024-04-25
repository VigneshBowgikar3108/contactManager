// components/Navbar.js

import React from 'react';
import './Component1.css'
const Component1 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu justify-content-end">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/destinations">Destinations</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Component1;
