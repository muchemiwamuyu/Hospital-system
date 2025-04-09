import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function RoleSelection() {

    const navigate = useNavigate();

    return (
        <>
            <div
                style={{ backgroundImage: "url('/nova.jpg')" }}
                className=" h-screen bg-cover bg-center "
            >
                <div className='text-center p-4 bg-white relative group'>
                <h1 className='text-3xl font-bold text-gray-700'>Hello there, <span className='text-[#2e3847]'>Welcome to Nova care Medical Staff Center</span></h1>
                <p className='text-lg'>Top-notch medical care</p>
                <div className='absolute group top-5 right-6'>
                
                </div>
                </div>

                <div className=' bg-white px-5 py-5 absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  flex justify-center space-x-3 rounded'>
                    <br />
                    <button className='px-5 py-3 bg-blue-700 rounded shadow-md shadow-black text-white' onClick={() => navigate("/login?role=Login")}>Login( staff )</button>

                </div>

            </div>
        </>

    )
}

export default RoleSelection