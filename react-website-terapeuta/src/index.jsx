// Importing necessary modules from react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the App component
import App from './App';

// Using ReactDOM's render method to render the App component into the div with id 'root'
ReactDOM.render(
  // The App component is being rendered here
  <App />,
  // The element with id 'root' is selected here
  document.getElementById('root')
);
