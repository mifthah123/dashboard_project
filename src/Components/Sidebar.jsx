import React from "react";
import "./Sidebar.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AddBoxIcon from "@mui/icons-material/AddBox";
import QuizIcon from "@mui/icons-material/Quiz";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Dashboard from "@mui/icons-material/Dashboard";
import CloseIcon from "@mui/icons-material/Close";
const Sidebar = ({ menuBar, setMenuBar }) => {
  return (
    <div className={menuBar}>
      <button className="close-icon" onClick={() => setMenuBar("sidebar")}>
        <CloseIcon />
      </button>
      <div className="navbar-left">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/11/27/PB-logo-design-vector-Graphics-20830993-1-580x386.jpg"
          alt=""
          height={"80px"}
        />
      </div>
      <div className="sidebar__container">
        <div className="profile">
          <img
            src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/878204_v9_bc.jpg"
            alt="profile"
          />
          <div className="profile-title">
            <h1 style={{ fontSize: "15px" }}>Muhammed Mifthah</h1>{" "}
            <ArrowForwardIosSharpIcon
              style={{
                fontSize: "small",
                marginTop: "15px",
                marginLeft: "5px",
                color: "blue",
              }}
            />
          </div>
          <p>mifthahmuhammed 792@gmail.com</p>
        </div>
        <div className="options">
          <div className="sidebar-options">
            <Dashboard /> Dashboard
          </div>
          <div className="sidebar-options">
            <LocalFloristIcon />
            Perks
          </div>
          <div className="sidebar-options">
            <AddBoxIcon />
            Addons
          </div>
          <div className="sidebar-options">
            <QuizIcon />
            FAQ
          </div>
          <div className="sidebar-options">
            <HeadsetMicIcon />
            Support
          </div>
        </div>
        <div className="Logout">
          <h4>Logout</h4>
          <LogoutOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
