import { React } from 'react'


import './App.css'
import Home from './pages/Home'
import { Router, Routes, Route } from 'react-router-dom'
import RoleSelection from './components/RoleSelection'
import Register from './pages/Register'
import Login from './pages/Login'
import ServiceDetails from './pages/ServiceDetails'
import DoctorDashboard from './pages/DoctorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import AdminNavbar from './components/AdminNavbar'
import Report from './pages/Report'
import ManageUsers from './pages/ManageUsers'
import AdminLayout from './components/AdminLayout'
import DoctorLayout from './components/DoctorLayout'
import Patients from './pages/Patients'
import DoctorNavbar from './components/DoctorNavbar'
import Encounter from './pages/Encounter'
import Results from './pages/Results'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roleselection' element={
          <ProtectedRoute role={"admin"}>
            <RoleSelection />
          </ProtectedRoute>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/service/:id' element={<ServiceDetails />} />
        <Route path='/login' element={<Login />} />
        {/* protected routes */}
        <Route path='/doctor-dashboard' element={
          <ProtectedRoute role="doctor">
            <DoctorLayout />
          </ProtectedRoute>
        } >
          <Route index element={<DoctorDashboard /> }/>
          <Route path="patients" element={<Patients /> }/>
          <Route path='report' element={<Report /> }/>
        </Route>

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="report" element={<Report />} />
        </Route>

        <Route path='/encounter/:id' element={<Encounter /> }/>
        <Route path='results' element={ <Results /> }/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
