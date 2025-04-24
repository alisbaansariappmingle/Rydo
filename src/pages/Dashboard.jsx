import { useState } from "react";
import { FaCar, FaUserTie, FaTimes } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  PieChart,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Users", value: 400 },
  { name: "Drivers", value: 300 },
  { name: "Rides", value: 200 },
];

const pieData = [
  { name: "Total Drivers", value: 300 },
  { name: "Active Drivers", value: 200 },
];

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const ticketsData = [
    { id: 1, issue: "Payment issue", status: "Pending", date: "2024-11-10" },
    { id: 2, issue: "Driver not showing", status: "Resolved", date: "2024-11-09" },
    { id: 3, issue: "App crash", status: "In Progress", date: "2024-11-08" },
  ];

  const documentsData = [
    { id: 1, driver: "John Doe", document: "License Renewal", dueDate: "2024-11-15" },
    { id: 2, driver: "Jane Smith", document: "Insurance Update", dueDate: "2024-11-18" },
    { id: 3, driver: "Bob Brown", document: "Background Check", dueDate: "2024-11-20" },
  ];

  return (
    <div className="bg-white text-gray-800 p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Filter Section */}
        {/* <div className="flex flex-wrap gap-4 py-5">
          {[
            "Today",
            "Yesterday",
            "7 Days",
            "14 Days",
            "This Month",
            "Custom",
          ].map((filter) => (
            <button
              key={filter}
              className={`p-2 rounded-md ${
                selectedFilter === filter
                  ? "bg-[#fac02e] text-white font-bold"
                  : "bg-yellow-200 text-black font-bold"
              }`}
              onClick={() => {
                setSelectedFilter(filter);
                setIsCalendarOpen(filter === "Custom");
              }}
            >
              {filter}
            </button>
          ))}
        </div> */}

        {/* Show calendar if "Custom" is selected */}
        {isCalendarOpen && selectedFilter === "Custom" && (
          <div className="absolute top-20 bg-yellow p-5 shadow-lg border rounded-md z-1 right-0">
            <div className="flex justify-end">
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="text-gray-500 hover:text-red-500 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
                className="bg-yellow border border-[#fac02e] rounded-lg shadow-lg p-4"
                calendarClassName="react-datepicker__header bg-[#fac02e] text-white p-4 "
                
            />
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid gap-9 mb-6 md:grid-cols-4 justify-center items-center">
        <div className="p-4  shadow-md rounded-lg flex items-center">
          <div className="bg-yellow-300 p-4 rounded-full flex items-center justify-center">
            <PiSteeringWheelFill className="text-black-500" size={24} />
          </div>
          <div className="ml-4">
            <h3 className="text-md font-semibold text-gray-700">Total Drivers</h3>
            <div className="text-2xl font-bold text-black">23</div>
          </div>
        </div>
        <div className="p-4  shadow-md rounded-lg flex items-center">
          <div className="bg-yellow-300 p-4 rounded-full flex items-center justify-center">
            <FaUserTie className="text-black-500" size={24} />
          </div>
          <div className="ml-4">
            <h3 className="text-md font-semibold text-gray-700">Total Users</h3>
            <div className="text-2xl font-bold text-black">23</div>
          </div>
        </div>
        <div className="p-4 shadow-md rounded-lg flex items-center">
          <div className="bg-yellow-300 p-4 rounded-full flex items-center justify-center">
            <FaCar className="text-black-500" size={24} />
          </div>
          <div className="ml-4">
            <h3 className="text-md font-semibold text-gray-700">Total Rides</h3>
            <div className="text-2xl font-bold text-black">23</div>
          </div>
        </div>
      </div>

      {/* Bar and Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-yellow-50 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-700">Total Drivers</h2>
          <select
            className="mt-4 p-2 bg-yellow-100 border border-yellow-400 rounded"
            onChange={(e) => setSelectedState(e.target.value)}
            value={selectedState}
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#fac02e">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#f92524" : "#09c1d9"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-6">
          <div className="bg-yellow-50 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-yellow-700">Total Users</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={50} fill="#368baa" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-yellow-50 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-yellow-700">Total Rides</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={50} fill="#74767c" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-yellow-50 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-yellow-700">Total Earning</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={50} fill="#17650c" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table for Tickets (Issues) */}
      {/* <div className="bg-yellow-50 shadow-lg rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Total Number of Tickets (Issues)</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">ID</th>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Issue</th>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Status</th>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {ticketsData.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-2 px-4 border-b">{ticket.id}</td>
                  <td className="py-2 px-4 border-b">{ticket.issue}</td>
                  <td className="py-2 px-4 border-b">{ticket.status}</td>
                  <td className="py-2 px-4 border-b">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Table for Documents */}
      {/* <div className="bg-yellow-50 shadow-lg rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Documents</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Driver</th>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Document</th>
                <th className="py-2 px-4 border-b-2 border-yellow-200 text-left text-yellow-700">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {documentsData.map((document) => (
                <tr key={document.id}>
                  <td className="py-2 px-4 border-b">{document.driver}</td>
                  <td className="py-2 px-4 border-b">{document.document}</td>
                  <td className="py-2 px-4 border-b">{document.dueDate}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
