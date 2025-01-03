import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Check if sw.js exists in the public directory
    navigator.serviceWorker
      .register('/sw.js')  // Ensure the sw.js file is in the root of public directory
      .then(() => {
        console.log('Service Worker registration successful');
      })
      .catch((err) => {
        console.error('Service Worker registration failed: ', err);
      });
  });
}

// Ensure the element with id 'root' exists
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
