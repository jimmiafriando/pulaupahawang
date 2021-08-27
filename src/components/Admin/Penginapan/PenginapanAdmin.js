import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import remove from '../../../images/delete.png';
import styled from 'styled-components';
import Images2 from '../../../images/Penginapan-2.svg';
import CardPenginapanComp from '../../Card/Card';
import plus from '../../../images/plus.png';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { Link } from 'react-router-dom';

export default function Penginapan() {
  const [dataPenginapan, setDataPenginapan] = useState([]);
  
  useEffect(()=>{
    const readTrip = firebase.database().ref('Penginapan/');
    readTrip.on('value', (snapshot)=>{
      const trip = snapshot.val();
      const dataPenginapan = [];
      for (let id in trip) {
        dataPenginapan.push({id,...trip[id]} );
      }
      setDataPenginapan(dataPenginapan);
      // console.log('bangsat', dataPenginapan[0].id)
    });
  },[]);

  const deleteTrip = (id) => {
    console.log('bangsat'+id)
    const tripRef = firebase.database().ref('Penginapan').child(id).remove()
    console.log('ngentot', tripRef.remove)
  };

  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          PILIHAN PAKET WISATA TRIP
        </Title>
      
        <Card>
    {dataPenginapan.map((data) => {
      const PaketTrip = { 
        pathname: "/PaketPenginapanAdmin", 
        param1: data
        };
      return (
        <div> 
            <Image onClick = {() => { deleteTrip(data.id);} } src={remove}/>
          <Link to={PaketTrip} className='line-dec'>
            <CardPenginapanComp Title={data.name} Image={Images2}/>
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
`;

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
