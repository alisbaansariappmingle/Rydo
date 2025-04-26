import React, { useState } from 'react';


const CarDetails = () => {
    const [vehicleNo, setVehicleNo] = useState("");
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-medium mb-1">Vehicle Number</label>
                <input
                    type="text"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value)}
                    placeholder="Enter vehicle no"
                    className="block w-full border px-3 py-2 rounded-lg"
                    required
                />
            </div>
            <div>
                <label className="block font-medium mb-1">Price</label>
                <input
                    type="text"
                    accept=""
                    onChange={(e) => setCarImg(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div>


            <div>
                <label className="block font-medium mb-1">Car Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setCarImg(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Upload Driving License</label>
                <input
                    type="file"
                    onChange={(e) => setDoc(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block font-medium mb-1">Upload Insurance</label>
                <input
                    type="file"
                    onChange={(e) => setDoc(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block font-medium mb-1">Upload Vehicle Details</label>
                <input
                    type="file"
                    onChange={(e) => setDoc(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div>

            {/* <div>
                <label className="block font-medium mb-1">Driver Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setDriverImg(e.target.files[0])}
                    className="block w-full border px-3 py-2 rounded-lg"
                />
            </div> */}
        </div>
    );
};

export default CarDetails;
