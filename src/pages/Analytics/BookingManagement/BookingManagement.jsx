import React from 'react';

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Completed':
//       return 'text-green-600';
//     case 'Ongoing':
//       return 'text-yellow-600';
//     case 'Cancelled':
//       return 'text-red-600';
//     default:
//       return 'text-gray-600';
//   }
// };

const BookingManagement = () => {
    const bookings = [
        {
            id: 1,
            userName: 'Alish',
            date: '11-11-2022',
            pickup: 'City Center',
            drop: 'Airport',
            status: 'Completed',
        },
        {
            id: 2,
            userName: 'Sana',
            date: '20-05-2024',
            pickup: 'Mall Road',
            drop: 'Central Park',
            status: 'Ongoing',
        },
        {
            id: 3,
            userName: 'Rahul',
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
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Pickup</th>
                            <th className="px-4 py-3">Drop</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{booking.id}</td>
                                <td className="px-4 py-3">{booking.userName}</td>
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
            </div>
        </div>
    );
};

export default BookingManagement;
