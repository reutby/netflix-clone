import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import { GlobalStyles } from "./global-styles";
// eslint-disable-next-line no-unused-vars
import {FirebaseContext} from "./context/firebase";
import {firebase} from "./lib/firebase.prod";
render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />

    </FirebaseContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
