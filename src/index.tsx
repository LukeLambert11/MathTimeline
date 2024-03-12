import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TimeGrid from "./TimeGrid";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TimeGrid />
  </React.StrictMode>
);


