import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { useTheme } from '../context/ThemeContext';


const AdminLayout = () => {
     const {darkMode, toggleTheme} = useTheme()
  return (
    <>
      <AdminNavbar />
      <main className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} transform-all duration-300 m-2 p-2 space-y-4 rounded`}>
      <button className='px-3 py-3 rounded bg-blue-800' onClick={toggleTheme}>Theme to {darkMode ? "light" : "dark"}</button>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
