import styled from 'styled-components';
import Image from '../../../images/PaketPenginapan.svg';
import Image2 from '../../../images/PaketTrip2.svg';
import Image3 from '../../../images/PaketTrip3.svg';
import PaketWisata from '../../Paket/Paket-wisata';
import Slider from 'infinite-react-carousel';
import NavbarUser from '../../../components/NavbarUser/Navbar';


export default function PaketPenginapan(props) {
  const dataPenginapan = props.location.param1
  console.log(dataPenginapan)
  return(
      <>
      <NavbarUser/>
        <div className='Background-user'>
          <Title>
            {dataPenginapan.name}
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
            {dataPenginapan.caption}
          </p>

          <Content>
            <div>
              <div className='Title-2'>
                PAKET PENGINAPAN
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
                  <PaketWisata Peserta={dataPenginapan.peserta1} Harga={dataPenginapan.harga1}/>
                  <PaketWisata Peserta={dataPenginapan.peserta2} Harga={dataPenginapan.harga2}/>
                  <PaketWisata Peserta={dataPenginapan.peserta3} Harga={dataPenginapan.harga3}/>
                  <PaketWisata Peserta={dataPenginapan.peserta4} Harga={dataPenginapan.harga4}/>
              </Boxpaket>
            </div>

            <Mainflex>
              <div className='Title-2'>
                FASILITAS
              </div>
              <p className='Artikel-2'>
                {dataPenginapan.fasilitas}
              </p>
            </Mainflex>

          <Mainflex>
            <div className='Title-2'>
              NOTE :
            </div>
            <Boxnote>
              <MainNote>
                {dataPenginapan.note}
              </MainNote>
            </Boxnote>
          </Mainflex>
          </Content>

        </div>
      </>
  )
}

const Imgslide = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  width:100%; 
  height: 70% ;
`;

const Mainflex = styled.div`
width: 40%
`;

const MainNote = styled.p`
  color: black;
  font-size: 20px;
  padding: 2px 40px;
  text-align: justify;
`;