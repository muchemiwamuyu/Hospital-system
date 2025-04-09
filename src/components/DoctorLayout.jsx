import React from 'react'
import { useTheme } from '../context/ThemeContext'
import DoctorNavbar from './DoctorNavbar'
import { Outlet } from 'react-router-dom'

function DoctorLayout() {
    const {darkMode, toggleTheme} = useTheme()
  return (
    <>
        <main className={` ${darkMode ? "bg-black text-white" : "bg-white text-black"} transform-all duration-300`}>
        <DoctorNavbar />
        {/* handling the rest of the data */}
        <div className='absolute top-5 left-[24%]'>
        <button className='px-3 py-3 rounded bg-blue-800' onClick={toggleTheme}>Theme to {darkMode ? "light" : "dark"}</button>
        <Outlet />
        </div>
        </main>
    </>
  )
}

export default DoctorLayout