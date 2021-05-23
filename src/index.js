import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import IndexProvider from './contexts/IndexContext';

ReactDOM.render(
  <React.StrictMode>
    <IndexProvider>
      <App />
    </IndexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
