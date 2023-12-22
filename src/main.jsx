import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SidebarContextProvider from './contexts/SidebarContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import PrintContextProvider from './contexts/PrintContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SidebarContextProvider>
        <PrintContextProvider>
        <App />
        </PrintContextProvider>
      </SidebarContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
