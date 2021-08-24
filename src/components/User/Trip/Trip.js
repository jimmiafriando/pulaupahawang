import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Trip.css'
import Images from '../../../images/PaketTrip.jpg';
import CardTripComp from '../../Card/Card';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';
import NavbarUser from '../../../components/NavbarUser/Navbar';



export default function Trip() {
  const [dataTrip, setDataTrip] = useState([]);
  
  useEffect(()=>{
    const readTrip = firebase.database().ref('Trip/');
    readTrip.on('value', (snapshot)=>{
      const trip = snapshot.val();
      const dataTrip = [];
      for (let id in trip) {
        dataTrip.push(trip[id]);
      }
      setDataTrip(dataTrip);
      console.log(dataTrip)
    });
  },[]);
  return (
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
      
        <Card>
    {dataTrip.map( (data) => {
      const newTo = { 
        pathname: "/PaketTrip", 
        param1: data
        };
      return (
        <>
          <Link to={newTo} className='line-dec'>
            <CardTripComp Title={data.name} Image={Images}/>
          </Link>
        </>
      )
    })
}
        
        
        </Card>

      </div>

    </>
  );
}

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  background-color: #BE9427;
  text-align:center;
  margin: 0px 400px;
  padding: 3px 0px;
  border-radius: 10px;
`;

const Card = styled.div`
  display:flex;
  margin: 20px 80px;
`;
