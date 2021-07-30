import React from 'react';
import './Lokasi.css';
import lokasi from '../../images/Lokasimaps.svg';

export default function Lokasi() {
  return(
    <>
      <div className='Lokasi'>
        <div className='Cover-lokasi'>
          <img src={lokasi} alt="lokasi" />
        </div>

        <p className='Lokasi-maps'>
        Pulau Pahawang Kabupaten Pesawaran Lampung
        </p>

      </div>
    </>
  )
}
