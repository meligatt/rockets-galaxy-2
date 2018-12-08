import './index.scss';
import React from 'react';
// console dani
// console.log(meli)
const Main = ({ children }) => {
  return (
    <main id="main" className="main" role="main">
      <div className="main__container">
        <div className="main__content">
          {children}
        </div>
      </div>
    </main>
  );
};


export default Main;
