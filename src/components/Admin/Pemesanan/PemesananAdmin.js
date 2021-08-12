import React from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

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

function createData(name, trip, penginapan, tanggal, status, detail ) {
  return { name, trip, penginapan, tanggal, status, detail };
}

const rows = [
  createData('Jimmi Afriando Akbar', 'Pulau Pahawang', 'Andreas Resort', '12/01/2021','Succes', 'Detail'),
  createData('Haidar', 'Pahawang Kecil', 'Tenda', '20/02/2021','Waiting', 'Detail'),
  createData('Emilia Sari', 'Pulau Pahawang', 'Tenda', '16/03/2021','Reject', 'Detail'),
  createData('Mufti Alfarokhul Azam', 'Hotel Pahawang', 'Andreas Resort', '23/04/2021','Succes', 'Detail'),
  createData('Ari Corvin', 'Pulau Pahawang', 'Andreas Resort', '13/0/2021','Waiting', 'Detail'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className='Background-admin'>
      <Title>
          PESANAN PAKET TOUR
      </Title>

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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.trip}</StyledTableCell>
              <StyledTableCell align="right">{row.penginapan}</StyledTableCell>
              <StyledTableCell align="right">{row.tanggal}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right"><Link className='line-dec' to='/DetailPemesanan'>{row.detail}</Link></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Form>
        <div>
        
          <div className='Title-2'>
            SYARAT & KETENTUAN
          </div>
          <form>
                <Textarea2>Text...</Textarea2>
          </form>
        </div>

        <div>
          <div className='Title-2'>
            NOTE
          </div>
        
          <form>
                <Textarea2>Text...</Textarea2>
          </form>
        </div>
      </Form>
      <Button>
        UPLOAD
      </Button>
    </div>
  );
}

const Textarea2 = styled.textarea`
  margin: 20px 50px;
  width: 500px;
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
  margin-bottom: 20px;
  padding: 3px 0px;
  border-radius: 10px;
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
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 30px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 2px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;