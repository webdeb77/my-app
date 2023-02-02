import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messeges</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Musick</a>
            </div>
            <div className={classes.item}>
                <a>Settingss</a>
            </div>
        </nav>
    );
}

export default Navbar;