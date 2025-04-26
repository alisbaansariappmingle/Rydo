import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { FaEye } from "react-icons/fa";

const BookingManagement = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const bookings = [
        {
            id: 1,
            userName: 'Alish',
            driverName: 'Sidharth',
            date: '11-11-2022',
            pickup: 'City Center',
            drop: 'Airport',
            status: 'Completed',
        },
        {
            id: 2,
            userName: 'Sana',
            driverName: 'Sidharth',
            date: '20-05-2024',
            pickup: 'Mall Road',
            drop: 'Central Park',
            status: 'Ongoing',
        },
        {
            id: 3,
            userName: 'Rahul',
            driverName: 'Sidharth',
            date: '20-12-2023',
            pickup: 'Bus Stand',
            drop: 'Railway Station',
            status: 'Cancelled',
        },
    ];

    return (
        <div className="p-6 bg-yellow-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Management</h2>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-[#53514d] text-left text-white">
                            <th className="px-4 py-3">Booking ID</th>
                            <th className="px-4 py-3">User Name</th>
                            <th className="px-4 py-3">Driver Name</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Pickup</th>
                            <th className="px-4 py-3">Drop</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booking) => (
                            <tr key={booking.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{booking.id}</td>
                                <td className="px-4 py-3">{booking.userName}</td>
                                <td className="px-4 py-3">{booking.driverName}</td>
                                <td className="px-4 py-3">{booking.date}</td>
                                <td className="px-4 py-3">{booking.pickup}</td>
                                <td className="px-4 py-3">{booking.drop}</td>
                                <td className={`px-4 py-3 font-semibold`}>
                                    {booking.status}
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
        </div>
    );
};

export default BookingManagement;
