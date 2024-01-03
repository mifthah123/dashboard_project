import React from "react";
import "./FeedContents.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const FeedContents = (props) => {
  return (
    <div className="top-feed-contents">
      <div className="top">
        <span style={{ fontSize: "30px" }}>{props.heading} </span>
        <span
          style={{ marginTop: "10px", fontSize: "20px", fontWeight: "lighter" }}
        >
          {props.price}
        </span>
        <button className={props.className}>Get started</button>
      </div>
      <div className="bottom">
        <p>what you'll get :</p>
        <div className="bottom-content">
          <div className="bottom-icon">
            <PersonOutlineOutlined style={{ fontSize: "18px" }} />
          </div>
          <span>{props.user}</span>
        </div>
        <div className="bottom-content">
          <div className="bottom-icon">
            <CloudUploadOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <span>{props.storage}</span>
        </div>
        <div className="bottom-content">
          <div className="bottom-icon">
            <EmailOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <span>{props.email}</span>
        </div>
        <p >EXPLORE FEATURES</p>
      </div>
    </div>
  );
};

export default FeedContents;
