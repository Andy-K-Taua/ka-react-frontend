import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KraveApp from './components/KraveApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

axios.defaults.headers.common["Authorization"]=localStorage.getItem("jwtToken")

ReactDOM.render(
    <KraveApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
