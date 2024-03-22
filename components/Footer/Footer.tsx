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
                        <li>Snap-N-Play</li>
                        <li>Car-Swapper</li>
                        <li>Tactile-saurus</li>
                        <li>Mini Sorters</li>
                    </ul>
                </div>
                <div className='footer-menu'>
                    <p className='foot-header'>Menu Title</p>
                    <ul>
                        <li>Our Story</li>
                        <li>The Process</li>
                        <li>Meet the team</li>
                    </ul>
                </div>
            </div>
            <p className='legal-line'>{(new Date().getFullYear())} Play Logic Toys</p>
        </div>
    )
};

export default Footer;