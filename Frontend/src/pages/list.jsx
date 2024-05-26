import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaBinoculars, FaTableList } from "react-icons/fa6";
import { HiOutlineDocumentReport, HiOutlineLogout } from "react-icons/hi";

const handlelogout = () => {
  fetch("https://kaptive-assigment-admin-dashboard.onrender.com/users/logout", {
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

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        {/* <DashboardIcon /> */}
        <IoStatsChartSharp />
      </ListItemIcon>
      <ListItemText primary="Charts" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <ShoppingCartIcon /> */}
        <FaTableList />
      </ListItemIcon>
      <ListItemText primary="Tables" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <PeopleIcon /> */}
        <HiOutlineDocumentReport />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <BarChartIcon /> */}
        <FaBinoculars />
      </ListItemIcon>
      <ListItemText primary="forecast" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton onClick={handlelogout}>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
        <HiOutlineLogout />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
