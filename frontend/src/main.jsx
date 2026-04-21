import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import '../index.css'

let dynamicBasename = import.meta.env.VITE_ROUTER_BASENAME;

if (!dynamicBasename) {
  try {
    const url = new URL(import.meta.url);
    const path = url.pathname;
    if (path.includes('/src/main.jsx')) {
      dynamicBasename = path.substring(0, path.lastIndexOf('/src/main.jsx'));
    } else if (path.includes('/assets/')) {
      dynamicBasename = path.substring(0, path.lastIndexOf('/assets/'));
    }
  } catch (e) {
    dynamicBasename = '/';
  }
}

const basename = (dynamicBasename || '/').replace(/\/$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
