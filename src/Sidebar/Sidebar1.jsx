import React, { useState } from "react";
import "./sidebar1.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaUserFriends,
  FaShoppingBag,
  // FaProductHunt,
  FaThLarge,
  FaThList,
  FaFire,
  FaBell,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Navbar from '../Components/Navbar';
const Sidebar1 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => 
    setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin",
      name: "Admin",
      icon: <FaUserAlt />,
    },
    {
      path: "/userview",
      name: "User",
      icon: <FaUserFriends />,
    },
    {
      path: "/shopview",
      name: "Shop",
      icon: <FaShoppingBag />,
    },
    // {
    //     name:"Product",
    //     icon:<FaProductHunt/>
    // },
    {
      path: "/categoryview",
      name: "Pcategory",
      icon: <FaThLarge />,
    },
    {
      path: "/subcategoryview",
      name: "Psubcategory",
      icon: <FaThList />,
    },
    {
      path: "/offerview",
      name: "Offers",
      icon: <FaFire />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <FaBell />,
    }
  ];
  return (
    <>
      {/* <Navbar /> */}
      <div className="contains">
        <div style={{ width: isOpen ? "180px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              MCom
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar1;
