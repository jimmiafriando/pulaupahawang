import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Images from '../../../images/Penginapan.svg';
import firebase from '../../../config/firebase';
import plus from '../../../images/plus.png';
import remove from '../../../images/delete.png';
import CardTripComp from '../../Card/Card';
import '../About/AboutAdmin.css'
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function PenginapanAdmin() {
  const [dataPenginapan, setDataPengipan] = useState([]);
  
  useEffect(()=>{
    const readTrip = firebase.database().ref('Penginapan');
    readTrip.on('value', (snapshot)=>{
      const penginapan = snapshot.val();
      const dataPenginapan = [];
      for (let id in penginapan) {
        dataPenginapan.push({id,...penginapan[id]} );
      }
      setDataPengipan(dataPenginapan);
    });
  },[]);

  const deletePenginapan = (id) => {
    const tripRef = firebase.database().ref('Penginapan').child(id).remove()
    console.log(tripRef.remove)
  };

  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Center>
        <Title>
          PILIHAN PAKET PENGINAPAN
        </Title>
        </Center>
      
        <Card>
    {dataPenginapan.map((data) => {
      return (
        <div> 
            <Image onClick = {() => { deletePenginapan(data.id);} } src={remove}/>
          <Link to={`/penginapan-admin/${data.id}`} className='line-dec'>
            <CardTripComp Title={data.name} Image={Images}/>
          </Link>
        </div>
      )
    })
}
          <Link to='/AddPenginapanAdmin'>
            <Addimage src={plus} alt='#'/>
          </Link>
        </Card>

      </div>

    </>
  );
}

const Image = styled.img`
  cursor: pointer;
  position: absolute;
  padding-left: 10px;
  height: 3%;
  &:hover {
    transition: all 0.3s ease-out;
    height:4%;
  }
`;

const Addimage = styled.img`
  cursor: pointer;
  position: absolute;
  padding-left: 10px;
  margin-top:10px;
  height: 170px;
  width: 180px;
  &:hover {
    transition: all 0.3s ease-out;
    height: 175px;
    width: 185px;
  }
    // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
      height: 130px;
      width: 140px;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
      height: 100px;
      width: 120px;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
      height: 80px;
      width: 90px;
    }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  background-color: #BE9427;
  text-align:center;
  padding: 3px 0px;
  border-radius: 10px;
  width: 400px;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 400px;
    font-size: 20px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 300px;
    font-size: 17px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 250px;
    font-size: 17px;
  }
`;

const Card = styled.div`
  display:flex;
  margin: 20px 80px;
`;

