import React from 'react';

const RideDetails = () => {
    const ride = {
        id: 11,
        driverName: "John Doe",
        userName: "Alish",
        pickup: "Delhi",
        drop: "Airport",
        date: "2024-11-01",
        startTime: "10:45Am",
        endTime: "12:25Pm",
        amount: "₹500",
        distance: "12 km",
        status: "Completed"
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Ride Details</h2>

            <div className=" p-6 rounded-xl shadow-lg space-y-4 max-w-xl">
                <p><strong>Ride ID:</strong> {ride.id}</p>
                <p><strong>Driver Name:</strong> {ride.driverName}</p>
                <p><strong>User Name:</strong> {ride.userName}</p>
                <p><strong>Pickup Location:</strong> {ride.pickup}</p>
                <p><strong>Drop Location:</strong> {ride.drop}</p>
                <p><strong>Date : </strong> {ride.date}</p>
                <p><strong>Time:</strong>{ride.startTime}-{ride.endTime}</p>
                <p><strong>Amount:</strong> {ride.amount}</p>
                <p><strong>Distance:</strong> {ride.distance}</p>
                <p><strong>Status:</strong>
                    {ride.status}
                </p>
            </div>
        </div>
    );
};

export default RideDetails;
