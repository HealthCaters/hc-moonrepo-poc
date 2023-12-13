import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@hc/vite5/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
