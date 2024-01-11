import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import QueryProvider from './components/QueryProvider.jsx';
import ResizeScreenHeight from './components/ResizeScreenHeight.jsx';
import { AuthProvider } from './hooks/use-auth.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './hooks/use-toast.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
            <ToastProvider>
              <App />
              <ResizeScreenHeight />
            </ToastProvider>
          </GoogleOAuthProvider>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
