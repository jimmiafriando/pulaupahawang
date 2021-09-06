import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import images from '../../images/admin.png'


export function Button({onClick}) {
  return (
    <Link to='Adminlogout'onClick={onClick} >
      <img className='img' src={images} alt=''/>
      {/* <button className='btn'>Admin</button> */}
    </Link>
  );
}
