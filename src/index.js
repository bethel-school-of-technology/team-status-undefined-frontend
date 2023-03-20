import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './context/UserProvider';
import { GalleryProvider } from './context/GalleryProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <GalleryProvider>
    <App />
    </GalleryProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
