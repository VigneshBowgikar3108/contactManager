// Footer.js

import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Travel Blog. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
