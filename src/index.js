import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './config/firebase';

console.log('test-firebase ==> ',firebase);

ReactDOM.render(<App/>, document.getElementById('root'));
