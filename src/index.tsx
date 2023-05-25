import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import App from './App';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    color: #fff;
    background-color: #c4dafa;
    margin-top: 40px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
