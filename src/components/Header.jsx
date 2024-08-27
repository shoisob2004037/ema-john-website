import React from 'react';
import Logo from '../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="logo"/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            <div className='search'>
                <input type='text' placeholder='Type Here to Search'></input>
                
            </div>
        </div>
    );
};

export default Header;