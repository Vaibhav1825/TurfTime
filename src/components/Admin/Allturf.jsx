import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from '../Heading';

const Allturf = () => {
  const [turfs, setTurfs] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/turfs');
      console.log(response.data);
      
      setTurfs(response.data);
    } catch (error) {
      console.error('Error fetching turfs:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (turfId) => {
    try {
      const confirmation = window.confirm("Are you sure you want to remove this turf?");
      if (!confirmation) return;

      const response = await axios.delete(`http://localhost:8080/admin/turfs/${turfId}`);

      if (response.status === 200) {
        setTurfs(prevTurfs => prevTurfs.filter(turf => turf.turfId !== turfId));
        console.log(`Turf with ID: ${turfId} has been deleted.`);
      }
    } catch (error) {
      console.error('Error deleting turf:', error);
    }
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
  };

  return (
    <div className="container mx-auto">
      <Heading title="All Turf" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {turfs.map((turf) => (
          <div
            key={turf._id}
            className="relative p-4 bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative z-10 p-4 flex flex-col h-full">
              <h4 className="text-xl font-semibold mb-2 text-white">{turf.name}</h4>
              <p className="text-gray-400 mb-4">Location: {turf.location}</p>
              <p className="text-gray-400 flex-grow">
                Description: {truncateDescription(turf.description, 20)}
              </p>

              <button
                className="mt-auto px-4 py-2 bg-red-500 text-white rounded self-end"
                onClick={() => handleCancel(turf.turfId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allturf;
