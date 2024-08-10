'use client'
import React from 'react';
import Link from 'next/link'
import './Header.css';

import Logo from '../Icons/Logo'
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <>
      <div className="header">
        <div className='headerWrapper'>
          <div className='mainNav'>
            <Link href='/'><Logo /></Link>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href={"/products"}>Products</Link></li>
              <li><Link href={'/about-us'}>About Us</Link></li>
            </ul>
          </div>
          <div className='sideNav'>
            <ul>
              <li><a href='https://www.facebook.com/share/6ay2DVuEGjF2ucUr/?mibextid=LQQJ4d'><FacebookIcon /></a></li>
              <li><a href='https://www.instagram.com/playlogictoys?igsh=MWQ2aDA1dGJhNGtreA%3D%3D&utm_source=qr'><InstagramIcon /></a></li>
              <li><a href='https://youtube.com/@playlogictoys?si=-x9FeDPIFoFaYMER'><YouTubeIcon /></a></li>
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

      </div>
      <div className='mobileMenuDrawer' style={{ 'display': mobile ? 'block' : 'none' }}>
        <div className='closeMobileMenu' onClick={() => setMobile(false)}><CloseIcon fontSize="large" /></div>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/products'>Products</Link></li>
          <li><Link href='/about-us'>About Us</Link></li>
          <li><a href='https://www.facebook.com/share/6ay2DVuEGjF2ucUr/?mibextid=LQQJ4d'><FacebookIcon /> Facebook</a></li>
          <li><a href='https://www.instagram.com/playlogictoys?igsh=MWQ2aDA1dGJhNGtreA%3D%3D&utm_source=qr'><InstagramIcon /> Instagram</a></li>
          <li><a href='https://youtube.com/@playlogictoys?si=-x9FeDPIFoFaYMER'><YouTubeIcon /> Youtube</a></li>
        </ul>
      </div>
    </>
  )
};

export default Header;