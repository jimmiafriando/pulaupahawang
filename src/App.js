import React from 'react';
import './App.css';
import {Routers} from './config/index.js';
import Footer from './components/Footer';
import store from './config/redux/store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className='page-container-user' >
      <div className='content-warp'>
      <Routers/>
      </div>
        <Footer />
    </div>
    </Provider>
  );
}

export default App;

