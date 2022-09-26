import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kordoc__navbar">
      <div className="kordoc__navbar-links">
        <div className="kordoc__navbar-links_logo">
          
        </div>
        <div className="kordoc__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wkordoc">What is Kor Doc?</a></p>
          <p><a href="#features">Services</a></p>
          <p><a href="#blog">External Tips</a></p>
        </div>
      </div>
      <div className="kordoc__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="kordoc__navbar-menu_container scale-up-center">
            <div className="kordoc__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wkordoc">What is Kor Doc?</a></p>
              <p><a href="#possibility">Services</a></p>
              <p><a href="#blog">External Tips</a></p>
            </div>
            <div className="kordoc__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
              </div>
              </div>
        )}
      </div>
    </div>
  );
};

export default Navbar