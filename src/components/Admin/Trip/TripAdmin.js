import React from 'react';
import styled from 'styled-components';
import Images from '../../../images/Trip.svg';
import Images2 from '../../../images/Trip-2.svg';
import plus from '../../../images/plus.png';
import CardTripComp from '../../Card/Card';
import '../About/AboutAdmin.css'
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function TripAdmin() {
  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
      
        <Card>
          <Link to='/PaketTripAdmin' className='line-dec'>
            <CardTripComp Title="Pulau Pahawang" Image={Images}/>
          </Link>
          
          <Link to='/PaketTripAdmin' className='line-dec'>
            <CardTripComp Title="Pahawang Kecil" Image={Images2}/>
          </Link>

          <Link to='/PaketTripAdmin' className='line-dec'>
            <CardTripComp Title="Pasir Timbul" Image={Images2}/>
          </Link>

          <Link to='/PaketTripAdmin'>
            <img src={plus} alt='#'/>
          </Link>

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
