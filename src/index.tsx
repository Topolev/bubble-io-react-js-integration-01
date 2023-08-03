import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

declare global {
  interface Window {
    initPlugin: (id: string) => void;
  }
}

window.initPlugin = (id: string) => {
  const root = ReactDOM.createRoot(document.getElementById(id) as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === 'development') {
  window.initPlugin('root');
}
