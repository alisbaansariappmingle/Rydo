import React, {useState} from 'react';
import TablePagination from '@mui/material/TablePagination';
const payments = [
  {
    id: 1,
    userName: 'Alish',
    riderName: 'Sid',
    amount: '₹250',
    method: 'Credit Card',
    date: '2024-11-01',
    status: 'Paid',
  },
  {
    id: 2,
    userName: 'Sana',
    riderName: 'Sid',
    amount: '₹300',
    method: 'UPI',
    date: '2024-11-05',
    status: 'Pending',
  },
  {
    id: 3,
    userName: 'Rahul',
    riderName: 'Sid',
    amount: '₹200',
    method: 'Cash',
    date: '2024-11-07',
    status: 'Failed',
  },
];

// const getStatusStyle = (status) => {
//   switch (status) {
//     case 'Paid':
//       return 'text-green-600';
//     case 'Pending':
//       return 'text-yellow-600';
//     case 'Failed':
//       return 'text-red-600';
//     default:
//       return 'text-gray-600';
//   }
// };

const PaymentList = () => {
  const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(3);
  
      const handleChangePage = (event, newPage) => {
          setPage(newPage);
      };
  
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
      };
  
  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Payments & Transactions</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#4f4e4a] text-left text-white">
              <th className="px-7 py-3">Payment ID</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Rider Name</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Payment Type</th>
              <th className="px-4 py-">Date</th>
              {/* <th className="px-4 py-3">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {payments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payment) => (
              <tr key={payment.id} className="border-t hover:bg-gray-50">
                <td className="px-7 py-3">{payment.id}</td>
                <td className="px-4 py-3">{payment.userName}</td>
                <td className="px-4 py-3">{payment.riderName}</td>
                <td className="px-4 py-3">{payment.amount}</td>
                <td className="px-4 py-3">{payment.method}</td>
                <td className="px-4 py-3">{payment.date}</td>
                {/* <td className={`px-4 py-3 font-semibold ${getStatusStyle(payment.status)}`}>
                  {payment.status}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <TablePagination
                    component="div"
                    count={payments.length}
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

export default PaymentList;
3