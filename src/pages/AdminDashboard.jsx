import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');
 

  useEffect(() => {
    console.log("fetching users")
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.error('Error fetching users:', err.response?.data || err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (!window.confirm('Delete this user?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Refresh the list
      setUsers(users.filter(user => user._id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err.response?.data || err.message);
    }
  };

  const handleEdit = (user) => {
    // For now just log it — you can open a modal or navigate to an edit page
    console.log('Editing user:', user);
    alert(`Pretend we're editing ${user.firstName}`);
  };

  return (
    <div className='p-2'>
      <h2 className="text-2xl font-bold mb-4">Active staff</h2>
      <div>
      <table className="w-full border p-3 text-center space-y-5 rounded-2xl">
        <thead>
          <tr className="bg-gray-600 text-lg">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Staff ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user._id} className='font-bold'>
              <td>{user.firstName} {user.secondName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.staffId}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="text-blue-600 hover:underline mr-2">Edit</button>
                <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
      
    </div>
  );
};

export default AdminDashboard;
