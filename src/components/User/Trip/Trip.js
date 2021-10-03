import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Images from '../../../images/PaketTrip.jpg';
import CardTripComp from '../../Card/Card';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';
import NavbarUser from '../../../components/NavbarUser/Navbar';
import './Trip.css'



export default function Trip() {
  const [dataTrip, setDataTrip] = useState([]);
  
  useEffect(()=>{
    const readTrip = firebase.database().ref('Trip');
    readTrip.on('value', (snapshot)=>{
      const trip = snapshot.val();
      const dataTrip = [];
      for (let id in trip) {
        dataTrip.push({id,...trip[id]} );
      }
      setDataTrip(dataTrip);
      console.log('test', dataTrip)
    });
  },[]);

  function getImageUrl(data) {
    if (!!!data.image) 
      return Images

    const imageKeys = Object.keys(data.image)
    if (Array.isArray(imageKeys) && imageKeys.length > 0)
      return data.image[imageKeys[0]]

    return Images  
  }

  return (
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Center>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
        </Center>
      
        <Card>
        {dataTrip.map((data) => {
      return (
        <div>
          <Link to={`/trip/${data.id}`} className='line-dec'>
            <CardTripComp Title={data.name} Image={getImageUrl(data)}/>
          </Link>
        </div>
      )
    })
}
        </Card>

      </div>

    </>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  background-color: #BE9427;
  text-align:center;
  padding: 3px 0px;
  border-radius: 10px;
  width: 400px;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 400px;
    font-size: 20px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 300px;
    font-size: 17px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 250px;
    font-size: 17px;
  }
`;

const Card = styled.div`
  display:flex;
  margin: 20px 80px;
`;
