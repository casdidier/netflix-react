import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles'; // styled component Global style

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>
  ,
  document.getElementById('root')
);
