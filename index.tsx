
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// O Babel Standalone em modo módulo precisa que os imports sejam resolvidos corretamente.
// O renderizador React 19 usa a nova API de root.

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento 'root' não encontrado no DOM.");
}
