import React from "react";
import "./Feed.css";
import FeedContents from "./FeedContents";
import BottomFeedContent from "./BottomFeedContent";

const Feed = () => {
  const StarterDetails =
    "The quickest and easiest way to try Protocols with basic functionalities";
  const enterpriseDetails =
    "Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success";
  return (
    <div className="feed">
      <div className="top-feed">
        <div className="top-feed-heading">
          <span
            style={{ fontSize: "30px", marginTop: "30px", marginLeft: "20px" }}
          >
            Choose a plan thats right for you !
          </span>
        </div>

        <div className="top-feed-content">
          <FeedContents
            heading={"Basic"}
            price={"$ 9.99/mo"}
            className={"pkg-basic-button"}
            user={"Upto 25 Users "}
            storage={"Upto 25gb Storage"}
            email={"Email Support"}
          />
          <FeedContents
            heading={"Standard"}
            price={"$99.9/mo"}
            className={"pkg-standard-button"}
            user={"Upto 50 Users "}
            storage={"Upto 60gb Storage"}
            email={"Email+Chat Support"}
          />
          <FeedContents
            heading={"Premium"}
            price={"$199.9/mo"}
            className={"pkg-premium-button"}
            user={"Upto 75 Users "}
            storage={"Upto 100gb Storage"}
            email={"Email+Chat+Whatsapp Support"}
          />
        </div>
        <div className="bottom-feed-content">
          <BottomFeedContent
            startButton={"Free Forever"}
            buttonTitle={"Get Started"}
            details={StarterDetails}
            title={"Free Starter"}
            classNameOne={"free-starter-button"}
            classNameTwo={"start-starter-button"}
            user={"Upto 8 Users"}
            customization={
              "Baics of documents , Task Flow, Voting , Accounting , Banking , Notes , Investor , Director "
            }
          />
          <BottomFeedContent
            startButton={"Lets connect"}
            details={enterpriseDetails}
            buttonTitle={"Contact Us"}
            title={"Enterprise Plan"}
            classNameOne={"free-enterprise-button"}
            classNameTwo={"start-enterprise-button"}
            user={"More than 75 Users"}
            customization={"Customization of all other features"}
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
