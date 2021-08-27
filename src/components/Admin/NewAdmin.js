import React, { useState } from 'react';
import images from '../../images/logowhite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';

export default function AddAdmin() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs= () => {
    setEmail('');
    setpassword('');
  }

  const clearErrors = () => {

    
    setEmailError('');
    setPasswordError('');
  }

  const handleRegister = () => {
    clearErrors();
    clearInputs();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
  return (
    <>
    <NavbarAdmin/>
    <div  className='error'> <p className='errorMsg'>{passwordError}</p></div>
    <div  className='error'> <p className='errorMsg'>{emailError}</p></div>
    <div className='Background-admin'>
      <Form>
        <form>
            <Img src={images} alt="#"/>
            <Title>Add new admin</Title> 
          <MainButton>
              <Input type="email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} id="email"  placeholder="USERNAME"/>
          </MainButton>
          <MainButton>
              <Input type="password" required value={password} onChange={e => setpassword(e.target.value)} id="password"  placeholder="PASSWORD"/>
          </MainButton>

          <Link>
          <Button type="submit" onClick={handleRegister}> ADD ADMIN </Button>
          </Link>
          
        </form>
      </Form>
    </div>
    </>
  );
}

const Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  font-size: 20px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

const MainButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 8px 8px;
  font-size: 11px;
  padding-right: 82px;
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
  padding: 10px 90px;
  border-radius: 20px;
  background: white;
  outline: none;
  border:  1px solid;
  cursor: pointer;
  color: black;
  font-weight: bold;
  margin: 0px 8px;
  &:hover {
    padding: 10px 90px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;