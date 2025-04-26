import React, { useState } from 'react';
import CarDetails from './CarDetails';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AddCar = ({ closeModal }) => {
    const [service, setService] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [carImg, setCarImg] = useState(null);
    const [doc, setDoc] = useState(null);
    const [driverImg, setDriverImg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        closeModal(); // Close  after submission
    };

    return (
        <div className="fixed inset-0 bg-[#000000b8] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative mt-12">
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-5 px-2 py-2 text-[#ce621a] rounded-xl text-lg cursor-pointer font-bold"
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-4">Add New Vehicle</h2>

                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex-1'>
                            <label className="block text-md font-semibold mb-2">Vehicle Name</label>
                            <input
                                type="text"
                                // value={vehicleNo}
                                // onChange={(e) => setVehicleNo(e.target.value)}
                                placeholder="Enter vehicle Name"
                                className="block w-full border px-3 py-2 rounded-lg"
                                required
                            />

                        </div>
                        <div className='flex-1'>
                            <label className="block text-md font-semibold mb-2">Vehicle Icon</label>
                            <input
                                type="file"
                                accept="image/*"
                                // onChange={(e) => setVehicleNo(e.target.value)}
                                placeholder="Enter vehicle Name"
                                className="block w-full border px-3 py-2 rounded-lg"
                                required
                            />

                        </div>
                    </div>
                    <div>
                        <label className="block text-md font-semibold mb-2">Short Description</label>
                        <textarea
                            // value={vehicleNo}
                            // onChange={(e) => setVehicleNo(e.target.value)}
                            placeholder="Short Description"
                            className="block w-full border px-3 py-2 rounded-lg"
                            required
                        ></textarea>
                    </div>

                    {/* {service && <CarDetails />} */}

                    <div className="flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#ce621a] text-white rounded-lg cursor-pointer text-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
