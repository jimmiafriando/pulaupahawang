import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import styled from 'styled-components';
import './Trip.css';
import PaketWisata from '../../Paket/Paket-wisata';
import Slider from 'infinite-react-carousel';
import NavbarUser from '../../../components/NavbarUser/Navbar';


export default function PaketTrip({match}) {
  const [dataTrip, setDataTrip] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const batchId = match.params.id;
    console.log(batchId);
    const readTrip = firebase.database().ref('Trip').child(batchId);
    readTrip.on('value', snapshot=>{
      const dataTrip = snapshot.val();
      setDataTrip(dataTrip);
      console.log('trip', dataTrip);

      const images = [];
      const ids = !!dataTrip.image && typeof dataTrip.image === 'object' ? 
        Object.keys(dataTrip.image) : []
      ids.forEach((e) => images.push({id: e, url: dataTrip.image[e]}))
      setImageUrl(images);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return(
      <>
         <NavbarUser/>
        <div className='Background-user'>
          <Center>
          <Title>
            {dataTrip.name}
          </Title>
          </Center>
          {Array.isArray(imageUrl) && imageUrl.length > 0 ? (
            <Slider className='Slider-cover' dots>
            {imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <Imgslide src={url} alt="" />
              </div>
                );
              })
            }
          </Slider>
          ) : <div></div>}
              
          <Artikel>
            {dataTrip.caption}
          </Artikel>

          <Content>
            <div>
              <Title2>
                PAKET WISATA
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
                  <PaketWisata Peserta={dataTrip.peserta1} Harga={dataTrip.harga1}/>
                  <PaketWisata Peserta={dataTrip.peserta2} Harga={dataTrip.harga2}/>
                  <PaketWisata Peserta={dataTrip.peserta3} Harga={dataTrip.harga3}/>
                  <PaketWisata Peserta={dataTrip.peserta4} Harga={dataTrip.harga4}/>
              </Boxpaket>
            </div>

          <Content2>
            <Mainflex>
              <Title2>
                FASILITAS
              </Title2>
              <Artikel2>
                {dataTrip.fasilitas}
              </Artikel2>
            </Mainflex>

          <Mainflex>
            <Title2>
              NOTE :
            </Title2>
            <Boxnote>
              <MainNote>
                {dataTrip.note}
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
  width: 800px;
  height: 500px;
  object-fit: cover;
  border-radius: 10%; 

    // tab-land // tablet landscape (900px - 1200px)
      @media (min-width:901px) and (max-width:1200px) {
        width: 500px;
        height: 300px;
      }
      // tab-port // tablet portrait
      @media (min-width:601px) and (max-width:900px) {
        width: 400px;
        height: 200px;
      }
      // phone
      @media (min-width:0px) and (max-width:600px) {
        width: 400px;
        height: 200px;
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
    height: 70% ;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    height: 70% ;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    height: 90% ;
  }
`;

const MainNote = styled.p`
  color: black;
  font-size: 20px;
  padding: 2px 40px;
  // text-align: justify;

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