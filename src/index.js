import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Demo from './Demo';

import reportWebVitals from './reportWebVitals';//it gives performance reports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <Demo />
  </React.StrictMode>
);

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root.render(
//   <React.StrictMode>
//  <App />
//   </React.StrictMode>
// );

// const arr=[root,root1];

// ReactDOM.render(<>{arr}</>,document.getElementById("main"))






// ReactDOM.render(
//   <>
//     <App />
//     <Demo />
//   </>
  
//   , document.getElementById('root'));

  // ReactDOM.render(
  //   <>
     
  //     <Demo />
  //   </>
    
  //   , document.getElementById('root1'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
