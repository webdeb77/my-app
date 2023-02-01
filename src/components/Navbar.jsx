import React from 'react';
import './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='item'>
                <a>Profile</a>
            </div>
            <div className='item'>
                <a>Messeges</a>
            </div>
            <div className='item'>
                <a>News</a>
            </div>
            <div className='item'>
            <a>Musick</a>
            </div>
            <div className='item'>
                <a>Settingss</a>
            </div>
        </nav>
    );
}

export default Navbar;