import React, { useState } from "react";

const ProfileAction = () => {
  const [filter, setFilter] = useState("today");
  const [customDate, setCustomDate] = useState("");

  const driverData = [
    {
      id: 1,
      fullName: "Ayush Kumar",
      email: "ayush.kumar@example.com",
      street: "123 Elm St",
      city: "Patna",
      district: "Bihar",
      rides: 20,
      phone: "+91-1234567890",
      documents: {
        drivingLicence: "https://example.com/licence.jpg",
        aadharCard: "https://example.com/aadhar.jpg",
        panCard: "https://example.com/pan.jpg",
        registrationCertificate: "https://example.com/registration.jpg",
        insurance: "https://example.com/insurance.jpg",
        vehicleDetails: "https://example.com/vehicle-details.jpg",
      },
      rideDetails: [
        {
          userName: "Rahul Sharma",
          date: "2025-04-25",
          distance: "12km",
          pickup: "Noida",
          drop: "Delhi",
          amount: "₹150",
          status:"Complete",
          time:"10:30Am - 12:30Pm"
        },
        {
          userName: "Pooja Verma",
          date: "2025-04-20",
          distance: "8km",
          pickup: "Delhi",
          drop: "Noida",
          amount: "₹110",
           status:"Complete",
          time:"10:30Am - 12:30Pm"
        },
        {
          userName: "Amit Sinha",
          date: "2025-04-10",
          distance: "15km",
          pickup: "Gaziabad",
          drop: "Noida",
          amount: "₹180",
           status:"pending",
          time:"10:30Am - 12:30Pm"
        },
      ],
    },
  ];

  const handleStatusChange = (id, status) => {
    console.log(`Driver ID ${id} has been ${status}`);
  };

  // --------------- Date Filter ---------------
  const getFilteredRides = (rides) => {
    const today = new Date();

    return rides.filter((ride) => {
      const rideDate = new Date(ride.date);

      if (filter === "today") {
        return rideDate.toDateString() === today.toDateString();
      }
      if (filter === "yesterday") {
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        return rideDate.toDateString() === yesterday.toDateString();
      }
      if (filter === "7days") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 6);
        return rideDate >= sevenDaysAgo && rideDate <= today;
      }
      if (filter === "month") {
        return (
          rideDate.getMonth() === today.getMonth() &&
          rideDate.getFullYear() === today.getFullYear()
        );
      }
      if (filter === "custom") {
        if (!customDate) return false;
        const selectedDate = new Date(customDate);
        return rideDate.toDateString() === selectedDate.toDateString();
      }

      return true;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {driverData.map((driver) => {
        const filteredRides = getFilteredRides(driver.rideDetails || []);
        return (
          <div key={driver.id} className="bg-white rounded-lg shadow-lg p-6 mb-10">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                {driver.fullName}
              </h2>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Personal Information
                </h3>
                <p><strong>Email:</strong> {driver.email}</p>
                <p><strong>Contact:</strong> {driver.phone}</p>
                <p><strong>City:</strong> {driver.city}</p>
                <p><strong>Street:</strong> {driver.street}</p>
                <p><strong>District:</strong> {driver.district}</p>
                <p><strong>Rides Completed:</strong> {driver.rides}</p>
              </div>
            </div>

            {/* Documents */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Documents</h3>
              <div className="space-y-2 mt-4">
                {Object.entries(driver.documents).map(([key, url]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="capitalize font-medium">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Approve/Reject Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => handleStatusChange(driver.id, "Approved")}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusChange(driver.id, "Rejected")}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Reject
              </button>
            </div>

            {/*---------------- Ride Filter Section -----------*/}
            <div className="mt-12">
              <div className="flex flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Ride Details
                  </h3>
                </div>
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {["today", "yesterday", "7days", "month", "custom"].map(
                    (type) => (
                      <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`py-1 px-3 rounded border ${
                          filter === type
                            ? "bg-[#53514D] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        {type === "today"
                          ? "Today"
                          : type === "yesterday"
                          ? "Yesterday"
                          : type === "7days"
                          ? "Last 7 Days"
                          : type === "month"
                          ? "This Month"
                          : "Custom"}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Custom Date Picker */}
              {filter === "custom" && (
                <div className="flex items-center gap-4 mb-4">
                  {/* <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="border rounded px-2 py-1"
                  /> */}
                </div>
              )}

              {/* Filtered Rides */}
              {filteredRides.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  {filteredRides.map((ride, index) => (
                    <div key={index} className="p-4 gap-8 space-y-6">
                      <p>
                        <strong>User Name:</strong> {ride.userName}
                      </p>
                      <p>
                        <strong>Pickup:</strong> {ride.pickup}
                      </p>
                      <p>
                        <strong>Drop:</strong> {ride.drop}
                      </p>
                      <p>
                        <strong>Amount:</strong> {ride.amount}
                      </p>
                      <p>
                        <strong>Distance:</strong> {ride.distance}
                      </p>
                      <p>
                        <strong>Status:</strong> {ride.status}
                      </p>
                      <p>
                        <strong>Time:</strong> {ride.time}
                      </p>
                      <p>
                        <strong>Date:</strong> {ride.date}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mt-2">No rides found for selected filter.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileAction;
