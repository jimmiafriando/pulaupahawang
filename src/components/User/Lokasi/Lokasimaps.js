import React from 'react';
import './Lokasi.css';
import styled from 'styled-components';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import NavbarUser from '../../../components/NavbarUser/Navbar';
import "leaflet/dist/leaflet.css"

export default function Lokasi() {
  return(
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Cover>
          {/* <img src={lokasi} alt="lokasi" /> */}
          <MapContainer center={[-5.6764277,105.2197723]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <Marker position={[-5.6764277,105.2197723]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>
                  Lokasi penjemputan <br /> Pulau Pahawang.
                </Popup>
              </Marker>
          </MapContainer>
        </Cover>

        <Title>
        Pulau Pahawang Kabupaten Pesawaran Lampung
        </Title>

      </div>
    </>
  )
}


const Cover = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`; 

const Title = styled.p`
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
  // padding: 20px 0px;
  // margin: 0px 380px; 

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