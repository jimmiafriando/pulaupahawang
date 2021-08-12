import React from 'react';
import images from '../../images/logowhite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <>
    <div className='Background-admin'>
      <Form>
        <form>
            <Img src={images} alt="#"/>
            <Title>Add new admin</Title> 
          <MainButton>
              <Input type="email" name="email" placeholder="USERNAME"  />
          </MainButton>
          <MainButton>
              <Input type="password" name="pwd" placeholder="PASSWORD"  />
          </MainButton>

          <Link to='/AdminLogout'>
          <Button type="submit"> ADD ADMIN </Button>
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
    border: 4px solid #6C63FF;
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