import React from 'react';
import './App.css';
import {Routers} from './config/index.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className='page-container-user' >
      <div className='content-warp'>
      <Routers/>
      </div>
        <Footer />
    </div>
  );
}

export default App;

