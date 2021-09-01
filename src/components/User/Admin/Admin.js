import React, { useState } from 'react';
import images from '../../../images/logowhite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import firebase from '../../../config/firebase';
import NavbarUser from '../../../components/NavbarUser/Navbar';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const clearInputs= () => {
    setEmail('');
    setpassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    clearInputs();
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then( res =>{
      console.log('succes: ',res)
      history.push("/AboutAdmin")
     })
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
          default:
        // do nothing
      }
    });
  };

  return (
    <>
    <NavbarUser/>
    <div className='Background-admin'>
      <Form>
        <form>
            <Img src={images} alt="#"/>
            <Title>Welcome back!</Title> 
          <div>
            <Input type="email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="USERNAME"/>
          </div>
            <p className='errorMsg'>{emailError}</p>
          <div>
            <Input type="password" required value={password} onChange={e => setpassword(e.target.value)} id="password" placeholder="PASSWORD" />
          </div>
            <p className='errorMsg'>{passwordError}</p>

          <Link>
          <Button type="submit" onClick={handleLogin}> LOGIN </Button>
          </Link>
        </form>
      </Form>
    </div>
    </>
  );
// }
}

// export default Admin;


const Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
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

const Input = styled.input`
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 5px;
  padding: 8px 8px;
  font-size: 11px;
  padding-right: 82px;
  outline: none;
  border: 2px solid;
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
  padding: 10px 80px;
  border-radius: 20px;
  background: white;
  outline: none;
  border:  2px solid;
  cursor: pointer;
  color: black;
  font-weight: bold;
  margin: 10px 10px;
  &:hover {
    padding: 10px 80px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 2px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;