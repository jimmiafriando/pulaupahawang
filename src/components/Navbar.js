import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="assets/logoblack.png" alt="#"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Lokasi'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lokasi
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Paket Destinasi <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-menu-item'>
            <Link
              to='/Trip'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Trip
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link
              to='/Penginapan'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Penginapan
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Pemesanan'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pemesanan
            </Link>
          </li>
          <li>
            <Link
              to='/Admin'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Admin
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
