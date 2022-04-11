import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { Header } from "./components/Header";

import GlobalStyles from './styles/global'

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <GlobalStyles />
      <Header />
      <App />
    </React.StrictMode>
  );
}
