import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './containers/App';

const theme = {
  dark: 'gray',
  medium: 'orange',
  light: 'pink',
  gutter: '.5rem',
  borderSmall: '5px solid rgba(255, 255, 255, .5)',
  defaultBackground: 'rgba(255, 255, 255, .1)',
  primaryFont: "'Righteous', cursive;",
}
ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'));
