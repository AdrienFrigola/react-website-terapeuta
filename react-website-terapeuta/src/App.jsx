// Importing necessary modules from react and react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Navbar component
import Navbar from './components/Navbar';

// Importing CSS for the App
import './App.css';

// Importing various page components
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// Defining the App function
function App() {
  return (
    // Using the Router component to manage routes
    <Router>
      {/* Including the Navbar component which will be displayed on all pages */}
      <Navbar />
      {/* Defining the Routes for the app */}
      <Routes>
        {/* Defining a Route. When the path is '/', the Home component will be displayed */}
        <Route path='/' element={<Home />} />
        {/* When the path is '/services', the Services component will be displayed */}
        <Route path='/services' element={<Services />} />
        {/* When the path is '/products', the Products component will be displayed */}
        <Route path='/products' element={<Products />} />
        {/* When the path is '/sign-up', the SignUp component will be displayed */}
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

// Exporting the App function as a module to be used in other files
export default App;
