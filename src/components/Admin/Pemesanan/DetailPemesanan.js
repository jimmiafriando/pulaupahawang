import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

export default function DetailPemesanan(props) {
  const dataList = props.location.param1
  
  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          DETAIL
        </Title>
        <div>
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
            <label>
              <Checkbox/> 1 hari
            </label>
          </div>
          <div>
            <label>
              <Checkbox type="checkbox" checked="checked" /> 2 hari 1 malam
            </label>
          </div>
          <div>
            <label>
              <Checkbox /> 3 hari 2 malam
            </label>
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
      </div>
    <Link to='/PemesananAdmin'>
      <Button>
        Accept
      </Button>
    </Link>
    <Link to='/PemesananAdmin'>
      <Button2>
        Reject
      </Button2>
    </Link>
      </div>
    </>
  )
}

const Button = styled.button`
  position: relative;
  margin-top: 10px;
  left: 15%;
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
    background-color: #60C564;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

const Button2 = styled.button`
  position: relative;
  margin-top: 10px;
  margin-left: 20px;
  left: 15%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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

const Checkbox = styled.input`
  margin:5px 0px;
  margin-left: 10px;
  height: 15px;
  width: 15px;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  background-color: #6CA7FF;
  text-align:center;
  margin: 20px 400px;
  padding: 3px 0px;
  border-radius: 10px;
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
`;