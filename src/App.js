import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// user
import Lokasi from './components/User/Lokasi/Lokasi';
import Lokasimaps from './components/User/Lokasi/Lokasimaps';
import Trip from './components/User/Trip/Trip';
import PaketTrip from './components/User/Trip/Paket-Trip';
import Penginapan from './components/User/Penginapan/Penginapan';
import PaketPenginapan from './components/User/Penginapan/Paket-Penginapan';
import Pemesanan from './components/User/Pemesanan/Pemesanan';
import Admin from './components/User/Admin/Admin';
import About from './components/User/About/About';
import Footer from './components/Footer';
// admin
import AdminLogout from './components/Admin/Logout';
import NewAdmin from './components/Admin/NewAdmin';
import LokasiAdmin from './components/Admin/Lokasi/LokasiAdmin';
import LokasimapsAdmin from './components/Admin/Lokasi/LokasiMapsAdmin';
import TripAdmin from './components/Admin/Trip/TripAdmin';
import PaketTripAdmin from './components/Admin/Trip/Paket-TripAdmin';
import PenginapanAdmin from './components/Admin/Penginapan/PenginapanAdmin';
import PaketPenginapanAdmin from './components/Admin/Penginapan/Paket-PenginapanAdmin';
import PemesananAdmin from './components/Admin/Pemesanan/PemesananAdmin';
import AboutAdmin from './components/Admin/About/AboutAdmin';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/User/Services';

function App() {
  return (
    <div className='page-container-user' >
      <div className='content-warp'>

        <Router>
          <Navbar />
            {/* user */}
          <Switch >
            <Route path='/' exact component={About} />
            <Route path='/Lokasi' component={Lokasi} />
            <Route path='/Lokasimaps' component={Lokasimaps} />
            <Route path='/Trip' component={Trip} />
            <Route path='/PaketTrip' component={PaketTrip} />
            <Route path='/Penginapan' component={Penginapan} />
            <Route path='/PaketPenginapan' component={PaketPenginapan} />
            <Route path='/Pemesanan' component={Pemesanan} />
            <Route path='/Admin' component={Admin} />
            {/* <Route path='/services' component={Services} /> */}
          </Switch>
            {/* admin */}
            <Switch className='page-container-admin'>
            <Route path='/AdminLogout' component={AdminLogout} />
            <Route path='/NewAdmin' component={NewAdmin} />
            <Route path='/LokasiAdmin' component={LokasiAdmin} />
            <Route path='/LokasimapsAdmin' component={LokasimapsAdmin} />
            <Route path='/TripAdmin' component={TripAdmin} />
            <Route path='/PaketTripAdmin' component={PaketTripAdmin} />
            <Route path='/PenginapanAdmin' component={PenginapanAdmin} />
            <Route path='/PaketPenginapanAdmin' component={PaketPenginapanAdmin} />
            <Route path='/PemesananAdmin' component={PemesananAdmin} />
            <Route path='/AboutAdmin' component={AboutAdmin} />
            </Switch>

        </Router>

      </div>
        <Footer />
    </div>
  );
}

export default App;

