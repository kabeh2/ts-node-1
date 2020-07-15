import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import store from './store/reducers';

// Provider, Store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
