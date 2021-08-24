import React from 'react';
import './Lokasi.css';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasimaps.svg';
import NavbarUser from '../../../components/NavbarUser/Navbar';

export default function Lokasi() {
  return(
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Cover>
          <img src={lokasi} alt="lokasi" />
        </Cover>

        <p className='Lokasi-maps'>
        Pulau Pahawang Kabupaten Pesawaran Lampung
        </p>

      </div>
    </>
  )
}

const Cover = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`; 