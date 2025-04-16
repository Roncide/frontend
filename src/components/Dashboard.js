import React from 'react';
import { useAuth } from '../context/AuthContext';
import Procurement from './Procurement';
import Sales from './Sales';
import Stock from './Stock';
import CreditSales from './CreditSales';
import Analytics from './Analytics';

function Dashboard() {
  const { token, user, logout } = useAuth();

  if (!token) return null; // Hide dashboard if not logged in

  return (
    <div className="dashboard">
      <header>
        <h1>GCDL Dashboard - {user?.branch} ({user?.role})</h1>
        <button onClick={logout}>Logout</button>
      </header>
      <div className="dashboard-content">
        <Procurement />
        <Sales />
        <Stock />
        <CreditSales />
        <Analytics />
      </div>
    </div>
  );
}

export default Dashboard;