// Importing necessary modules from react
import React from 'react';

// Importing the Button component and the styles for this component
import './Button.css';

// Importing the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the styles for the button
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// Defining the sizes for the button
const SIZES = ['btn--medium', 'btn--large'];

// Defining the Button function
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  // Checking the button style
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Checking the button size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // The Link component is used for navigation
    <Link to='/sign-up' className='btn-mobile'>
      {/* The button element represents a clickable button */}
      <button
        // Setting the class of the button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        // Setting the onClick event handler of the button
        onClick={onClick}
        // Setting the type of the button
        type={type}
      >
        {/* Rendering the children of the button */}
        {children}
      </button>
    </Link>
  );
};
