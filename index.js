import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './containers/App';

const theme = {
  dark: 'gray',
  medium: 'orange',
  light: 'pink'
}
ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'));
