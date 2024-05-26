import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/DashBoard";
import SignIn from "./pages/signin";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <Allroutes />
    // <SignIn />
  );
}

export default App;
