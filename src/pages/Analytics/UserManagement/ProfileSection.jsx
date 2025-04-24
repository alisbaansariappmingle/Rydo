import React from 'react';

const ProfileSection = () => {
  const userData = {
    1: {
      name: "Alish",
      email: "alish@example.com",
      mobileNo: "+123456789",
      profileImage: "https://via.placeholder.com/150", // Example profile image
      ridesDetails: [
        { 
          rideId: 1, 
          date: "2024-11-01", 
          pickup: "City Center", 
          drop: "Airport", 
          distance: "12 km", 
          price: "₹ 250", 
          status: "Complete" 
        },

      ]
    }
  };

  const user = userData[1];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Details</h2>

      {/* User Info */}
      <div className="bg-white p-10 rounded-xl shadow-md mb-6 flex flex-wrap items-center ">
       
        <div className="space-y-2 flex-1">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile No.:</strong> {user.mobileNo}</p>
        </div>
        <div className='flex-1 justify-end'>
       <img 
          src={user.profileImage} 
          alt="Profile" 
          className="w-24 h-24 rounded-xl object-cover border-2 border-gray-700 justify-end ml-auto"
        />
       </div>
      </div>

      {/* Ride Details Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ride History</h3>
        <div className="space-y-4">
          {user.ridesDetails.map((ride) => (
            <div key={ride.rideId} className="flex flex-col space-y-2 border-b pb-4">
              <p><strong>ID:</strong> {ride.rideId}</p>
              <p><strong>Date:</strong> {ride.date}</p>
              <p><strong>Pickup Location:</strong> {ride.pickup}</p>
              <p><strong>Drop Location:</strong> {ride.drop}</p>
              <p><strong>Distance:</strong> {ride.distance}</p>
              <p><strong>Price:</strong> {ride.price}</p>
              <p><strong>Status:</strong> {ride.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
