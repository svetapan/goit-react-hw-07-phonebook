import React from 'react';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
