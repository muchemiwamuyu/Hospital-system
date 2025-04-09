import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedService = data.find((item) => item.id === id);
        setService(selectedService);
      })
      .catch((err) => console.error("Failed to load service details:", err));
  }, [id]);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen p-5 bg-[#fffafa] space-y-2">
      <h1 className='text-center text-lg font-bold'>{service.title}</h1>
      <img className='rounded shadow-md shadow-black' src={service.image2} alt={service.title} />
      <p className='text-lg font-extralight'>{service.details}</p>
      <h3 className='font-bold'>Services:</h3>
      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p><strong>Availability:</strong> {service.availability}</p>
      <p><strong>Contact:</strong> {service.contact}</p>
      <button className='px-3 py-3 bg-blue-900 rounded text-white shadow-md shadow-black'>Contact</button>
    </div>
  );
};

export default ServiceDetails;
