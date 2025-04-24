import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      contact: "+91-9876543210",
      status: "Approved",
      rides: 45,
      rating: 4.7,
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya.verma@example.com",
      contact: "+91-9876543211",
      status: "Rejected",
      rides: 20,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      contact: "+91-9876543212",
      status: "Rejected",
      rides: 15,
      rating: 4.0,
    },
  ]);

  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  const handleViewProfile = (id) => {
    navigate("/driver-details");
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Driver Management</h2>

      <div className="relative w-full md:w-1/2 ml-auto mb-4 flex">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-400 p-2 rounded-md pl-10 w-full"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#53514d] text-white text-sm font-semibold">
              <th className="px-10 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Contact</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Rides</th>
              <th className="px-10 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver) => (
                <tr
                  key={driver.id}
                  className="border-b hover:bg-gray-100 text-sm"
                >
                  <td className="px-10 py-3">{driver.id}</td>
                  <td className="px-4 py-3">{driver.name}</td>
                  <td className="px-4 py-3">{driver.email}</td>
                  <td className="px-4 py-3">{driver.contact}</td>
                  <td className="px-4 py-3">{driver.status}</td>
                  <td className="px-4 py-3">{driver.rides}</td>
                  <td className="px-10 py-3 text-right">
                    <button
                      onClick={() => handleViewProfile(driver.id)}
                      className=" hover:text-blue-800"
                      title="View Profile"
                    >
                      <FaEye className="inline-block text-lg" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No drivers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverManagement;
