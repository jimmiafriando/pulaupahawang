import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Images from '../../../images/Penginapan.svg';
import CardPenginapanComp from '../../Card/Card';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';
import NavbarUser from '../../../components/NavbarUser/Navbar';


export default function Penginapan() {
  const [dataPenginapan, setDataPenginapan] = useState([]);
  
  useEffect(()=>{
    const readPenginapan = firebase.database().ref('Penginapan/');
    readPenginapan.on('value', (snapshot)=>{
      const Penginapan = snapshot.val();
      const dataPenginapan = [];
      for (let id in Penginapan) {
        dataPenginapan.push(Penginapan[id]);
      }
      setDataPenginapan(dataPenginapan);
      console.log(dataPenginapan)
    });
  },[]);
  return (
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Title>
          PILIHAN PAKET WISATA PENGINAPAN
        </Title>
      
        <Card>
        {dataPenginapan.map( (data) => {
      const penginapan = { 
        pathname: "/PaketTrip", 
        param1: data
        };
      return (
        <>
          <Link to={penginapan} className='line-dec'>
            <CardPenginapanComp Title={data.name} Image={Images}/>
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

    // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
      width: 400px;
      font-size: 20px;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
      width: 300px;
      font-size: 17px;
      margin: 0px 100px;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
      width: 250px;
      font-size: 17px;
      margin: 0px 150px;
    }
`;

const Card = styled.div`
  display:flex;
  margin: 20px 80px;
`;
