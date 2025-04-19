import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Divide } from 'lucide-react';


function Encounter() {
    const { id } = useParams(); // Get patient ID from URL
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState('');
    const [encounter, setEncounter] = useState({
        mainComplaint: '',
        historyOfPresentIllness: '',
        diagnosis: '',
        prescribedMedication: '',
        treatmentPlan: '',
        labtestOrdered: '',
        followUp: ''
    })

    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEncounter(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const encounterRes = await axios.post('http://localhost:5000/encounter', encounter)
            alert(encounterRes.data.message)

            // getting the encounter id so as to push it to reports
            const encounterId = encounterRes.data._id

            navigate(`/results/${encounterId}`)



        } catch (error) {
            setErrors(error.encounterRes?.data?.message)
        }
    }

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/record/${id}`);
                setPatient(res.data.data);
            } catch (err) {
                console.error('Error fetching patient:', err);
                setError('Patient not found or server error.');
            }
        };

        if (id) {
            fetchPatient();
        } else {
            setError('No ID provided in URL.');
        }
    }, [id]);

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    if (!patient) {
        return <div className="p-4">Loading patient data...</div>;
    }



    return (
        <>
            <div>
                <h1 className='text-2xl font-bold text-center p-2'>Patient: {patient.name}</h1>
                <table className="w-full border-collapse border border-gray-300 p-2">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left border">Phone</th>
                            <th className="px-4 py-2 text-left border">Blood Pressure</th>
                            <th className="px-4 py-2 text-left border">Heart Rate</th>
                            <th className="px-4 py-2 text-left border">Temperature</th>
                            <th className="px-4 py-2 text-left border">Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-left border">{patient.phone}</td>
                            <td className="px-4 py-2 text-left border">{patient.bloodPressure} mm/Hg</td>
                            <td className="px-4 py-2 text-left border">{patient.heartRate} Bpm</td>
                            <td className="px-4 py-2 text-left border">{patient.temperature} °C</td>
                            <td className="px-4 py-2 text-left border">{patient.weight} Kg</td>
                        </tr>
                    </tbody>
                </table>
                <div className=' text-center m-2 rounded shadow-lg shadow-black'>
                    <form onSubmit={handleSubmit} className='space-x-3 text-lg font-bold w-1/2 grid mx-auto'>
                        <label>Main complaint</label>
                        <br />
                        <input name='mainComplaint' value={encounter.mainComplaint} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='main complaint' />
                        <br />
                        <label>History of present illness</label>
                        <br />
                        <input name='historyOfPresentIllness' value={encounter.historyOfPresentIllness} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='history of present illness' />
                        <br />
                        <label>Diagnosis</label>
                        <br />
                        <input name='diagnosis' value={encounter.diagnosis} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='diagnosis' />
                        <br />
                        <label>Prescribed Medication</label>
                        <br />
                        <input name='prescribedMedication' value={encounter.prescribedMedication} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='prescribed medication' />
                        <br />
                        <label>Treatment Plan</label>
                        <br />
                        <input name='treatmentPlan' value={encounter.treatmentPlan} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='treatment plan' />
                        <br />
                        <label>Lab Test ordered</label>
                        <br />
                        <input name='labtestOrdered' value={encounter.labtestOrdered} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='labtest ordered' />
                        <br />
                        <label>Follow up</label>
                        <br />
                        <input name='followUp' value={encounter.followUp} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='scedhule appointment' />
                        {/* <input name='referToSpecialist' value={encounter.followUp} onChange={handleChange} type="text" className='px-3 py-2 border-2 border-black rounded' placeholder='refer to specialist' /> */}
                        <br />
                        {errors && <p className='m-2 font-bold text-red-700'>{errors}</p>}
                        <button className='bg-blue-600 px-4 m-1 rounded'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Encounter