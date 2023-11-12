import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/commonComponents/commonStyles.css'

import TradieUI from './TradieUI';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TradieUI />
  </React.StrictMode>
);
