import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator } from './components/Calculator';

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  )
} else {
  console.error('⚠️ Root element not found!')
}