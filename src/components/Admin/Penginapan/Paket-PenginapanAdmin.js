import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import styled from 'styled-components';
import remove from '../../../images/delete.png';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import CurrencyFormat from 'react-currency-format';
import { v4 as uuid } from 'uuid';

export default function PaketTripAdmin({match}) {
  // eslint-disable-next-line no-unused-vars
  const [_, setImages] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [caption, setCaption] = useState('Caption...');
  const [peserta1, setPeserta1] = useState('');
  const [peserta2, setPeserta2] = useState('');
  const [peserta3, setPeserta3] = useState('');
  const [peserta4, setPeserta4] = useState('');
  const [harga1, setHarga1] = useState('');
  const [harga2, setHarga2] = useState('');
  const [harga3, setHarga3] = useState('');
  const [harga4, setHarga4] = useState('');
  const [fasilitas, setFasilitas] = useState('text...');
  const [note, setNote] = useState('text...');
  const [dataPenginapan, setDataPengipan] = useState({})
  const [updatePenginapan] = useState([]);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
};

  const update = async () => {
    const id = uuid();
    const storageRef = firebase.storage().ref('imagesPenginapan').child(id);
    await storageRef.put(file);
    const downloadUrl = await storageRef.getDownloadURL(); 
    const newState = [...imageUrl, { id, url: downloadUrl }];
    setImageUrl(newState);

    const batchId = match.params.id;
    const updateRef = firebase.database().ref('Penginapan').child(batchId);
    const update = {
      name,
      caption,
      peserta1,
      peserta2,
      peserta3,
      peserta4,
      harga1,
      harga2,
      harga3,
      harga4,
      fasilitas,
      note,
      image: {
        [id] : downloadUrl
      }
    };
    console.log(update)
    updateRef.set(update);
  };

  useEffect(() => {
    const id = match.params.id;
    console.log(id);
    const readTrip = firebase.database().ref('Penginapan').child(id);
    readTrip.on('value', snapshot=>{
      const dataPenginapan = snapshot.val();
      setDataPengipan(dataPenginapan);
      console.log('penginapan', dataPenginapan);
    })

    const imageRef = firebase.database().ref('Penginapan').child(id);
    imageRef.on('value', (snapshot) => {
      const val = snapshot.val()
      const images = [];
      const ids = !!val.image ? Object.keys(val.image) : []
      ids.forEach((e) => images.push({id: e, url: val.image[e]}))
      setImageUrl(images);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setName(dataPenginapan.name)
    setCaption(dataPenginapan.caption)
    setPeserta1(dataPenginapan.peserta1)
    setPeserta2(dataPenginapan.peserta2)
    setPeserta3(dataPenginapan.peserta3)
    setPeserta4(dataPenginapan.peserta4)
    setHarga1(dataPenginapan.harga1)
    setHarga2(dataPenginapan.harga2)
    setHarga3(dataPenginapan.harga3)
    setHarga4(dataPenginapan.harga4)
    setFasilitas(dataPenginapan.fasilitas)
    setNote(dataPenginapan.note)
  }, [dataPenginapan])

  const deleteImage = (id) => {
    const batchId = match.params.id;
    const storageRef = firebase.storage().ref('imagesPenginapan').child(id);
    const imageRef = firebase.database().ref(`Penginapan/${batchId}/image`).child(id);
    storageRef.delete().then(() => {
      imageRef.remove();  
    });
  };

  return(
      <>
      <NavbarAdmin/>
        <div className='Background-admin'>
          <Title>
              Penginapan
          </Title>
        <Border>
        <MainInput>
          <Input value={name} onChange={e => setName(e.target.value)} type="text" id="#" name="#" placeholder="Nama Penginapan"/>
        </MainInput>
          <Border>
              <div className='Title-3'>
                Masukan Foto Wisata
              </div>
              <div>
                <ButtonImg type="file" onChange={handleChange}/>
              </div>
          <Cover>
            <div>
            {imageUrl ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <Imgdelete src={remove} onClick={() => deleteImage(id)} alt=""/>
                <Image src={url} alt="" />
              </div>
            );
          })
        : ''}
            </div>
          </Cover>
            </Border>

          <form>
            <Textarea value={caption} onChange={e => setCaption(e.target.value)} maxLength='900'>Caption...</Textarea>
          </form>

          <Content>
            <div>
              <Header>
                PAKET WISATA
              </Header>
              <Boxpaket>
                <Content3>
                  <Paket>
                    PESERTA
                  </Paket>
                  <Paket>
                    HARGA
                  </Paket>
                </Content3>
                <div>
                  <Peserta value={peserta1} onChange={e => setPeserta1(e.target.value)} placeholder="2" maxLength='1'/>
                  <CurrencyFormat className='harga' value={harga1} onChange={e => setHarga1(e.target.value)} displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'}/>
                </div>
                <div>
                  <Peserta value={peserta2} onChange={e => setPeserta2(e.target.value)} placeholder="2" maxLength='1'/>
                  <CurrencyFormat className='harga' value={harga2} onChange={e => setHarga2(e.target.value)}  displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'}/>
                </div>
                <div>
                  <Peserta value={peserta3} onChange={e => setPeserta3(e.target.value)} placeholder="2" maxLength='1'/>
                  <CurrencyFormat className='harga' value={harga3} onChange={e => setHarga3(e.target.value)}  displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'}/>
                </div>
                <div>
                  <Peserta value={peserta4} onChange={e => setPeserta4(e.target.value)} type="number"  placeholder="2" maxLength='1'/>
                  <CurrencyFormat className='harga' value={harga4} onChange={e => setHarga4(e.target.value)}  displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'}/>
                </div>
              </Boxpaket>
            </div>
            
            <Content2>
            <div>
              <Header>
                FASILITAS :
              </Header>
              <form>
                <Textarea2 value={fasilitas} onChange={e => setFasilitas(e.target.value)} maxLength='345' >Text...</Textarea2>
              </form>
            </div>
            
            <div>
            <Header>
              NOTE :
            </Header>
            <form>
                <Textarea3 value={note} onChange={e => setNote(e.target.value)} maxLength='220' >Text...</Textarea3>
            </form>
            </div>
            </Content2>
          </Content>
          </Border>

          <div>
            <Button onClick={() => { update(updatePenginapan)}}>
              UPDATE
            </Button>
          </div>
        </div>
      </>
  )
}

const Imgdelete = styled.img`
cursor: pointer;
position: absolute;
padding-left: 10px;
height: 3%;
&:hover {
  transition: all 0.3s ease-out;
  height:4%;
}
`;

const Image = styled.img`
margin: 0px 10px;
width: 250px;
height: 200px;
object-fit: cover;
border-radius:40px;

// tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 200px;
    height: 130px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 150px;
    height: 100px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 120px;
    height: 80px;
  }
`;

const Header = styled.div`
color: white;
font-size: 20px;
font-weight: bold;
margin-left: 20%;
margin-top: 10px;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 20px;
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

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 10px 100px;

// tab-land // tablet landscape (900px - 1200px)
@media (min-width:901px) and (max-width:1200px) {
  width: 100%;
  margin: 0px 0px;

}
// tab-port // tablet portrait
@media (min-width:601px) and (max-width:900px) {
  width: 100%;
  margin: 0px 0px;
  border: none;
}
// phone
@media (min-width:0px) and (max-width:600px) {
  width: 100%;
  border: none;
  margin: 0px 0px;
}
`;

// const Progress = styled.div`
// // background: blue;
// margin-left: 50px;
// `;

const Peserta = styled.input`
border: 2px solid black;
border-radius: 10px;
padding: 5px 10px;
margin: 5px 20px;
width: 30%;
outline: none;
&:focus{
  border: 2px solid #6C63FF;
}
&::-webkit-inner-spin-button,
-webkit-outer-spin-button{
  -webkit-appearance: none; 
margin: 0;
}
`;

// const Harga = styled.input`
// border: 2px solid black;
//   border-radius: 10px;
//   padding: 5px 10px;
//   margin: 5px 20px;
//   width: 30%;
//   outline: none;
//   &:focus{
//     border: 2px solid #6C63FF;
//   }
//   &::-webkit-inner-spin-button,
//   -webkit-outer-spin-button{
//     -webkit-appearance: none; 
//   margin: 0;
//   }
// `;

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
    width: 300px;
    font-size: 17px;
    margin: 0px 250px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 150px;
    font-size: 17px;
    margin: 0px 100px;
  }
`;

const Cover = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  // background: red;
`; 

const Content = styled.div`
  display: flex;
  
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
  margin-left: 20%;
  Background-color: #105E8A;
  border-radius: 20px;

    // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
      width: 50%;
      margin-left: 10%;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
      width: 60%;
      margin-left: 10%;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
      width: 80%;
      margin-left: 10%;
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


const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0px;
  width: 30%;
  outline: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
  &::-webkit-inner-spin-button,
  -webkit-outer-spin-button{
    -webkit-appearance: none; 
  margin: 0;
  }
`;

const MainInput = styled.div`
  margin-left: 10%;
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  margin: 10px 10%;
  width: 80%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
`;

const Textarea2 = styled.textarea`
  margin: 5px 5%;
  width: 300px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 300px;
    margin: 5px 70px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    margin: 5px 10px;
    width: 250px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    margin: 5px 0px;
    width: 200px;
  }
`;

const Textarea3 = styled.textarea`
  margin: 5px 5%;
  width: 300px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 300px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 300px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 150px;
  }
`;

const Button = styled.button`
  position: relative;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border:  1px solid;
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

const ButtonImg = styled.input`
  margin: 10px 10px;
  margin-left: 50px;
  padding: 10px 10px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 10px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 0px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

// const ButtonImg2 = styled.button`