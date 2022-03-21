import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import phone from '../../assets/img/phone.png';
import mail from '../../assets/img/mail.png';
import address from '../../assets/img/address.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="contacts">
                <Link to='/'>
                    <img src={logo} alt='logo'/>
                </Link>
                <p className="contacts__inf">You can dream, create, design, and buildsa the most wonderful place.</p>
                <div className="contacts__contacts">
                    <div>
                        <img src={phone} alt='#' />
                        <p className="phone">+0123 456 987, +0123 456 987</p>
                    </div>
                    <div>
                        <img src={mail} alt='#' />
                        <p className="mail">ravel@gmail.com</p>
                    </div>
                    <div>
                        <img src={address} alt='#' />
                        <Link to='/'><p className="address">www.ravel.com</p></Link> 
                    </div>
                </div>
            </div>
            <div className="quickLinks">
                <h4 className="contacts__title">Quick Links</h4>
                <ul>
                    <li className="quickLinks__lists">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="quickLinks__lists">
                        <Link to='/destination'>Destinations</Link>
                    </li>
                    
                    <li className="quickLinks__lists">
                        <Link to='/contacts'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <form className="writeLetter">
                <h4 className="contacts__title">Newsletter</h4>
                <input className="writeLetter__input" type='text' /><br />
                <button className="writeLetter__btn">Subscribe Now</button>
            </form>
        </footer>
    );
  }
  
  export default Footer;