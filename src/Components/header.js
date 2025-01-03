import React from 'react';
import './Header.css';

function Header() {
    return (
    <header className="header">
    <div className="logo">Vidlens</div>
    <nav className="nav-links">
        <a href="#analyze">Analyze</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    </header>
);
}

export default Header;
