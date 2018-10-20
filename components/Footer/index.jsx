import './index.scss';
import React from 'react';
// console dani
// console.log(meli)
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__author">
          <span>space apps 2018 by Team Wangalen</span>
        </div>
        <ul className="footer__link-list">
          <li className="footer__list-item">
            link 1
          </li>
          <li className="footer__list-item">
            link 2
          </li>
          <li className="footer__list-item">
            <a href="https://twitter.com/meligatt" rel='noopener noreferrer' target="_blank">Author</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
