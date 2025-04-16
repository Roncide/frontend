import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import SalesAgentDashboard from './components/SalesAgentDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import CeoDashboard from './components/CeoDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useAuth } from './context/AuthContext';

function App() {
  const { token, user, logout } = useAuth();

  console.log('App.js - token:', token, 'user:', user);

  return (
    <AuthProvider>
      <div className="App">
        <ToastContainer />
        {!token || !user ? (
          <div className="login-container">
            <h1>Welcome to Golden Crop Distributors Ltd</h1>
            <Login />
          </div>
        ) : (
          <>
            <nav className="navbar">
              <span>GCDL System</span>
              <button onClick={logout}>Logout</button>
            </nav>
            {user.role === 'sales_agent' ? (
              <SalesAgentDashboard />
            ) : user.role === 'manager' ? (
              <ManagerDashboard />
            ) : user.role === 'ceo' ? (
              <CeoDashboard />
            ) : (
              <div>Error: Invalid user role</div>
            )}
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;