import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
import './variables.css'; // CSS variables (colors, fonts, etc.)
import './App.css'; // Styles specific to the App component
import App from './App'; // Main App component

// Create root and render the App component
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);