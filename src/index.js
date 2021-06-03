import React from 'react';
import ReactDOM from 'react-dom';
import './My.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Main from './Main.js';

ReactDOM.render(
  <React.StrictMode>
       <Main/>
  </React.StrictMode>,
   document.getElementById('root')
);


//Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
