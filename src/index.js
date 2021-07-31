import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStorage } from './hooks/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStorage>
    <App />
    </GlobalStorage>
  </React.StrictMode>,
  document.getElementById('root')
);