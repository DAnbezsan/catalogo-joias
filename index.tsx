
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Falha ao renderizar App:", error);
    container.innerHTML = '<div style="color: #666; font-family: sans-serif; text-align: center; padding-top: 50vh;">ERRO DE SISTEMA: CONSULTE O CONSOLE.</div>';
  }
} else {
  console.error("Critical: Root element not found.");
}