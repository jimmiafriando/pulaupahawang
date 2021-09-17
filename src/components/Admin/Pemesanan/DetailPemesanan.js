import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { v4 as uuid } from 'uuid';

export default function DetailPemesanan({match}) {
  const [dataList, setDataList] = useState({})
  const [updatePembayaran] = useState([]);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [nameAdmin, setNameAdmin] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
};

  const update = async () => {
    const id = uuid();
    const storageRef = firebase.storage().ref('bukti-pembayaran').child(id);
    await storageRef.put(file);
    const downloadUrl = await storageRef.getDownloadURL(); 
    const newState = [...imageUrl, { id, url: downloadUrl }];
    setImageUrl(newState);

    const batchId = match.params.id;
    const updateRef = firebase.database().ref('pemesanan').child(batchId);
    const update = {
      nameAdmin,
      image: {
        [id] : downloadUrl
      }
    };
    console.log(update)
    updateRef.update(update);
  };

  useEffect(() => {
    const id = match.params.id;
    console.log(id);
    const readTrip = firebase.database().ref('pemesanan').child(id);
    readTrip.on('value', snapshot=>{
      const dataList = snapshot.val();
      setDataList(dataList);
      console.log('pembayaran', dataList);
    })

    const imageRef = firebase.database().ref('pemesanan').child(id);
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
    setNameAdmin(dataList.nameAdmin)
  }, [dataList])
  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          DETAIL
        </Title>
        <Border>
      <Form>
        <Formdata>
        <Dataleft>  
          <Data>
            {dataList.name}
          </Data>
          <Data>
            {dataList.number}
          </Data>
          <div>
            <Label>Tujuan :</Label>
            <Select>
                {dataList.wisata}
            </Select>
          </div>
          <div>
            <Select>
              {dataList.penginapan}
            </Select>
          </div>
          <div> 
          <Label>Dewasa :</Label>
          <Data>
            {dataList.dewasa}
          </Data>
          </div>
        </Dataleft>  
        </Formdata>

        <Formdata2>
        <Dataright>
            <Data>
              {dataList.email}
            </Data>
          <div>
            <Label>Tanggal Keberangkatan :</Label>
            <Data>
              {dataList.tanggal}
            </Data>
          </div>
          <div>
            <Label>Waktu Liburan</Label>
            <Data>
              {dataList.waktu}
            </Data>
          </div>
          <div>
          <Label>Anak-anak (2th-5th) :</Label>
          <Data>
            {dataList.anak}
          </Data>
          </div>
        </Dataright>
        </Formdata2>
      </Form>
    <form>
        <Textarea>
            {dataList.catatan}
        </Textarea>
    </form>
      </Border>
      
    <Border>
    <div className='Title-3'>
      Masukan Foto Bukti Pembayaran
    </div>
    <div>
      <Input value={nameAdmin} onChange={e => setNameAdmin(e.target.value)} type="text" id="#" name="#" placeholder="Nama Admin"/>
    </div>
    <div>
      <ButtonImg type="file" onChange={handleChange} />
    </div>
    <div>
    {imageUrl ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <Image src={url} alt="" />
              </div>
            );
          })
        : ''}
    </div>

    <Link>
      <Button onClick={() => { update(updatePembayaran)}}>
        Accept
      </Button>
    </Link>
    <Link to='/PemesananAdmin'>
      <Button2>
        Reject
      </Button2>
    </Link>
    </Border>
      </div>
    </>
  )
}

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

const Button = styled.button`
  margin-top: 10px;
  margin-left: 15%;
  left: 15%;
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
    background-color: #60C564;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

const Button2 = styled.button`
margin-top:10px;
margin-left: 1%;
left: 15%;
padding: 10px 30px;
border-radius: 20px;
background: red;
outline: none;
border: 1px solid;
cursor: pointer;
color: white;
font-weight: bold;
&:hover {
  padding: 10px 30px;
  transition: all 0.3s ease-out;
  background-color: #F26A6A;
  color: white;
  border-radius: 20px;
  border: 1px solid var(--white);
  transition: all 0.3s ease-out;
}
`;

const Textarea = styled.div`
  margin: 20px 10%;
  width: 80%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  background: white;
`;

const Title = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
  text-align:center;
  margin: 20px 400px;
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
    width: 250px;
    font-size: 17px;
    margin: 0px 100px;
  }
`;

const Form = styled.div`
  margin: 0px 40px;
  display: flex;
  justify-content: center;
  `;
  
const Formdata = styled.div`
  // background:red;
  width: 50%;
`;

const Formdata2 = styled.div`
  // background:blue;
  width: 50%;
`;

const Dataleft = styled.div`
  margin-left:10%;
`;

const Dataright = styled.div`
  margin-left:10%;
`;

const Data = styled.div`
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0px;
  width: 90%;

  // tab-land // tablet landscape (900px - 1200px)
@media (min-width:901px) and (max-width:1200px) {
  width: 90%;
}
// tab-port // tablet portrait
@media (min-width:601px) and (max-width:900px) {
  width: 90%;
}
// phone
@media (min-width:0px) and (max-width:600px) {
  width: 110%;
}
`;

const Label = styled.p`
  margin-top: 5px;
  color: white;
  font-size: 15px;
  text-align: justify;
`;

const Select = styled.div`
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top:10px;
  margin-bottom: 8px;
  width: 30%;

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
  width: 60%;
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

const Image = styled.img`
margin: 0px 50px;
width: 200px;
height: 300px;
object-fit: cover;
border-radius: 20px;

// tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 150px;
    height: 250px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 100px;
    height: 200px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 100px;
    height: 150px;
  }
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 50px;
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