import React from 'react';
import styled from 'styled-components';
import Images from '../../../images/Penginapan.svg';
import Images2 from '../../../images/Penginapan-2.svg';
import CardPenginapanComp from '../../Card/Card';
import { Link } from 'react-router-dom';

export default function Penginapan() {
  return (
    <>
      <div className='Background-user'>
        <Title>
          PILIHAN PAKET WISATA PENGINAPAN
        </Title>
      
        <Card>
          <Link to='/PaketPenginapan' className='line-dec'>
            <CardPenginapanComp Title="Andreas Resort" Image={Images}/>
          </Link>
          
          <Link to='/PaketPenginapan' className='line-dec'>
            <CardPenginapanComp Title="Hotel Pahawang" Image={Images2}/>
          </Link>

          <Link to='/PaketPenginapan' className='line-dec'>
            <CardPenginapanComp Title="Tenda Penginapan" Image={Images2}/>
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