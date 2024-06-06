import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import QueryProvider from './components/QueryProvider.jsx';
import ResizeScreenHeight from './components/ResizeScreenHeight.jsx';
import { AuthProvider } from './hooks/use-auth.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './hooks/use-toast.jsx';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <ToastProvider>
            <NextUIProvider>
              <App />
              <ResizeScreenHeight />
            </NextUIProvider>
          </ToastProvider>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
