'use client'
import React from 'react';
import Link from 'next/link'
import './Header.css';

import Logo from '../Icons/Logo'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <div className="header">
      <div className='headerWrapper'>
        <div className='mainNav'>
          <a href='/'><Logo /></a>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href='/resources'>Resources</Link></li>
            <li><Link href='/about-us'>About Us</Link></li>
          </ul>
        </div>
        <div className='sideNav'>
          <ul>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
        </div>
        <div className='mobileMenu'>
          <div className='mobileTrigger' onClick={() => setMobile(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className='mobileMenuDrawer' style={{ 'display': mobile ? 'block' : 'none' }}>
        <div className='closeMobileMenu' onClick={() => setMobile(false)}><CloseIcon fontSize="large" /></div>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/products'>Products</a></li>
          <li><a href='/resources'>Resources</a></li>
          <li><a href='/about-us'>About Us</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Header;