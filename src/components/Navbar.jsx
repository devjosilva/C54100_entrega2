import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isUserAuthenticated, cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <Link to="/">Logo</Link>
          </div>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Quiénes somos</Link></li>
              <li><Link to="/products">Productos</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div className="menu-icons">
          <Link to="/cart" className="cart-icon"> 
            <div className="cart-icon">
                <AiOutlineShoppingCart className="header-cart" />
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </div>
            </Link>  
            <div className="hamburger-menu" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
