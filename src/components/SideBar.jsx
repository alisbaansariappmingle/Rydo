import { useState } from "react";
import {FaUsers } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";


import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isDeliveryDropdownOpen, setDeliveryDropdownOpen] = useState(false);

  const sideBarDatas = [
    {
      icon: <MdDashboard style={{ fontSize: "1.5rem" }} />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <FaCircleUser style={{ fontSize: "1.5rem" }} />,
      title: "Users Management",
      link: "/user-management",
    },
    {
      icon: <PiSteeringWheelFill style={{ fontSize: "1.5rem" }} />,
      title: "Drivers Management",
      link: "/driver-management",
    },
    {
      icon: <FaCar style={{ fontSize: "1.5rem" }} />,
      title: "Ride Management",
      link: "/ride-management",
    },
    {
      icon: <FaCar style={{ fontSize: "1.5rem" }} />,
      title: "Vehicle Management",
      link: "/car-management",
    },
    {
      icon: <FaUsers style={{ fontSize: "1.5rem" }} />,
      title: "Booking Management",
      link: "/booking",  
    },
   {
      icon: <FaTicket style={{ fontSize: "1.5rem" }} />,
      title: "Payment & Transaction",
      link: "/ticket-management",
    },
  
    {
      icon: <IoNotifications style={{ fontSize: "1.5rem" }} />,
      title: "Notifications",
      link: "/notification-support",
    },
    {
      icon: <MdOutlineSupportAgent style={{ fontSize: "1.5rem" }} />,
      title: "Compalaints",
      link: "/complaints",
    },
    {
      icon: <MdOutlineSupportAgent style={{ fontSize: "1.5rem" }} />,
      title: "SOS",
      link: "/sos",
    },
    {
      icon: <IoMdSettings style={{ fontSize: "1.5rem" }} />,
      title: "Logout",
      link: "/settings",
    },
  ];

  const handleProductsDropdownToggle = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleDeliveryDropdownToggle = () => {
    setDeliveryDropdownOpen(!isDeliveryDropdownOpen);
  };

  // Function to check if the link is active
  const isActive = (link) => location.pathname === link;

  return (
    <div className="w-64 h-[calc(100vh-64px)] bg-[#53514d] shadow-lg fixed top-[84px] left-0 overflow-y-auto sidebar-no-scrollbar">
      <section className="w-61 h-full">
        <ul className="rounded-xl flex flex-col">
          {sideBarDatas.map((sideBarData, idx) => (
            <li key={idx} className="my-1">
              {sideBarData.dropdown ? (
                <>
                  <div
                    className={`w-full p-4 hover:bg-white hover:shadow-xl flex justify-start items-center gap-4 cursor-pointer ${
                      isActive(sideBarData.link) 
                        ? "bg-white text-black" 
                        : "text-white hover:text-black"
                    }`}
                    onClick={
                      sideBarData.title === "Products Management" 
                        ? handleProductsDropdownToggle 
                        : handleDeliveryDropdownToggle
                    }
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                  </div>
                  {(sideBarData.title === "Products Management" ? isProductsDropdownOpen : isDeliveryDropdownOpen) && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className={`pl-5 p-2 m-2 hover:bg-white hover:text-black rounded-lg cursor-pointer ${
                            isActive(item.link) 
                              ? "bg-white text-black" 
                              : "bg-[#058334] text-white"
                          }`}
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  className={`w-full p-4 hover:bg-white hover:shadow-xl flex justify-start items-center gap-2 cursor-pointer ${
                    isActive(sideBarData.link) 
                      ? "bg-white text-black" 
                      : "text-white hover:text-black"
                  }`}
                  onClick={() => navigate(sideBarData.link)}
                >
                  <span>{sideBarData.icon}</span>
                  <span className="text-base">{sideBarData.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
      <style>
        {`
          .sidebar-no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .sidebar-no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default SideBar;