import Link from 'next/link'
import './Footer.css';

import LogoCompact from '../Icons/LogoCompact'

const Footer = () => {

    return (
        <div className="footer">
            <div className='footer-wrapper container'>
                <LogoCompact />
                <div className='footer-menu'>
                    <p className='foot-header'>Product Lines</p>
                    <ul>
                        <li><Link className='simple-link' href="/products?category=Snap-N-Play">Snap-N-Play</Link></li>
                        <li><Link className='simple-link' href="/products?category=Car-Switchers">Car-Swapper</Link></li>
                        <li><Link className='simple-link' href="/products?category=Tactile-Saurus">Tactile-saurus</Link></li>
                    </ul>
                </div>
                <div className='footer-menu'>
                    <p className='foot-header'>Our Team</p>
                    <ul>
                        <li><Link className='simple-link' href='/about-us'>Our Story</Link></li>
                        <li><Link className='simple-link' href='/about-us'>Resources</Link></li>
                    </ul>
                </div>
            </div>
            <p className='legal-line'>{(new Date().getFullYear())} Play Logic Toys</p>
        </div>
    )
};

export default Footer;