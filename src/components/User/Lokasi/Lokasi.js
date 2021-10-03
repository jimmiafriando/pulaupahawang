import React, { useState, useEffect } from 'react';
import './Lokasi.css';
import styled from 'styled-components';
import lokasi from '../../../images/Lokasi.svg';
import { Link } from 'react-router-dom';
import NavbarUser from '../../../components/NavbarUser/Navbar';
import firebase from '../../../config/firebase';


export default function Lokasi() {
  const [LokasiList, setLokasiList] = useState();

  useEffect(()=>{
  const readLokasi = firebase.database().ref('lokasi/');
    readLokasi.on('value', (snapshot)=>{
      const Lokasi = snapshot.val();
      const LokasiList = [];
      for (let id in Lokasi) {
        LokasiList.push(Lokasi[id]);
      }
      setLokasiList(LokasiList);
      console.log('Lokasi', LokasiList)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return(
    <>
      <NavbarUser/>
      {LokasiList ? LokasiList.map((data) => 
      <div className='Background-user'>
        <Cover>
          <Coverimg src={lokasi} alt="lokasi" />
          </Cover>

          <Link to='/Lokasimaps'>
            <Button>
              VIEW
            </Button>
          </Link>

        <Title2>
          {data.name}
          {/* Lokasi Pulau Pahawang */}
        </Title2>

        <Artikel>
          {data.caption}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. */}
        </Artikel>

        <Maps>
          <Title>
            Maps
          </Title>
          <a className="nav-links" href="https://www.google.com/maps/search/dramaga+4+ketapang/@-5.5888814,105.2281065,17.27z" target="_blank" rel="noreferrer">
          Pahawang Island, Pardasuka, Pringsewu Regency, Lampung 35453
          </a>
        </Maps>
 
      </div>
          ): ''}
    </>
  )
}

const Cover = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`; 

const Maps = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 30px;
  margin: 0px 200px;
  margin-top: 20px;
  padding: 10px 0px;
  text-align: center;

  // phone
  @media (min-width:0px) and (max-width:600px) {
  margin: 0px 50px;
  width: 300px;
  }
`; 

const Coverimg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 70%;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 65%;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 50%;
  }
`;

const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 25px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 20px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 20px;
  }
`;

const Title2 = styled.div`
  padding-left: 50px;
  color: white;
  font-size: 50px;
  font-weight: bold;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 40px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 30px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 25px;
  }
`;

const Artikel= styled.p`
  padding: 0px 40px;
  padding-top: 10px;
  color: white;
  font-size: 20px;
  text-align: justify;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 15px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 15px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 15px;
  }
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