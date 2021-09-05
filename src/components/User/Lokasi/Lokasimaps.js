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
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>
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