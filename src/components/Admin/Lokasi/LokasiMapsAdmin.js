import React from 'react';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasimaps.svg';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';


export default function Lokasi() {
  return(
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
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