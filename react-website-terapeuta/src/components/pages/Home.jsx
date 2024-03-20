// Importing necessary modules from react
import React from 'react';

// Importing the global CSS styles
import '../../App.css';

// Importing the Cards, HeroSection, and Footer components
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

// Defining the Home function
function Home() {
  // The function returns the HeroSection, Cards, and Footer components
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

// Exporting the Home function as a module to be used in other files
export default Home;
