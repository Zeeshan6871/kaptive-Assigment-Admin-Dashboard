import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteComponent = ({ children, ...props }) => {
  const userToken = localStorage.getItem("userToken");
  return userToken ? children : <Navigate to="/" />;
};

export default PrivateRouteComponent;
