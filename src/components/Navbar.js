import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const title = "Everyday Faces";

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {title}
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rarity'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rarity
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/original'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Original
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link
                to='/original'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                [T]
              </Link>
            </li>
            <li>
              <Link
                to='/home'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Mint
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>MINT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
