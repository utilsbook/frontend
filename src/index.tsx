import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Component from './pages/Component';
import ButtonPage from './pages/Component/ButtonPage/index';
import './index.scss';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components" element={<Component />}>
            <Route path=":slug" element={<ButtonPage />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
