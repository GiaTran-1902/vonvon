import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App';
import 'index.css';
import 'styles/_index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
