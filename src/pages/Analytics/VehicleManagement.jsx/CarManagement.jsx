import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { FaEye } from "react-icons/fa";
import AddCar from './AddCar';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CarManagement = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const navigate = useNavigate();
    const bookings = [
        {
            id: 1,
            vehicleName: 'Car',
            vehicleIcon: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            vehicleDescription: 'Perfect for Everyday Drives',
        },
        {
            id: 2,
            vehicleName: 'Auto',
            vehicleIcon: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            vehicleDescription: 'Auto-Rickshaw for short trips',
        },
    ];

    const handleCategory = () => {
        navigate('/category')
    }

    return (
        <div className="p-6 bg-yellow-50 min-h-screen">
            <div className='flex flex-wrap'>
                <div className='flex-1'>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Management</h2>
                </div>
                <div className='flex justify-end flex-1'>
                    <button className='px-5  bg-[#53514d] rounded-lg text-white font-bold text-xl' onClick={() => setIsModalOpen(true)}>+ Add Vehicle</button>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg mt-5 ">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-[#53514d] text-left text-white">
                            <th className="px-4 py-3">Sr No.</th>
                            <th className="px-4 py-3">Vehicle Name</th>
                            <th className="px-4 py-3">Vehicle Image</th>
                            <th className="px-4 py-3">Short Description</th>
                            {/* <th className="px-4 py-3">Driver Image</th> */}
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booking) => (
                            <tr key={booking.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{booking.id}</td>
                                <td className="px-4 py-3">{booking.vehicleName}</td>
                                <td className="px-4 py-3">
                                    {booking.vehicleIcon && (
                                        <img src={booking.vehicleIcon} className="w-12 h-12 border-2 rounded-lg object-cover" />
                                    )}
                                </td>
                                <td className="px-4 py-3">{booking.vehicleDescription}</td>

                                {/* <td className="px-4 py-3">{booking.vehicleNo}</td> */}


                                <td className="px-4 py-3 space-x-4">
                                    <button
                                        className="hover:text-amber-700 cursor-pointer"
                                        onClick={() => alert('Edit Slot')}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="hover:text-red-600 cursor-pointer"
                                        onClick={() => alert('Delete Slot')}
                                    >
                                        <MdDelete />
                                    </button>
                                    <button
                                        className="hover:text-amber-700 cursor-pointer"
                                        onClick={handleCategory}
                                    >
                                        <FaArrowRight />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <TablePagination
                    component="div"
                    count={bookings.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className="flex justify-end"
                />
            </div>
            {isModalOpen && <AddCar closeModal={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default CarManagement;
