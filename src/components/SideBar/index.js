import React from "react";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Grid from "@mui/material/Grid";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./SideBarItems.js";
// import { bottomNavbarItems } from "./navbarItems";
// import { navbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import "./style.css";
// import AccountRoundedIcon from "@mui/icons-material/AccountCircle";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, NavLink } from "react-router-dom";
// import Cookie from "js-cookie";

const SideBar = () => {
  const navigate = useNavigate();

  const close = () => {
    document.querySelector(".sidebar").classList.toggle("close");
  };

  let activeStyle = {
    backgroundColor: "rgba(255,255,255, 0.7)",
    color: "#111",
  };

  return (
    <div className="sidebar close">
      <div className="sidebar-admin-profile spacing">
        <p>
          {/* <AccountRoundedIcon /> */}
        </p>
        <p className="sidebar-hide">Abdellatif</p>
      </div>
      <span onClick={close} className="sidebar-close-btn toggle">
        {/* <KeyboardArrowLeftRoundedIcon /> */}
      </span>
      <nav className="sidebar-nav">
        {mainNavbarItems.map((item, index) => {
          return (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={item.route}
              key={item.id}
              // onClick={() => navigate(item.route)}
              className="sidebar-links spacing hover"
            >
              <p>{item.icon}</p>
              <p className="sidebar-nav-text sidebar-hide">{item.label}</p>
            </NavLink>
          );
        })}
      </nav>
      <nav className="sidebar-bottom-nav">
        <NavLink to="/login" className="sidebar-logout spacing hover" >
          <p>
            {/* <LogoutRoundedIcon /> */}
          </p>
          <p className="sidebar-hide">Logout</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
