import React from 'react';
import styled from 'styled-components';
import './Trip.css'
import Images from '../../../images/Trip.svg';
import Images2 from '../../../images/Trip-2.svg';
import CardTripComp from '../../Card/Card';
import { Link } from 'react-router-dom';

export default function Trip() {
  return (
    <>
      <div className='Background-user'>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
      
        <Card>
          <Link to='/PaketTrip' className='line-dec'>
            <CardTripComp Title="Pulau Pahawang" Image={Images}/>
          </Link>
          
          <Link to='/PaketTrip' className='line-dec'>
            <CardTripComp Title="Pahawang Kecil" Image={Images2}/>
          </Link>

          <Link to='/PaketTrip' className='line-dec'>
            <CardTripComp Title="Pasir Timbul" Image={Images2}/>
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
