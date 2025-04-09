import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // for navigation after registration
// import reg from '/images/reg.jpg'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    password: '',
    role: 'doctor', // Default role, can be changed later
    staffId: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate after successful registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const generateStaffId = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const newStaffId = `NOV-${randomNumber}`;
    
    // Update the staffId in the formData state
    setFormData(prevState => ({
      ...prevState,
      staffId: newStaffId
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(response.data.message);
      navigate('/login');  // Navigate to login page after successful registration
    } catch (err) {
      setError(err.response.data.message); // Handle errors (user already exists, etc.)
    }
  };

  return (
    <div className='h-screen bg-cover bg-center relative group p-4' style={{backgroundImage: "url('/images/reg.jpg')"}}>
      <h2 className='text-2xl text-center font-bold bg-white/50 rounded p-2'>Register</h2>
      <form onSubmit={handleSubmit} className='text-center group bg-white/50 rounded text-black'>
        <div>
          <label>First Name</label>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Second Name</label>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <br />
        <div>
          <button className='bg-amber-600 m-3 p-3 rounded shadow-md shadow-black' onClick={generateStaffId}>Staff ID</button>
          <br />
          <input
          className='border-2 border-black rounded text-center'
            type="text"
            name="staffId"
            value={formData.staffId}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        {error && <p>{error}</p>}
        <button type="submit" className='px-3 py-2 rounded bg-blue-600 text-white'>Register</button>
      </form>
    </div>
  );
};

export default Register;
