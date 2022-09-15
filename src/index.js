import React from 'react';
import ReactDOM from 'react-dom/client';

// import Header from './common/header/Header';
import './index.css';
import RouterRedirect from './router/RouterRedirect';
import Detail from './screens/details/Detail';
import Home from './screens/home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterRedirect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

