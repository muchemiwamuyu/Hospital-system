import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const logout = () => {
    // Clear local storage or perform other actions like redirecting to login page
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/admin-dashboard">Admin Panel</Link>
        </div>
        <div className="space-x-4">
          <Link to="/admin-dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/admin-dashboard/manage-users" className="hover:text-gray-300">Manage Users</Link>
          <Link to="/admin-dashboard/report" className="hover:text-gray-300">Reports</Link>
          <button onClick={logout} className="text-red-500 hover:text-red-400">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
