import React from 'react';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasi.svg';
import { Link } from 'react-router-dom';


export default function Lokasi() {
  return(
    <>
      <div className='Background-admin'>
        <Cover>
          <img src={lokasi} alt="lokasi" />
          </Cover>

          <Link to='/LokasimapsAdmin'>
            <Button>
              VIEW
            </Button>
          </Link>

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
          <Title>
            Maps
          </Title>
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

const Cover = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`; 

const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Button = styled.button`
  margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 40px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border:  1px solid;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 30px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;