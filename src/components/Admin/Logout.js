import React from 'react';
import images from '../../images/logowhite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AdminLogout() {
  return (
    <>
    <div className='Background-admin'>
      <Form>
        <form>
            <Img src={images} alt="#"/>
            <Title>Hello admin!</Title> 
          <MainButton>
          <Link to='/Admin'>
          <Button type="submit"> LOGOUT </Button>
          </Link>
          </MainButton>

          <div>
          <Link to='/NewAdmin'>
          <Button type="submit"> ADD ADMIN </Button>
          </Link>
          </div>

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

const MainButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 90px;
  border-radius: 20px;
  background: white;
  outline: none;
  border: none;
  cursor: pointer;
  color: black;
  font-weight: bold;
  margin: 8px 8px;
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