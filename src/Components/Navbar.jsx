import React from "react";
import "./Navbar.css";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ setMenuBar }) => {
  return (
    <div className="navbar">
      <button className="open-icon" onClick={() => setMenuBar("sidebar-fixed")}>
        <MenuIcon />
      </button>

      <div className="navbar-right">
        <div className="dropdown-display"></div>
        <div className="dropdown">
          <KeyboardArrowDownSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
