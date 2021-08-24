import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({onClick}) {
  return (
    <Link to='Adminlogout'onClick={onClick} >
      <button className='btn'>Admin</button>
    </Link>
  );
}
