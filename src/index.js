import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactClickToPay from './lib/index';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactClickToPay.Provider srcDpaId='00a9ee92-7740-4f61-99d6-2ce3f98e4c8a' dpaLocale='pt-BR'><App /></ReactClickToPay.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
