import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='Admin'>
      <button className='btn'>Admin</button>
    </Link>
  );
}
