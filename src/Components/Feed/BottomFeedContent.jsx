import React from "react";
import "./BottomFeedContent.css";

const BottomFeedContent = (props) => {
  return (
    <div className="bottom-feed-contents">
      <div className="left">
        <button className={props.classNameOne}>{props.startButton}</button>
        <h1>{props.title}</h1>
        <span style={{ textAlign: "left" }}>{props.details}</span>
        <button className={props.classNameTwo}>{props.buttonTitle}</button>
      </div>
    </div>
  );
};

export default BottomFeedContent;
