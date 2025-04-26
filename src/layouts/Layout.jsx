import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login.jsx";
import VerificationLogin from "../components/Login/VerificationLogin.jsx";

import Dashboard from "../pages/Dashboard";
// driver management
import DriverManagement from "../pages/Analytics/DriverManagement/DriverManagement.jsx";
import ProfileAction from "../pages/Analytics/DriverManagement/ProfileAction.jsx";
// user management
import UserManagement from "../pages/Analytics/UserManagement/UserManagement.jsx"
import ProfileSection from "../pages/Analytics/UserManagement/ProfileSection.jsx"; 
// ride management
import RideManagement from "../pages/Analytics/RideManagement/RideManagement.jsx"

import NotificationSupport from "../pages/Analytics/NotificationSupport.jsx";
// import BookingManagement from "../pages/Analytics/BookingManagement.jsx";
import TicketManagement from "../pages/Analytics/TicketManagement.jsx";
import RideDetails from "../pages/Analytics/RideManagement/RideDetails.jsx";
import BookingManagement from "../pages/Analytics/BookingManagement/BookingManagement.jsx";
import CarManagement from "../pages/Analytics/VehicleManagement.jsx/CarManagement.jsx";
import VehicleCategory from "../pages/Analytics/VehicleManagement.jsx/VehicleCategory.jsx";
import PriceSlot from "../pages/Analytics/VehicleManagement.jsx/PriceSlot.jsx";
// import Compalaints from "../pages/Analytics/Complaints/Complaints.jsx";


const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* user management */}
        <Route path="user-management" element={<UserManagement />}/>
        <Route path="/profile-section" element={<ProfileSection />} />
        {/* ----------- */}
        <Route path="ride-management" element={<RideManagement/>}/>
        <Route path="ride-details" element={<RideDetails/>}/>
        <Route path="booking" element={<BookingManagement/>}/>
        <Route path="notification-support" element={<NotificationSupport/>}/>
        
        <Route path="/settings" element={<h3>Settings</h3>} />
        <Route path="/login" element={<Login />} />
        <Route path="/verificationadmin" element={<VerificationLogin />} />
    
        {/* driver managemnt */}
        <Route path="/driver-management" element={<DriverManagement />} />
        <Route path="/driver-details" element={<ProfileAction/>} />
        {/* -------------car management---------------- */}
        <Route path="/car-management" element={<CarManagement/>}/>

       {/* Booking Management */}
       {/* <Route path="/booking-management" element={<BookingManagement />}/> */}
       {/* ticket management */}
       <Route path="/ticket-management" element={<TicketManagement/>}/>
       <Route path="/category" element={<VehicleCategory/>}/>
       <Route path="/price-slot" element={<PriceSlot/>}/>
       {/* <Route path="/complaints" element={<Compalaints/>}/> */}
        <Route path="*" element={<h2>404, Page Not Found</h2>} />
      </Routes>
    </>
  );
};

export default Layout;
