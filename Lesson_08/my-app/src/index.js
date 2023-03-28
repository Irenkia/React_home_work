import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';

const root = ReactDOM.createRoot(document.querySelector('main'));
root.render(
  <BrowserRouter>
  <Main/>
  </BrowserRouter> 
);


