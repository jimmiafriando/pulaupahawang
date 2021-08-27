import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Images from '../../../images/Trip.svg';
import firebase from '../../../config/firebase';
import plus from '../../../images/plus.png';
import remove from '../../../images/delete.png';
import CardTripComp from '../../Card/Card';
import '../About/AboutAdmin.css'
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function TripAdmin() {
  const [dataTrip, setDataTrip] = useState([]);
  
  useEffect(()=>{
    const readTrip = firebase.database().ref('Trip/');
    readTrip.on('value', (snapshot)=>{
      const trip = snapshot.val();
      const dataTrip = [];
      for (let id in trip) {
        dataTrip.push({id,...trip[id]} );
      }
      setDataTrip(dataTrip);
      // console.log('bangsat', dataTrip[0].id)
    });
  },[]);

  const deleteTrip = (id) => {
    console.log('bangsat'+id)
    const tripRef = firebase.database().ref('Trip').child(id).remove()
    console.log('ngentot', tripRef.remove)
  };

  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
      
        <Card>
    {dataTrip.map((data) => {
      const PaketTrip = { 
        pathname: "/PaketTripAdmin", 
        param1: data
        };
      return (
        <div> 
            <Image onClick = {() => { deleteTrip(data.id);} } src={remove}/>
          <Link to={PaketTrip} className='line-dec'>
            <CardTripComp Title={data.name} Image={Images}/>
          </Link>
        </div>
      )
    })
}
          <Link to='/AddTripAdmin'>
            <Addimage src={plus} alt='#'/>
          </Link>
        </Card>

      </div>

    </>
  );
}

const Image = styled.img`
  cursor: pointer;
  position: absolute;
  padding-left: 10px;
  height: 3%;
  &:hover {
    transition: all 0.3s ease-out;
    height:4%;
  }
`;

const Addimage = styled.img`
  cursor: pointer;
  position: absolute;
  padding-left: 10px;
  margin-top:10px;
  height: 170px;
  width: 180px;
  &:hover {
    transition: all 0.3s ease-out;
    height: 175px;
    width: 185px;
  }
`;

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

