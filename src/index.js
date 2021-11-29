import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './components/Header.jsx';
import Cookies from 'universal-cookie';

let cookies = new Cookies()
if(!cookies.get('username')){
    // window.location.href="./";
  }
ReactDOM.render(
  <React.StrictMode>
    {cookies.get('username')? '' :  <Head />}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
