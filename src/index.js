import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// context
import UserContext from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ username: 'Nilesh' }}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);

