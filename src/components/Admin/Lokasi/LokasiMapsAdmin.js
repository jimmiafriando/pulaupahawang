import React from 'react';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasimaps.svg';

export default function Lokasi() {
  return(
    <>
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