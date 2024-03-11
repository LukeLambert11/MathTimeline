import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timeline from './timeLine'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Timeline />
  </React.StrictMode>
);


