import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigateProvider } from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <NavigateProvider>
    <App />
  </NavigateProvider>
);
