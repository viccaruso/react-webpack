import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './reset.css';
import './global.css';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
