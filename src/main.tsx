import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import { MarketingPage } from './MarketingPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MarketingPage />
  </StrictMode>
);
