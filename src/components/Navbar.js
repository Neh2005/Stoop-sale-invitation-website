import React from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <nav>
            <ul>
                <li><a href="#home" onClick={() => handleNavigation('home')}>Home</a></li>
                <li><a href="#event" onClick={() => handleNavigation('event')}>Event Details</a></li>
             
            </ul>
        </nav>
    );
};

export default Navbar;
