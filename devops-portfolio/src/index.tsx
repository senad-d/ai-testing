import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Select the root element of your HTML
const container = document.getElementById('root');

// Ensure the container is not null before creating the root
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element to mount to!');
}