import React, { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { GiTreehouse } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import './template.css';

const Header: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <GiTreehouse size={30} />
        <h1>COCHAS CHICO</h1>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><Link className={(pathname === '/home') ? 'menu-item_active' : ''} to="home">Inicio</Link></li>
        <li><Link className={(pathname === '/products') ? 'menu-item_active' : ''} to="products">Productos</Link></li>
        <li><Link className={(pathname === '/places') ? 'menu-item_active' : ''} to="places">Lugares</Link></li>
        <li><Link className={(pathname === '/history') ? 'menu-item_active' : ''} to="history">Historia</Link></li>
        {/* <li >
          <Link to={'login'}><BiUser /></Link>
        </li> */}
        <li>
          <Link to={'cart'}><BiCart /></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header