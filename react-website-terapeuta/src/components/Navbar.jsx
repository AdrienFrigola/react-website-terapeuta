// Importing necessary modules from react
import React, { useState, useEffect } from 'react';
// Importing the Button component
import { Button } from './Button';
// Importing the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';
// Importing the CSS for the Navbar
import './Navbar.css';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify-icons/fa-solid/bars';
import closeIcon from '@iconify-icons/fa-solid/times';
import mortarPestleSolid from '@iconify-icons/fa-solid/mortar-pestle';


// Defining the Navbar function
function Navbar() {
  // Using the useState hook to manage the state of the click and button variables
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Defining the handleClick function that toggles the click state
  const handleClick = () => setClick(!click);
  // Defining the closeMobileMenu function that sets the click state to false
  const closeMobileMenu = () => setClick(false);

  // Defining the showButton function that sets the button state based on the window's width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Using the useEffect hook to call the showButton function when the component mounts
  useEffect(() => {
    showButton();
  }, []);

  // Adding an event listener that calls the showButton function when the window is resized
  window.addEventListener('resize', showButton);

  // Returning the JSX to render
  return (
    <>
      <nav className='navbar'>
      <div className="navbar-container">
                {/* Mortar Pestle Icon */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    
                Taibuda<Icon icon={mortarPestleSolid} className="navbar-icon"/>
                    
                </Link>
                {/* Logo */}
                
                {/* Menu Icon */}
                <div className="menu-icon" onClick={handleClick}>
                    {/* Render the appropriate icon based on the menu state */}
                    <Icon icon={click ? closeIcon : menuIcon} />
                </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

// Exporting the Navbar function as a module to be used in other files
export default Navbar;
