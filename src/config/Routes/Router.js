import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// user
import Lokasi from '../../components/User/Lokasi/Lokasi';
import Lokasimaps from '../../components/User/Lokasi/Lokasimaps';
import Trip from '../../components/User/Trip/Trip';
import PaketTrip from '../../components/User/Trip/Paket-Trip';
import Penginapan from '../../components/User/Penginapan/Penginapan';
import PaketPenginapan from '../../components/User/Penginapan/Paket-Penginapan';
import Pemesanan from '../../components/User/Pemesanan/Pemesanan';
import Admin from '../../components/User/Admin/Admin';
import About from '../../components/User/About/About';
// admin
import AdminLogout from '../../components/Admin/Logout';
import NewAdmin from '../../components/Admin/NewAdmin';
import LokasiAdmin from '../../components/Admin/Lokasi/LokasiAdmin';
import LokasimapsAdmin from '../../components/Admin/Lokasi/LokasiMapsAdmin';
import TripAdmin from '../../components/Admin/Trip/TripAdmin';
import AddTripAdmin from '../../components/Admin/Trip/add-paketTrip';
import AddPenginapanAdmin from '../../components/Admin/Penginapan/add-paketPenginapan';
import PaketTripAdmin from '../../components/Admin/Trip/Paket-TripAdmin';
import PenginapanAdmin from '../../components/Admin/Penginapan/PenginapanAdmin';
import PaketPenginapanAdmin from '../../components/Admin/Penginapan/Paket-PenginapanAdmin';
import PemesananAdmin from '../../components/Admin/Pemesanan/PemesananAdmin';
import AboutAdmin from '../../components/Admin/About/AboutAdmin';
import DetailPemesanan from '../../components/Admin/Pemesanan/DetailPemesanan';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

export const Routers = () => {
  const auth = useSelector(state => state.authReducer.auth)
  // useEffect(() => {
  //  console.log("AUTHHH", auth)
  // },)
  // const [isAuth, setIsAuth] = useState (false);
    return (
        <Router>
            {/* user */}
          <Switch >
            <Route path='/' exact component={About} />
            <Route path='/Lokasi' component={Lokasi} />
            <Route path='/Lokasimaps' component={Lokasimaps} />
            <Route path='/Trip' exact component={Trip} />
            <Route path='/trip/:id' component={PaketTrip} />
            <Route path='/Penginapan' exact component={Penginapan} />
            <Route path='/penginapan/:id' component={PaketPenginapan} />
            <Route path='/Pemesanan' component={Pemesanan} />
            <Route path='/Admin' component={Admin} />
          </Switch>
          {/* admin */}
          <Switch>
            <Route path='/AboutAdmin' component={AboutAdmin} isAuth={auth} />
            {/* <Route path='/AboutAdmin' component={AboutAdmin} /> */}
            <Route path='/LokasiAdmin' component={LokasiAdmin} isAuth={auth} />
            <ProtectedRoute path='/AdminLogout' component={AdminLogout} isAuth={auth} />
            <Route path='/NewAdmin' component={NewAdmin} isAuth={auth} />
            <Route path='/LokasimapsAdmin' component={LokasimapsAdmin} isAuth={auth} />
            <Route path='/TripAdmin' exact component={TripAdmin} isAuth={auth} />
            <Route path='/trip-admin/:id' component={PaketTripAdmin} isAuth={auth} />
            <Route path='/AddTripAdmin' component={AddTripAdmin} isAuth={auth} />
            <Route path='/PenginapanAdmin' exact component={PenginapanAdmin} isAuth={auth} />
            <Route path='/penginapan-admin/:id' component={PaketPenginapanAdmin} isAuth={auth} />
            <Route path='/AddPenginapanAdmin' component={AddPenginapanAdmin} isAuth={auth} />
            <Route path='/PemesananAdmin' exact component={PemesananAdmin} isAuth={auth} />
            <Route path='/pemesanan-admin/:id' component={DetailPemesanan} isAuth={auth} />
            </Switch>
          </Router>
    )
};

