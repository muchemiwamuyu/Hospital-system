import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


const New = () => {
  return (
    <div className="space-y-2 p-4">
      <div role="alert" className=" bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105">
        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <p className=" font-semibold">Our Success - <span className='text-xs'>Nova-Care's success is defined by its ability to provide exceptional patient care, utilize advanced medical technology, maintain operational efficiency, and positively impact the community. High recovery and survival rates, low readmission numbers, and positive patient feedback indicate effective treatment and care.</span></p>
      </div>
      <div role="alert" className=" bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105">
        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <p className=" font-semibold">
          Info - <span className='text-xs'>Nova-care provides essential information that ensures patient safety, efficient treatment, and seamless healthcare operations. This includes details on medical services such as emergency care, specialized treatments, and surgical procedures.</span>
        </p>
      </div>
      <div role="alert" className=" bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105">
        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <p className=" font-semibold">
          Warning - <span className='text-xs'>Nova-care provides critical warnings to ensure patient safety, prevent medical errors, and maintain a secure healthcare environment. These warnings include alerts about infection control measures, such as mandatory hand hygiene, mask-wearing, and isolation protocols to prevent the spread of diseases.</span>
        </p>
      </div>
      {/*  */}
    </div>
  );
}

// typewriter component
const Typowriter = () => {
  return (
    <div className='text-2xl font-bold text-black'>
      <Typewriter
        words={['Hello, There!', 'Welcome to Nova-Care Medical Center']}
        loop={5}
        cursor
        cursorStyle="."
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}


function Home() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/data/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("failed to load services", err))
  }, []);



  return (
    <>
      <div>
        <Navbar />
        {/* hero section */}
        <div className='h-screen relative group'>
          <div className=' m-4 rounded-lg shadow-md p-4 shadow-black md:flex justify-between space-y-2'>
            <Typowriter />
            <img src="/muhindi.jpg" alt="" className='h-96 rounded' />
            <div className='md:absolute md:mt-[15%] bg-[#eeeeff] rounded shadow-md shadow-black p-4'>
              <div>
                <p className='text-lg font-bold'>Hospital emergency calls</p>
                <ol className='space-y-2'>
                  <input type="number" className='border-2 border-black rounded text-center font-bold text-red-700' readOnly value={"0723476589"} /> <br />
                  <input type="number" className='border-2 border-black rounded text-center font-bold text-red-700' readOnly value={"0737420582"} /> <br />
                  <input type="number" className='border-2 border-black rounded text-center font-bold text-red-700' readOnly value={"0784842993"} />
                </ol>
              </div>

            </div>
          </div>
        </div>

        {/* about us section */}
        <div id='about' className=' bg-[#f0ebe3]'>
          <h2 className='text-3xl text-center font-bold'>About us</h2>
          {/* main-content div */}
          <div className=' bg-[#eeeeff] md:flex md:m-2 md:p-4 items-center'>
            <div className='md:w-1/2 '>
              <New />
            </div>
            <div className='m-2 md:w-1/2 md:h-96 bg-cover bg-center rounded shadow-md shadow-black' style={{ backgroundImage: "url('/about.jpg')" }}></div>
          </div>

        </div>
        {/* services section */}
        <div id='services' className=' bg-[#eeeeff]'>
          <h2 className='text-2xl font-bold text-center'>Our services</h2>
          {/* content div */}
          <div className=' m-4 rounded space-y-2 md:grid grid-cols-3 space-x-2 items-center p-3'>
            {/* first div */}
            {services.map((service) => (
              <div key={service.id} className='p-4 space-y-4 bg-[#f0efe7] rounded'>
                <h3 className='text-xl font-bold'>{service.title}</h3>
                <label>{service.shortDesc}</label>
                <img src={service.image} alt="test-tubes image" className='rounded' />
                <Link to={`/service/${service.id}`}>
                  <button className='px-3 py-3 bg-black rounded text-white hover:bg-white hover:text-black duration-300'>More on Consultation</button>
                </Link>
              </div>
            ))}

            {/* 2nd div
          <div className=' bg-white text-black rounded shadow-md shadow-white p-4 space-y-2'>
            <h3 className='text-xl font-bold'>Surgery & Treatment</h3>
            <label>Advanced Surgical Procedures</label>
            <p className='text-xs'>We offer top-tier surgical treatments using the latest medical technology to ensure safe and effective procedures.</p>
            <img src="/surgery.jpg" alt="neurosergeons" className='rounded' />
            <button className='px-3 py-3 bg-black text-white rounded'>More on Surgery</button>
          </div>
          {/* 3rd div */}
            {/* <div className=' bg-white text-black rounded shadow-md shadow-white p-4 space-y-2'>
            <h3 className='text-xl font-bold'>Pharmacy & Medication</h3>
            <label>Quality Pharmacy Services</label>
            <p className='text-xs'>Access a wide range of prescription and over-the-counter medications at our fully stocked pharmacy.</p>
            <img src="/phamarcy.jpg" alt="medicine in a shelf" className='rounded' />
            <button className='px-3 py-3 bg-black text-white rounded'>More on Phamarcy</button>
          </div>  */}
          </div>
        </div>
        {/* contact us */}
        <div id='contact' className='bg-white mt-[5%] p-4'>
          <h2 className='text-center text-xl font-bold'>Contact us</h2>
          <form className="w-1/2 mx-auto mt-4 space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                I agree to the terms & privacy policy.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
        {/* footer */}
        <footer className='grid items-center bg-[#edefef]'>
          <div className="bg-white text-black m-3 py-8 rounded">
            <p className='absolute ml-[28%] mt-[520px] md:mt-[200px] md:ml-[38%] text-center'>&copy; Nova Care <br /> All Rights Reserved</p>
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

              {/* Company Info */}
              <div>
                <img src="/logo.svg" alt="logo image" className='w-42 m-2 mx-auto md:w-48' />
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="/" className="text-gray-700 hover:text-gray-600">Home</a></li>
                  <li><a href="#services" className="text-gray-700 hover:text-gray-600">Services</a></li>
                  <li><a href="#about" className="text-gray-700 hover:text-gray-600">About Us</a></li>
                  <li><a href="#contact" className="text-gray-700 hover:text-gray-600">Contact</a></li>
                  <li><a href="/roleselection" className="text-gray-700 hover:text-gray-600">Staff</a></li>

                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="mt-2 text-gray-700">Email: support@urbantrends.com</p>
                <p className="mt-2 text-gray-700">Phone: +254 712 345 678</p>
                <p className="mt-2 text-gray-700">Nairobi, Kenya</p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-700 hover:text-gray-600">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </footer>
      </div>
    </>


  )
}

export default Home