import React from 'react';
import './Lokasi.css';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasi.svg';
import { Link } from 'react-router-dom';
import NavbarUser from '../../../components/NavbarUser/Navbar';


export default function Lokasi() {
  return(
    <>
      <NavbarUser/>
      <div className='Background-user'>
        <Cover>
          <img src={lokasi} alt="lokasi" />
          </Cover>

          <Link to='/Lokasimaps'>
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
          <a href="https://www.google.com/maps/place/Pahawang+Lampung/@-5.6764277,105.2197723,14z/data=!4m5!3m4!1s0x2e41254c9ea15fff:0xf8ac19b08a31f54a!8m2!3d-5.6752009!4d105.226013" target="_blank" rel="noreferrer">
          Pahawang Island, Pardasuka, Pringsewu Regency, Lampung 35453
          </a>
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
  border: 1px solid;
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