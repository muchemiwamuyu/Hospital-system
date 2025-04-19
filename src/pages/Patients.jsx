import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'

function Patients() {
  const [recordData, setRecordData] = useState({
    name: '',
    phone: '',
    gender: '',
    idNumber: '',
    bloodPressure: '',
    heartRate: '',
    temperature: '',
    weight: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecordData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/records', recordData);
  
      alert(response.data.message);
  
      // 👇 Extract the patient ID from the response
      const patientId = response.data.patient._id;
  
      // 👇 Navigate with the patient ID
      navigate(`/encounter/${patientId}`);
  
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='w-4xl m-2 rounded '>
      {/* <p>Patients</p> */}
      <div className='text-center flex'>
        <div className='w-1/2 grid p-3 space-y-3 shadow-lg rounded shadow-black m-2'>
          <input name="name" value={recordData.name} onChange={handleChange} type="text" className='border-2 border-blue-800 text-center rounded  shadow-md' placeholder='Names' />
          <input name='phone' value={recordData.phone} onChange={handleChange} type="number" className='border-2 border-blue-800 text-center rounded  shadow-md' placeholder='phone number' />
          <input name='gender' value={recordData.gender} onChange={handleChange} type="text" className='border-2 border-blue-800 text-center rounded  shadow-md' placeholder='Male | Female' />
          <input name='idNumber' value={recordData.idNumber} onChange={handleChange} type="number" className='border-2 border-blue-800 text-center rounded shadow-md' placeholder='ID Number' />
        </div>
        <div className='w-1/2  p-3 m-2 grid space-y-1 shadow-lg shadow-black rounded'>
          <label>Blood Pressure: </label>
          <input name='bloodPressure' value={recordData.bloodPressure} onChange={handleChange} type="text" className='border-2 border-blue-800 text-center rounded  ' placeholder='B/P' />
          {/* <button className='px-4 py-1 bg-blue-700 rounded shadow-md shadow-black'>Add</button> */}
          <label>Heart Rate: </label>
          <input name='heartRate' value={recordData.heartRate} onChange={handleChange} type="number" className='border-2 border-blue-800 text-center rounded' placeholder='Heart Rate' />
          {/* <button className='px-4 py-1 bg-blue-700 rounded shadow-md shadow-black'>Add</button> */}
          <label>Temperature: </label>
          <input name='temperature' value={recordData.temperature} onChange={handleChange} type="text" className='border-2 border-blue-800 text-center rounded' placeholder='Temperature' />
          {/* <button className='px-4 py-1 bg-blue-700 rounded shadow-md shadow-black'>Add</button> */}
          <label>Weight: </label>
          <input name='weight' value={recordData.weight} onChange={handleChange} type="number" className='border-2 border-blue-800 text-center rounded ' placeholder='Weight' />
          {/* <button className='px-4 py-1 bg-blue-700 rounded shadow-md shadow-black'>Add</button> */}
        </div>
      </div>
      <br />
      {error && <p className='m-2 font-bold text-red-700'>{error}</p>}
      <button className='m-2 p-2 text-center bg-blue-700'>Create Record</button>
    </form>
  )
}

export default Patients