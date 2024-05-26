import React, { useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { HiOutlineDocumentReport, HiOutlineLogout } from "react-icons/hi";
import { FaBinoculars } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlelogout = () => {
    fetch("http://localhost:8080/users/logout", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "User logged out successfully") {
          localStorage.removeItem("userToken");
          window.location.href = "/";
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        className="hamburger"
        onClick={toggleSidebar}
        style={{ background: "none", border: "none", color: "white" }}
      >
        <FaBars size={24} />
      </button>
      <h2>PLSE</h2>
      <nav>
        <ul>
          <li>
            <IoStatsChartSharp />
            <a href="#charts">Charts</a>
          </li>
          <li>
            <FaTableList />
            <a href="#tables">Tables</a>
          </li>
          <li>
            <HiOutlineDocumentReport />
            <a href="#reports">Reports</a>
          </li>
          <li>
            <FaBinoculars />
            <a href="#forecast">Forecast</a>
          </li>
        </ul>
      </nav>
      <footer
        style={{
          position: "fixed",
          left: "10px",
          bottom: "10px",
          width: "100%",
        }}
      >
        <button
          style={{ display: "flex", alignItems: "center" }}
          onClick={handlelogout}
        >
          <HiOutlineLogout size={20} />
          <span style={{ marginLeft: "10px" }}>Logout</span>
        </button>
      </footer>
    </div>
  );
};

export default Sidebar;
