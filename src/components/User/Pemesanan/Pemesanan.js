import React from 'react';
import styled from 'styled-components';

export default function Pemesanan() {
  return (
    <>
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
            <Input type="text" id="#" name="#" placeholder="Nama"/>
          </div>
          <div>
            <Input type="number" id="#" name="#" placeholder="Telephone / Whatsapp"/>
          </div>
          <div>
            <Label>Tujuan :</Label>
            <Select id="Pulau" name="Pulau">
              <option value="pahawang">Pulau Pahawang</option>
              <option value="pahawangkecil">Pahawang Kecil</option>
              <option value="Pasir Timbul">Pasir Timbul</option>
              <option value="none">--</option>
            </Select>
          </div>
          <div>
            <Select id="Penginapan" name="Penginapan">
              <option value="Andreas">Andreas Resort</option>
              <option value="Tenda pahawang">Tenda Pahawang</option>
              <option value="Hotel Pahawang">Hotel Pahawang</option>
              <option value="none">--</option>
            </Select>
          </div>
          <div>
          <Label>Dewasa :</Label>
          <Input type="number" id="#" name="#" placeholder="4"/>
          </div>
        </Dataleft>  
        </Formdata>

        <Formdata2>
        <Dataright>
          <div>
            <Input refs="email" type="email" id="#" name="#" placeholder="Email"/>
          </div>
          <div>
            <Label>Tanggal Keberangkatan :</Label>
            <Input type="text" id="#" name="#" placeholder="DD/MM/YYYY"/>
          </div>
          <div>
            <Label>Waktu Liburan</Label>
            <label>
              <Checkbox type="checkbox" /> 1 hari
            </label>
          </div>
          <div>
            <label>
              <Checkbox type="checkbox" /> 2 hari 1 malam
            </label>
          </div>
          <div>
            <label>
              <Checkbox type="checkbox" /> 3 hari 2 malam
            </label>
          </div>
          <div>
          <Label>Anak-anak (2th-5th) :</Label>
          <Input type="number" id="#" name="#" placeholder="2"/>
          </div>
        </Dataright>
        </Formdata2>
      </Form>

    <form>
      <Textarea>Catatan...</Textarea>
    </form>

    <Button>
      Kirim Pesanan
    </Button>

    <Form>
        <div>
        
          <div className='Title-2'>
            SYARAT & KETENTUAN
          </div>
          <p className='Artikel-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <div className='Title-2'>
            NOTE
          </div>
        
          <p className='Artikel-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
        </div>
      </Form>

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

const Checkbox = styled.input`
  margin:5px 0px;
  margin-left: 10px;
  height: 15px;
  width: 15px;
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
    border: 4px solid #6C63FF;
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
    border: 4px solid #6C63FF;
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