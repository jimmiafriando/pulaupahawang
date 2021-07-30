import React from 'react';
import './Lokasi.css';
import lokasi from '../../images/Lokasi.svg';
import { Link } from 'react-router-dom';

export default function Lokasi() {
  return(
    <>
      <div className='Lokasi'>
        <div className='Cover-lokasi'>
          <img src={lokasi} alt="lokasi" />
        </div>

        <li>
          <Link to='/Lokasimaps'>
            <button>
              VIEW
            </button>
          </Link>
        </li>

        <div className='Title'>
          Lokasi Pulau Pahawang
        </div>

        <p className='Artikel'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris.
        </p>

        <div className='Maps'>
          <div className='main-title'>
            Maps
          </div>
          <div>
          BLABALBLBALBABBDABB
          NAPNDPANDPADNA
          MAL;D;AM;DAMD;AMD
          </div>
        </div>

      </div>
    </>
  )
}
