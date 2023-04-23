import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    return (
        <header>
            <div className="container">
                {/* Logo */}
                <Link to='/'>
                    <h2 className='logo m-0'>Logo</h2>
                </Link>
                {/* Main Menu */}
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={() => setOpen(false)}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' onClick={() => setOpen(false)}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={() => setOpen(false)}>Contact</NavLink>
                    </li>
                </ul>
                <div className='btn-group'>
                    <Link to='/apply' className='btn btn-general-outline'>Submit CV</Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {open ? (<FaTimes size={20} style={{ color: '#f0f0f0' }} />) : (<FaBars size={20} style={{ color: '#f0f0f0' }} />)}
                </div>
            </div>
        </header>
    );
};

export default Header;