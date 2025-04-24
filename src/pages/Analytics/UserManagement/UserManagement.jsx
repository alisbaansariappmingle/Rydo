import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UsersManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@example.com",
      contact: "+91-9876543210",
      city: "Noida"
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      contact: "+91-9012345678",
      city: "Noida"
    },
  ]);

  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  const handleUser = (id) => {
    navigate("/profile-section");
  };

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Users Management</h2>

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
            <tr className="bg-[#53514d] text-left text-sm font-semibold text-white">
              <th className="px-4 py-3">Id</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.length > 0 ? (
              filteredUser.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.contact}</td>
                  <td className="px-4 py-3">{user.city}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={handleUser}
                      className=" hover:text-blue-800"
                      title="View Profile"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
