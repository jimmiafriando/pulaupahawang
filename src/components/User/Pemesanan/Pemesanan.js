import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import firebase from '../../../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NavbarUser from '../../../components/NavbarUser/Navbar';

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


export default function Pemesanan() {
  const [noteList, setNoteList] = useState();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [wisata, setWisata] = useState('');
  const [penginapan, setPenginapan] = useState('');
  const [dewasa, setDewasa] = useState('');
  const [email, setEmail] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [anak, setAnak] = useState('');
  const [catatan, setCatatan] = useState('Catatan...');
  const [waktu, setWaktu] = useState('');

  const saveNotes = () => {
    const createRef = firebase.database().ref('pemesanan/');
    const create = {
      name,
      number,
      wisata,
      penginapan,
      dewasa,
      email,
      tanggal,
      anak,
      catatan,
      waktu
    };
    setName('')
    setNumber('')
    setWisata('')
    setPenginapan('')
    setDewasa('')
    setEmail('')
    setTanggal('')
    setAnak('')
    setCatatan('')
    setWaktu('')

    createRef.push(create);
  };

  useEffect(()=>{
    const readNote = firebase.database().ref('pemesananAdmin/');
    readNote.on('value', (snapshot)=>{
      const note = snapshot.val();
      const noteList = [];
      for (let id in note) {
        noteList.push({id,...note[id]});
      }
      setNoteList(noteList);
    });
  },[]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

return (
    <>
    <NavbarUser/>
      <div className='Background-user'>
        <Title>
          PESAN PAKET TOUR
        </Title>
      </div>

      <Label2>
        Silahkan masukan biodata anda untuk Pemesanana Paket Tour
      </Label2>

      <Form>
        <Formdata>
        <Dataleft>  
          <div>
            <Input value={name} onChange={e => setName(e.target.value)} type="text" id="#" name="#" placeholder="Nama"/>
          </div>
          <div>
            <Input value={number} onChange={e => setNumber(e.target.value)} type="number" id="#" name="#" placeholder="Telephone / Whatsapp"/>
          </div>
          <div>
            {/* <Label>Tujuan :</Label> */}
            <Label>Trip : </Label>
            <Select value={wisata} onChange={e => setWisata(e.target.value)}>
              <option>--</option>
              <option >Pulau Pahawang</option>
              <option >Pahawang Kecil</option>
              <option >Pasir Timbul</option>
            </Select>
          </div>
          <div>
            <Label>Penginapan :</Label>
            <Select value={penginapan} onChange={e => setPenginapan(e.target.value)}>
              <option>--</option>
              <option>Andreas Resort</option>
              <option>Tenda Pahawang</option>
              <option>Hotel Pahawang</option>
            </Select>
          </div>
          <div>
          <Label>Dewasa :</Label>
          <Input type="number" value={dewasa} onChange={e => setDewasa(e.target.value)} id="#" name="#" placeholder="4"/>
          </div>
        </Dataleft>  
        </Formdata>

        <Formdata2>
        <Dataright>
          <div>
            <Input refs="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
          </div>
          <div>
            <Label>Tanggal Keberangkatan :</Label>
            <Input type="text" value={tanggal} onChange={e => setTanggal(e.target.value)} placeholder="DD/MM/YYYY"/>
          </div>
          <div>
            <Label>Waktu Liburan</Label>
            <Select value={waktu} onChange={e => setWaktu(e.target.value)}>
              <option>--</option>
              <option>1 hari</option>
              <option>2 hari 1 malam</option>
              <option>3 hari 2 malam</option>
            </Select>
          </div>
          <div>
          <Label>Anak-anak (2th-5th) :</Label>
          <Input type="number" value={anak} onChange={e => setAnak(e.target.value)} placeholder="2"/>
          </div>
        </Dataright>
        </Formdata2>
      </Form>

    <form>
      <Textarea value={catatan} onChange={e => setCatatan(e.target.value)} >Catatan...</Textarea>
    </form>

    <Button onClick={() => { saveNotes(); handleOpen();}} >
      Kirim Pesanan
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
            <h2 id="transition-modal-title">Pemesanan Berhasil!!</h2>
            <br/>
            <p id="transition-modal-description">Silahkan tunggu 2x24jam, pesanan anda akan segera kami proses</p>
          </div>
        </Fade>
      </Modal>

    {noteList ? noteList.map((data ) => 
    <Form>
        <div>
        
          <div className='Title-2'>
            SYARAT & KETENTUAN
          </div>
          <p className='Artikel-2'>
            {data.syarat}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. */}
          </p>
        </div>

        <div>
          <div className='Title-2'>
            NOTE
          </div>
        
          <p className='Artikel-2'>
          {data.note}
          </p>
        </div>
      </Form>
          ): ''}

    </>
  )
}


const Textarea = styled.textarea`
  margin: 20px 10%;
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

const Title = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
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
    width: 250px;
    font-size: 17px;
    margin: 0px 150px;
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

const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0px;
  width: 90%;
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

const Label = styled.p`
  margin-top: 5px;
  color: black;
  font-size: 15px;
  text-align: justify;
`;

const Label2 = styled.p`
  color: black;
  font-size: 20px;
  padding-left: 100px;
  text-align: justify;

    // phone
    @media (min-width:0px) and (max-width:600px) {
      width: 80%;
      font-size: 17px;
    }
`;

const Select = styled.select`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top:10px;
  margin-bottom: 8px;
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

const Button = styled.button`
  margin: 5px 15%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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