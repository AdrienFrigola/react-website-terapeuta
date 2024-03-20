// Importing necessary modules from react and react-dom/client
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importing the App component
import App from './App.jsx'

// Importing the global CSS styles
import './index.css'

// Using ReactDOM's createRoot method to create a root node and render the App component into it
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the App component in React's StrictMode
  // StrictMode is a tool for highlighting potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
