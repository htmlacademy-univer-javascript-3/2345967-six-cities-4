import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AuthStatus } from './const';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authStatus={AuthStatus.NoAuth}
      />
    </Provider>
  </React.StrictMode>
);
