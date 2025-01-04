import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();
  const handleLogoClick = () => navigate('/');
    return (
    <header className="header">
<div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        Vidlens
      </div>    <nav className="nav-links">
        <a href="/analyze">Analyze</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    </header>
);
}

export default Header;
