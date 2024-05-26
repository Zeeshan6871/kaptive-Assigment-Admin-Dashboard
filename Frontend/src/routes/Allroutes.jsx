import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin";
import App from "../App";
// import MainDashboard from "../pages/MainDasboard";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Dashboard from "../pages/MUIDashboard";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default Allroutes;
