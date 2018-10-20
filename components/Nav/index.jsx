import './index.scss';
import React from 'react';
// console dani
// console.log(meli)
const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <a className="main-nav__logo" href="/">
          Rockets of the galaxy
        </a>
        <ul className="main-nav__menu">
          <li className="main-nav__item">
            link 1
          </li>
          <li className="main-nav__item">
            link 2
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
