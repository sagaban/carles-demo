import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import { IndexPage } from './views/Index';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AboutPage } from './views/About';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/Login';
import Register from './views/Register';
import ConcertsHome from './views/concerts/Index';
import City from './views/concerts/[city]';
import Trending from './views/concerts/Trending';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
