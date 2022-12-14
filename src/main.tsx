import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from "react-router-dom";
import { StytchProvider, initStytch } from '@stytch/stytch-react';

const stytch = initStytch("public-token-test-f5486417-a4f0-48f3-b369-3f8a35995913");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <HashRouter>
        <App />
      </HashRouter>
    </StytchProvider>
  </React.StrictMode>
)