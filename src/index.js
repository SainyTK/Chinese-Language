import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AaK39Y",
  authDomain: "chinp.com",
  databaseURL: "httpsseio.com",
  projectId: "chi4b908",
  storageBucket: "chineppspot.com",
  messagingSenderId: "129647",
  appId: "1:fafa",
  measurementId: "G-Q8"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);