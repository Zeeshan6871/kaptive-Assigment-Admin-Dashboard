import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/DashBoard";
function MainDashboard() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default MainDashboard;
