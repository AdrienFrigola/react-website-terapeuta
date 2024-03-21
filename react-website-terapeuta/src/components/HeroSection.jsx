// Importing necessary modules from react
import React from 'react';

// Importing the global CSS styles and the styles for this component
import '../App.css';
import './HeroSection.css';

// Importing the Button component
import { Button } from './Button';

// Defining the HeroSection function
function HeroSection() {
  return (
    // The hero-container div contains all the elements of the hero section
    <div className='hero-container'>
      {/* The video element is used to embed video content */}
      <video src='./public/video boudha feu.mp4' autoPlay loop muted />
      {/* The h1 element represents a first level heading */}
      <h1>Rituals of THAIBUDA</h1>
      {/* The p element represents a paragraph */}
      <p>"Lo que eres es lo que has sido. Lo que serás es lo que haces a partir de ahora".</p>
      <p>Buda Gautama</p>
      {/* The hero-btns div contains the buttons of the hero section */}
      <div className='hero-btns'>
        {/* The Button component is used to create buttons */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GALERIA
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // The onClick attribute is an event handler that instructs the browser to run some JavaScript code when the element is clicked
          onClick={console.log('hey')}
        >
          CONTACTO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

// Exporting the HeroSection function as a module to be used in other files
export default HeroSection;
