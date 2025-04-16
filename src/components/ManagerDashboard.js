import React from 'react';
import Procurement from './Procurement';
//import Sales from './Sales';
import CreditSales from './CreditSales';
import Stock from './Stock';
import Analytics from './Analytics';
import UserManagement from './UserManagement';
import { useAuth } from '../context/AuthContext';

function ManagerDashboard() {
  const { user } = useAuth();
  return (
    <div className="dashboard">
      <header>
        <h1>Manager Dashboard - {user?.branch}</h1>
      </header>
      <div className="dashboard-content">
        <div className="card">
          <Procurement />
        </div>
        
        <div className="card">
          <CreditSales />
        </div>
        <div className="card">
          <Stock />
        </div>
        <div className="card">
          <UserManagement />
        </div>
        <div className="card">
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;