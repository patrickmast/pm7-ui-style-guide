// Enhancement: Created main entry point for component examples app
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global styles
import '../src/globals.css';
import './examples.css';

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
