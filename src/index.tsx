import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Component from './pages/Component';
import './index.scss';
import Home from './pages/Home';
import Lodash from './pages/Algorithms/Lodash';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components" element={<Component />}>
            <Route path=":slug" />
          </Route>
          <Route path="algorithms">
            <Route path="lodash">
              <Route path=":slug" element={<Lodash />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
