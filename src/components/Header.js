import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="portfolio-header">
      <Link to="/">
      <img src="/images/Rowan-Morrison-logo-02.png" alt="Rowan Morrison" className="rowan-logo" id="rowan-logo" />
        </Link>
     <nav className="nav">
        <div className="dropdown">
        <Link to="/" className="dropdown-toggle">Portfolio</Link>
        <div className="dropdown-menu">
      <Link to="/illustration">Illustration</Link>
      <Link to="/graphic-design">Graphic Design</Link>
      <Link to="/coding">Coding</Link>
   </div>
</div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;