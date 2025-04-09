import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserMd, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const DoctorNavbar = () => {
  const logout = () => {
    // Clear local storage or perform other actions like redirecting to login page
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login'; // Redirect to login
  };
  const {darkMode} = useTheme()

  return (
    <div className="">
      {/* Side Navigation Bar */}
      <div className={`h-screen w-64 bg-gray-800 text-white top-0 left-0 z-50 ${darkMode ? "bg-black text-white" : "border-gray-700 text-black"}`}>
        <div className="p-6 border-b  text-2xl font-bold">
          <Link to="/doctor-dashboard">Doctor Panel</Link>
        </div>

        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/doctor-dashboard"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
              >
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/doctor-dashboard/patients"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
              >
                <FaUserMd />
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link
                to="/doctor-dashboard/report"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
              >
                <FaFileAlt />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className=" bottom-0 p-6 border-t border-gray-700 w-full">
          <button
            onClick={logout}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 w-full"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default DoctorNavbar;
