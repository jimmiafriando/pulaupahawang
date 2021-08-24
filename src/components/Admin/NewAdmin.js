import React, { Component } from 'react';
import images from '../../images/logowhite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';

class AddAdmin extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeText = (e) => {
    // console.log(e.target.id)
    this.setState({
      [e.target.id]:e.target.value,
    })
  }

  handleRegisterSubmit = () => {
    const {email, password} = this.state;
      this.setState({
        email:'',
        password:''
      })

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('success: ', res);
    // Signed in
    // var user = userCredential.user;
    // console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  }

  render() {
  return (
    <>
    <NavbarAdmin/>
    <div className='Background-admin'>
      <Form>
        <form>
            <Img src={images} alt="#"/>
            <Title>Add new admin</Title> 
          <MainButton>
              <Input type="email" value={this.state.email} id="email" name="email" placeholder="USERNAME" onChange={this.handleChangeText}/>
          </MainButton>
          <MainButton>
              <Input type="password" value={this.state.password} id="password" name="pwd" placeholder="PASSWORD" onChange={this.handleChangeText}/>
          </MainButton>

          <Link>
          <Button type="submit" onClick={this.handleRegisterSubmit}> ADD ADMIN </Button>
          </Link>
          
        </form>
      </Form>
    </div>
    </>
  );
}
}

export default AddAdmin;

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