import React from "react";
import TestIMG from "../assets/TestImg.png";
import KnowMoreButtton from "./KnowMoreButtton.jsx";

const HomeAboutUs = ({ onLinkClick }) => {
  return (
    <div className="s-about-us">
      <div className="s-about-us-left">
        <div className="s-about-us-heading">
          <span>ABOUT US</span>
          <p>Who we are</p>
        </div>
        <img className="s-about-us-left-img" src={TestIMG}></img>
        <p className="s-about-us-heading-para">
          Incorporated in 2017, MR Industries has established a respected
          position in the market. Operating as a Sole Proprietorship, Our fully
          equipped in-house capability for product and process design, as well
          as tooling and infrastructure development, enables us to deliver
          excellent products. With a dedicated team and advanced technology, we
          continuously strive to meet and exceed our customers' expectations.
        </p>
        <KnowMoreButtton
          KnowMoreText={"Know More"}
          onClick={() => onLinkClick("About Us")}
        />
      </div>
      <div className="s-about-us-right">
        <img src={TestIMG}></img>
      </div>
    </div>
  );
};

export default HomeAboutUs;
