import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import user from '../../assets/img/user.png';
function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt='logo'/>
            </Link>
            <nav>
                    <ul className='header_nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/destination'>Destination</Link>
                        <Link to='/offer'>Offer</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
            </nav>
                <div className='header_myAccount'>
                    <img src={user} alt='user' />
                    <Link to='/myAccount'>My cart</Link>
                </div>
        </header>
    );
  }
  
  export default Header;
