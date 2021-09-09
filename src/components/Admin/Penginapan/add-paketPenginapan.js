import React, { useState } from 'react';
import firebase, { storage } from '../../../config/firebase';
import styled from 'styled-components';
import remove from '../../../images/Remove.svg';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CurrencyFormat from 'react-currency-format';
// import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    textAlign: 'center', 
  },
}));

export default function PaketPenginapanAdmin() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
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

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const savePenginapan = () => {
    const promises = [];
    
    images.forEach((image) => {
      // const id = uuid();
      const uploadTask = storage.ref(`imagesPenginapan/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("imagesPenginapan")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));


    const createRef = firebase.database().ref('Penginapan/');
    const create = {
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
      note
    };
    setName('')
    setCaption('Caption...')
    setPeserta1('')
    setPeserta2('')
    setPeserta3('')
    setPeserta4('')
    setHarga1('')
    setHarga2('')
    setHarga3('')
    setHarga4('')
    setFasilitas('text...')
    setNote('text...')

    createRef.push(create);
  };

  const deleteImage = (id) => {
    const uploadTask = storage.ref(`imagesPenginapan/`).child(id);
    uploadTask.delete().then(function() {
      // File deleted successfully
    }).catch(function(error) {
      // Uh-oh, an error occurred!
    });
  };

  console.log("images: ", images);
  console.log("urls", urls);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                Masukan Foto Penginapan
              </div>
              <Progress>
                <progress value={progress} max="100" />
              </Progress>
              <div>
                <ButtonImg type="file" multiple onChange={handleChange} />
              </div>

          <Cover>
            <div>
                  {urls.map((url, i) => (
                <img
                    key={i}
                    style={{ width: "350px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase"
                    />
                    ))}
                  {urls.map((id) => (
                <img key={id} className='main-image' onClick={() => deleteImage(id)} src={remove} alt="refresh"/>
                ))}
            </div>
          </Cover>
          </Border>

          <form>
            <Textarea value={caption} onChange={e => setCaption(e.target.value)}>Caption...</Textarea>
          </form>

          <Content>
            <div>
              <Header>
                PAKET PENGINAPAN
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
                  <Peserta value={peserta1} onChange={e => setPeserta1(e.target.value)} type="number"  placeholder="2"/>
                  <CurrencyFormat className='harga' value={harga1} onChange={e => setHarga1(e.target.value)} displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'} />
                </div>
                <div>
                  <Peserta value={peserta2} onChange={e => setPeserta2(e.target.value)} type="number"  placeholder="2"/>
                  <CurrencyFormat className='harga' value={harga2} onChange={e => setHarga2(e.target.value)} displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'} />
                </div>
                <div>
                  <Peserta value={peserta3} onChange={e => setPeserta3(e.target.value)} type="number"  placeholder="2"/>
                  <CurrencyFormat className='harga' value={harga3} onChange={e => setHarga3(e.target.value)} displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'} />
                </div>
                <div>
                  <Peserta value={peserta4} onChange={e => setPeserta4(e.target.value)} type="number"  placeholder="2"/>
                  <CurrencyFormat className='harga' value={harga4} onChange={e => setHarga4(e.target.value)} displayType='number' placeholder="Rp.500.000" thousandSeparator={true} prefix={'Rp'} />
                </div>
              </Boxpaket>
            </div>

            <Content2>
            <div>
              <Header>
                FASILITAS
              </Header>
              <form>
                <Textarea2 value={fasilitas} onChange={e => setFasilitas(e.target.value)} >Text...</Textarea2>
              </form>
            </div>
          
          <div>
            <Header>
              NOTE :
            </Header>
            <form>
                <Textarea3 value={note} onChange={e => setNote(e.target.value)} >Text...</Textarea3>
            </form>
          </div>
          </Content2>
          </Content>

          </Border>
            <Button onClick={() => { savePenginapan(); handleOpen();}}>
              UPLOAD
            </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Add Penginapan Berhasil!!</h2>
                <br/>
                <p id="transition-modal-description">Semoga makin banyak pengunjungnya</p>
              </div>
            </Fade>
          </Modal>
      </div>
      </>
  )
}


// const ImgUp = styled.div`
// display: flex;
// margin: 20px 0px;
// `;

const Progress = styled.div`
// background: blue;
margin-left: 50px;
`;
const Header = styled.div`
color: white;
font-size: 20px;
font-weight: bold;
margin-left: 20%;
margin-top: 10px;
`;

// const ImgUp = styled.div`
// display: flex;
// margin: 20px 0px;
// `;

// const Progress = styled.div`
// // background: blue;
// margin-left: 50px;
// `;

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 10px 100px;
width:100%

// tab-land // tablet landscape (900px - 1200px)
@media (min-width:901px) and (max-width:1200px) {
  margin: 0px 0px;

}
// tab-port // tablet portrait
@media (min-width:601px) and (max-width:900px) {
  margin: 0px 0px;
  border: none;
}
// phone
@media (min-width:0px) and (max-width:600px) {
  border: none;
  margin: 0px 0px;
}
`;

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
//   border: 2px solid black;
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
//   -webkit-appearance: none; 
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
    margin: 0px 150px;
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
    width: 250px;
    margin: 5px 100px;
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