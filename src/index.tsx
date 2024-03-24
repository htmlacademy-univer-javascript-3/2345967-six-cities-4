import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AuthStatus } from './const';
import { OFFERS_MOCK } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authStatus={AuthStatus.NoAuth}
      offers = {OFFERS_MOCK}
    />
  </React.StrictMode>
);
