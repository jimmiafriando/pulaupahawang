import React from 'react';
import styled from 'styled-components';
import './Trip.css';
import Image from '../../../images/PaketTrip.svg';
import Image2 from '../../../images/PaketTrip2.svg';
import Image3 from '../../../images/PaketTrip3.svg';
import PaketWisata from '../../Paket/Paket-wisata';
import Slider from 'infinite-react-carousel';

export default function PaketTrip() {
  return(
      <>
        <div className='Background-user'>
          <Title>
              Pulau Pahawang
          </Title>
              <Slider className='Slider-cover' dots>
                <div>
                  <Imgslide src={Image} alt="PaketTrip"/>
                </div>
                <div>
                  <Imgslide src={Image2} alt="PaketTrip"/>
                </div>
                <div>
                  <Imgslide src={Image3} alt="PaketTrip"/>
                </div>
              </Slider>
              
          <p className='Artikel'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.
          </p>

          <Content>
            <div>
              <div className='Title-2'>
                PAKET WISATA
              </div>
              <Boxpaket>
                <Content>
                  <Paket>
                    PESERTA
                  </Paket>
                  <Paket>
                    HARGA
                  </Paket>
                </Content>
                  <PaketWisata Peserta="2" Harga="Rp.400.000"/>
                  <PaketWisata Peserta="4" Harga="Rp.800.000"/>
                  <PaketWisata Peserta="6" Harga="Rp.1.100.000"/>
                  <PaketWisata Peserta="7" Harga="Rp.1.300.000"/>
                  <PaketWisata Peserta="8" Harga="Rp.1.500.000"/>
                  <PaketWisata Peserta="9" Harga="Rp.1.600.000"/>
              </Boxpaket>
            </div>

            <div>
              <div className='Title-2'>
                FASILITAS
              </div>
              <p className='Artikel-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </Content>

          <div>
            <div className='Title-2'>
              NOTE :
            </div>
            <Boxnote>
              <MainNote>
                1. nkasdnkkjandjkandk
              </MainNote>
              <MainNote>
                2. nkasdnkkjandjkandk
              </MainNote><MainNote>
                3. nkasdnkkjandjkandk
              </MainNote><MainNote>
                4. nkasdnkkjandjkandk
              </MainNote><MainNote>
                5. nkasdnkkjandjkandk
              </MainNote><MainNote>
                6. nkasdnkkjandjkandk
              </MainNote><MainNote>
                7. nkasdnkkjandjkandk
              </MainNote>
            </Boxnote>
          </div>

        </div>
      </>
  )
}

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

const Imgslide = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: flex;
`;

const Boxpaket = styled.div`
  Background-color: #105E8A;
  border-radius: 20px;
`;

const Paket = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px 40px;
  text-align: center;
`;

const Boxnote = styled.div`
  Background-color: white;
  border-radius: 20px;
  padding: 10px;
  margin-right: 900px; 
`;

const MainNote = styled.p`
  color: black;
  font-size: 20px;
  padding: 2px 40px;
  text-align: justify;
`;