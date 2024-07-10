import React, { useState } from 'react'
import './template.css';
import logo from '../../assets/logo.png';

const Header: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>BURI TEAM </h1>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Productos</a></li>
        <li><a href="#about">Lugares</a></li>
        <li><a href="#contact">Contactanos</a></li>
      </ul>
    </nav>
  )
}

export default Header