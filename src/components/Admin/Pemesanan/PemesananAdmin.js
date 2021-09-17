import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
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


export default function CustomizedTables() {
  const classes = useStyles();
  const [pemesananList, setPemesananList] = useState([]);
  const [catatanList, setCatatanList] = useState([]);
  const [syarat, setSyarat] = useState('');
  const [note, setNote] = useState('');

  const createNote = (catatanList) => {
    const updateRef = firebase.database().ref('pemesananAdmin/').child(catatanList.id);
    const update = {
      syarat,
      note
    };
    console.log(update)
    updateRef.set(update);
  };

  useEffect(()=>{
    const readPemesanan = firebase.database().ref('pemesanan/');
    readPemesanan.on('value', (snapshot)=>{
      const pemesanan = snapshot.val();
      const pemesananList = [];
      for (let id in pemesanan) {
        pemesananList.push({ id,...pemesanan[id] });
      }
      setPemesananList(pemesananList);
    });
    
    const readCatatan = firebase.database().ref('pemesananAdmin/');
    readCatatan.on('value', (snapshot)=>{
      const catatan = snapshot.val();
      const catatanList = [];
      for (let id in catatan) {
        catatanList.push({ id,...catatan[id] });
      }
      setCatatanList(...catatanList, catatanList);
      console.log('pemesanan', catatanList)
      setSyarat(catatanList[0].syarat)
      setNote(catatanList[0].note)
    });
  },[]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <NavbarAdmin/>
    <div className='Background-admin'>
      <Center>
      <Title>
          PESANAN PAKET TOUR
      </Title>
      </Center>

      <Border>
      <MainTable>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nama</StyledTableCell>
            <StyledTableCell align="right">Trip</StyledTableCell>
            <StyledTableCell align="right">Penginapan</StyledTableCell>
            <StyledTableCell align="right">Tanggal</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Detail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {pemesananList.map((data) => {
      return (
        <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">{data.name}</StyledTableCell>
              <StyledTableCell align="right">{data.wisata}</StyledTableCell>
              <StyledTableCell align="right">{data.penginapan}</StyledTableCell>
              <StyledTableCell align="right">{data.tanggal}</StyledTableCell>
              <StyledTableCell align="right">Waiting</StyledTableCell>
              <StyledTableCell align="right"><Link className='line-dec' to={`/pemesanan-admin/${data.id}`}>Detail</Link></StyledTableCell>
        </StyledTableRow>
      )
    })
}

</TableBody>
      </Table>
    </TableContainer>
    </MainTable>
    
    <Form>
        <div>
        
          <Title2>
            SYARAT & KETENTUAN
          </Title2>
          <form>
                <Textarea2  value={syarat} onChange={e => setSyarat(e.target.value)} maxLength='250' >Text...</Textarea2>
          </form>
        </div>

        <div>
          <Title2>
            NOTE
          </Title2>
        
          <form>
                <Textarea2 value={note} onChange={e => setNote(e.target.value)} maxLength='460'>Text...</Textarea2>
          </form>
        </div>
      </Form>
      <Button onClick={() => { createNote(catatanList); handleOpen();}}>
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
            <h2 id="transition-modal-title">UPDATE BERHASIL!!!</h2>
            <br/>
            <p id="transition-modal-description">Silahkan Cek dihalaman pemesanan user</p>
          </div>
        </Fade>
      </Modal>
      </Border>
    </div>
    </>
  );
}

const MainTable = styled.div`
  margin: 10px 50px;
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

const Textarea2 = styled.textarea`
  margin: 20px 50px;
  width: 400px;
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
    width: 200px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
  margin: 20px 10px;
    width: 200px;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
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
  color: white;
  font-size: 25px;
  font-weight: bold;

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
    font-size: 10px;
  }
`;

const Form = styled.div`
  margin: 0px 40px;
  display: flex;
  justify-content: center;
  `;

const Button = styled.button`
  margin: 5px 15%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;