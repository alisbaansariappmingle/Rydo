import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RidesManagement = () => {
  const rideDetails = [
    {
      id: 1,
      driverName: "John Doe",
      userName: "Alish",
      pickup: "City Center",
      drop: "Airport",
      dateTime: "05-11-2023",
      amount: "₹25",
      distance: "12 km"
    },
    {
      id: 2,
      driverName: "Sophia Lee",
      userName: "Ravi Kumar",
      pickup: "Mall Street",
      drop: "Downtown",
      dateTime: "04-04-2024",
      amount: "₹15",
      distance: "8 km"
    },
    {
      id: 3,
      driverName: "David Smith",
      userName: "Anjali",
      pickup: "Tech Park",
      drop: "Railway Station",
      dateTime: "01-04-2024",
      amount: "₹30",
      distance: "18 km"
    }
  ];
  const navigate = useNavigate();
  navigate("/ride-details")
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Ride Management</h2>
        {/* <div className="flex gap-4 py-5 ml-auto">
          {["Total Rides", "Active", "Suspend", "Verified", "Not Verified"].map((filter) => (
            <button
              key={filter}
              className={`p-2 rounded-md ${
                selectedFilter === filter
                  ? "bg-[#d59c0c] text-white"
                  : "bg-yellow-100 text-black font-semibold"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div> */}
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
          <span className="text-xl font-semibold text-gray-700">Total Rides</span>
          <span className="text-2xl font-bold text-[#d59c0c]">23</span>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
          <span className="text-xl font-semibold text-gray-700">Ongoing</span>
          <span className="text-2xl font-bold text-[#d59c0c]">5</span>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
          <span className="text-xl font-semibold text-gray-700">Completed</span>
          <span className="text-2xl font-bold text-[#d59c0c]">15</span>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
          <span className="text-xl font-semibold text-gray-700">Cancelled</span>
          <span className="text-2xl font-bold text-red-700">3</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#4f4e4a] text-white font-semibold">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Driver Name</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Pickup</th>
              <th className="px-4 py-3">Drop</th>
              <th className="px-4 py-3">Date & Time</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Distance</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {rideDetails.map((ride) => (
              <tr key={ride.id} className="border-t">
                <td className="px-4 py-3">{ride.id}</td>
                <td className="px-4 py-3">{ride.driverName}</td>
                <td className="px-4 py-3">{ride.userName}</td>
                <td className="px-4 py-3">{ride.pickup}</td>
                <td className="px-4 py-3">{ride.drop}</td>
                <td className="px-4 py-3">{ride.dateTime}</td>
                <td className="px-4 py-3">{ride.amount}</td>
                <td className="px-4 py-3">{ride.distance}</td>
                <td className="px-4 py-3 cursor-pointer"><FaEye/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default RidesManagement;
