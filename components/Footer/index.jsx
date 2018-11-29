import './index.scss';
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  grid-column: 3 / -3;
  grid-row: 5 / 7;
  padding: ${props => props.theme.gutter};
  background-color: ${props => props.theme.defaultBackground};
  border: ${props => props.theme.borderSmall};
`

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <div className="footer__container">
        <div className="footer__author">
          <span>NASA Space Apps hackathon 2018</span>
        </div>
        <ul className="footer__link-list">
          <li className="footer__list-item">
            <a href="https://2018.spaceappschallenge.org/challenges/can-you-build/when-next-rocket-launch/teams/wangalen/stream" rel='noopener noreferrer' target="_blank">Team Wangalen</a>
          </li>
          <li className="footer__list-item">
            <a href="https://twitter.com/danigattoni_" rel='noopener noreferrer' target="_blank"> Daniela G.</a>
          </li>
          <li className="footer__list-item">
            <a href="https://twitter.com/meligatt" rel='noopener noreferrer' target="_blank">Melissa G.</a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
