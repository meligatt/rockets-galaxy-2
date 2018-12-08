import './index.scss';
import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  grid-column: 1 / -1;
  grid-row: 1;
  font-family: ${props => props.theme.primaryFont};
`

const NavContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 90px;
`

const NavLogoStyled = styled.a`
  display: flex;
  font-size: 2rem;
  font-weight: normal;
  color: white;
  text-decoration: none;
  padding: ${props => props.theme.gutter};
`

const Nav = () => {
  return (
    <NavStyled>
      <NavContainerStyled>
        <NavLogoStyled>
          Rockets of the Galaxy
        </NavLogoStyled>
        {/* <ul className="main-nav__menu">
          <li className="main-nav__item">
            link 1
          </li>
          <li className="main-nav__item">
            link 2
          </li>
        </ul> */}
      </NavContainerStyled>
    </NavStyled>
  );
};

export default Nav;
