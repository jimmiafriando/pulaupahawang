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
              
          <Artikel>
            {dataPenginapan.caption}
          </Artikel>

          <Content>
            <div>
              <Title2>
                PAKET PENGINAPAN
              </Title2>
              <Boxpaket>
                <Content3>
                  <Paket>
                    PESERTA
                  </Paket>
                  <Paket>
                    HARGA
                  </Paket>
                </Content3>
                  <PaketWisata Peserta={dataPenginapan.peserta1} Harga={dataPenginapan.harga1}/>
                  <PaketWisata Peserta={dataPenginapan.peserta2} Harga={dataPenginapan.harga2}/>
                  <PaketWisata Peserta={dataPenginapan.peserta3} Harga={dataPenginapan.harga3}/>
                  <PaketWisata Peserta={dataPenginapan.peserta4} Harga={dataPenginapan.harga4}/>
              </Boxpaket>
            </div>

            <Content2>
            <Mainflex>
              <div className='Title-2'>
                FASILITAS
              </div>
              <Artikel2>
                {dataPenginapan.fasilitas}
              </Artikel2>
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
          </Content2>

          </Content>

        </div>
      </>
  )
}

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

const Artikel2= styled.p`
  padding: 0px 40px;
  padding-top: 10px;
  color: black;
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

const Mainflex = styled.div`
width: 50%
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

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 400px;
    font-size: 20px;
    margin: 0px 300px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 50%;
    font-size: 17px;
    margin: 0px 150px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 50%;
    font-size: 17px;
    margin: 0px 80px;
  }
`;

const Title2 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  color: black;
  font-size: 25px;
  font-weight: bold;

    // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
      font-size: 20px;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
      font-size: 20px;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
      font-size: 15px;
    }
`;

const Imgslide = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border-radius: 10%; 

    // tab-land // tablet landscape (900px - 1200px)
      @media (min-width:901px) and (max-width:1200px) {
        width: 50%;
      }
      // tab-port // tablet portrait
      @media (min-width:601px) and (max-width:900px) {
        width: 60%;
      }
      // phone
      @media (min-width:0px) and (max-width:600px) {
        width: 60%;
      }
`;

const Content = styled.div`
  display: flex;
  margin: 0px 150px;
  
  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    display: contents;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    display: contents;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    display: contents;
  } 
`;

const Content2 = styled.div`
  display: flex;
  
  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    display: flex;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    display: flex;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    display: flex;
  } 
`;

const Content3 = styled.div`
  display: flex;
`;

const Boxpaket = styled.div`
  Background-color: #105E8A;
  border-radius: 20px;

  // tab-land // tablet landscape (900px - 1200px)
      @media (min-width:901px) and (max-width:1200px) {
        width: 40%;
      }
      // tab-port // tablet portrait
      @media (min-width:601px) and (max-width:900px) {
        width: 50%;
      }
      // phone
      @media (min-width:0px) and (max-width:600px) {
        width: 70%;
      }
`;

const Paket = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px 40px;
  text-align: center;

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
        font-size: 10px;

      }
`;

const Boxnote = styled.div`
  Background-color: white;
  border-radius: 20px;
  padding: 10px;
  width: 100%; 
  
  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    height: 50% ;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    height: 50% ;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    height: 50% ;
  }
`;

const MainNote = styled.p`
  color: black;
  font-size: 20px;
  padding: 2px 40px;
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