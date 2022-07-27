import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'App/App';
import store  from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
