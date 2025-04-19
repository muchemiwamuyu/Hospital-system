import React from 'react'

function DoctorDashboard() {
  return (
    <div className='absolute w-4xl m-2 rounded'>
      <h1 className='text-2xl font-bold'>Hello there</h1>
      <br />
      <div className='bg-gray-600 h-58 flex'>
        <div className='w-1/2'>
          <h2 className='text-2xl font-extralight text-center'>Profile ~ </h2>
          <div id='profile-image' className='w-30 h-30 rounded-full bg-white border-2 border-gray-700 mt-7 ml-5 bg-cover bg-center' style={{backgroundImage: "url('/muhindi.jpg')"}}></div>
          <div id='names' className='mt-[-90px] ml-52 space-y-3 m-2'>
            <input type="text" className='border-2 border-black rounded text-center' value={"doctor mike"} readOnly/>
            <br />
            <input type="text" className='border-2 border-black rounded text-center' value={"NOV-3445"} readOnly/>
          </div>

        </div>
        <div className='w-1/2'>
          <div className='h-1/2'>
            <input type="text" className='border-2 border-black px-8 py-8 m-2' placeholder='add scedhules and appointments'/>
            <button className='px-3 py-3 bg-blue-700'>Add to scedhule</button>
          </div>
          <div className='h-1/2 text-center'>
            <h3>Your added Scedhules</h3>
          </div>
        </div>

      </div>
      <br />
      <div className=' h-58'>
        <h4 className='text-2xl underline font-semibold text-center'>Nova-Care Staff Blog</h4>
        <div className='bg-gray-600 h-45 rounded shadow-2 shadow-black m-2 flex'>
          <div className='w-1/2'>
            <p className='m-2'>Nova-news</p>
            <div className='w-3/4 m-2'>
              <p>Hello, news for nova care will appear here</p>
            </div>
          </div>
          <div className='w-1/2 bg-white flex items-center justify-center'>
            <div className='w-3/4  m-2 grid justify-center space-y-3 p-3'>
            <button className=' bg-rose-400'>Post</button> 
            <button className=' bg-rose-400'>More</button> 
            <button className=' bg-rose-400'>Talk to admin</button> 
            <button className=' bg-rose-400'>Create thread</button>
            </div>
          </div>

        </div>
      
      </div>
      
    </div>
  )
}

export default DoctorDashboard