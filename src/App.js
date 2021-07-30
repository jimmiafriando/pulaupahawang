import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Lokasi from './components/User/Lokasi';
import Trip from './components/User/Trip';
import Pemesanan from './components/User/Pemesanan';
import Admin from './components/User/Admin';
import Penginapan from './components/User/Penginapan';
import About from './components/User/About';
import Footer from './components/Footer';
import Lokasimaps from './components/User/Lokasimaps';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/User/Services';

function App() {
  return (
    <div className='page-container'>
      <div className='content-warp'>

        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={About} />
            <Route path='/Lokasi' component={Lokasi} />
            <Route path='/Trip' component={Trip} />
            <Route path='/Penginapan' component={Penginapan} />
            <Route path='/Pemesanan' component={Pemesanan} />
            <Route path='/Admin' component={Admin} />
            <Route path='/Lokasimaps' component={Lokasimaps} />
            {/* <Route path='/services' component={Services} /> */}
          </Switch>
        </Router>

      </div>
        <Footer />
    </div>
  );
}

export default App;
