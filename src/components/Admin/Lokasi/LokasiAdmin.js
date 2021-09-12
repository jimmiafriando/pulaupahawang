import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import styled from 'styled-components';
// import lokasi from '../../../images/Lokasi.svg';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

export default function Lokasi() {
  const [lokasiList, setlokasiList] = useState('');
  const [name, setName] = useState('');
  const [caption, setCaption] = useState('Caption...');

  const saveLokasi = () => {
      const createRef = firebase.database().ref('lokasi/').child(lokasiList.id);
      const create = {
      name,
      caption,
    };
    setName('')
    setCaption('Caption...')
    createRef.set(create);
    };

    useEffect(()=>{
      const readLokasi = firebase.database().ref('lokasi/');
      readLokasi.on('value', (snapshot)=>{
        const lokasi = snapshot.val();
        const lokasiList = [];
        for (let id in lokasi) {
          lokasiList.push({ id,...lokasi[id] });
        }
        setlokasiList(...lokasiList, lokasiList);
        console.log(lokasiList)
        setName(lokasiList[0].name)
        setCaption(lokasiList[0].caption)
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
  return(
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
      <Title>
          Lokasi
      </Title>
        <Border>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder='Lokasi'/>
          <Textarea value={caption} onChange={e => setCaption(e.target.value)} maxLength='690'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum.
        </Textarea>

          <Button onClick={() => {saveLokasi(lokasiList); handleOpen();}}>
              UPDATE
          </Button>
        </Border>
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
            <h2 id="transition-modal-title">UPDATE BERHASIL!!!</h2>
            <br/>
            <p id="transition-modal-description">Silahkan Cek dihalaman lokasi user</p>
          </div>
        </Fade>
      </Modal>

      <Maps>
          <Header>
            Maps
          </Header>
          <a className="nav-links" href="https://www.google.com/maps/place/Pahawang+Lampung/@-5.6764277,105.2197723,14z/data=!4m5!3m4!1s0x2e41254c9ea15fff:0xf8ac19b08a31f54a!8m2!3d-5.6752009!4d105.226013" target="_blank" rel="noreferrer">
          Pahawang Island, Pardasuka, Pringsewu Regency, Lampung 35453
          </a>
        </Maps>
        <Link to='/LokasimapsAdmin'>
            <Button>
              VIEW
            </Button>
        </Link>
      </div>
    </>
  )
}

const Maps = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 30px;
  margin: 0px 200px;
  margin-top: 20px;
  padding: 10px 0px;
  text-align: center;

  // phone
  @media (min-width:0px) and (max-width:600px) {
  margin: 0px 50px;
  width: 300px;
  }
`; 

const Title = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 10%;
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

const Textarea = styled.textarea`
  margin: 0px 10%;
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

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 0px 100px

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

// const Cover = styled.div`
//   padding-top: 20px;
//   display: flex;
//   justify-content: center;
// `; 

const Header = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Button = styled.button`
  margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 40px;
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