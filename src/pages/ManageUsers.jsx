import React from 'react'
import { Link } from 'react-router-dom'

function ManageUsers() {
  return (
    <div className='h-screen space-y-3'>
      <Link to='/register' className='bg-green-500 px-3 py-3 rounded'>Register new staff</Link>
    </div>
  )
}

export default ManageUsers