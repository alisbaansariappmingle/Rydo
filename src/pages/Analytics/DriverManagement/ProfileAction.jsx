import React from "react";

const ProfileAction = () => {
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
    },
   
  ];

  const handleStatusChange = (id, status) => {
    console.log(`Driver ID ${id} has been ${status}`);
    // You can integrate API logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {driverData.map((driver) => (
        <div
          key={driver.id}
          className="bg-white rounded-lg shadow-lg p-6 mb-10"
        >
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              {driver.fullName}
            </h2>
          </div>

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
        </div>
      ))}
    </div>
  );
};

export default ProfileAction;
