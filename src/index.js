import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
      <>    <h1><u>Todolist</u></h1>
          <input type="text" />
          <button>add todo</button>
          <h3>todo's:</h3>
            <App />

      </>
  </React.StrictMode>
);
