import React from "react";
import TestIMG from "../assets/TestImg.png";
import KnowMoreButton from "./KnowMoreButtton";

const Services = ({ onLinkClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="s-service-banner">
        <div className="s-breadcrum">
          <p onClick={() => onLinkClick("Home")} style={{ cursor: "pointer" }}>
            Home
          </p>
          <p>/</p>
          <p style={{ fontWeight: "600" }}>Services</p>
        </div>
        <div className="s-service-banner-heading">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui platea condimentum Dui
            platea condimentum Dui platea condimentum
          </p>
        </div>
      </div>
      <div className="s-service-catalogue">
        <div className="s-about-us-left">
          <div className="s-about-us-heading">
            <p>Lorem Ipsum</p>
          </div>
          <p className="s-about-us-heading-para">
            Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis
            quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg
            hynm Lorem ipsum
          </p>
        </div>
        <div className="s-service-catalogue-container">
          <div className="s-service-catalogue-set-container">
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services1")}
                />
              </div>
            </div>
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services2")}
                />
              </div>
            </div>
          </div>
          <div className="s-service-catalogue-set-container">
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services3")}
                />
              </div>
            </div>
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services4")}
                />
              </div>
            </div>
          </div>
          <div className="s-service-catalogue-set-container">
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services5")}
                />
              </div>
            </div>
            <div className="s-service-catalogue-set">
              <div className="s-service-catalogue-set-img">
                <img src={TestIMG} alt=""></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Header</span>
                <p className="s-services-catalogue-set-para">
                  Office ipsum you must be muted. Problem exploratory switch
                  busy hard board. Better roll strategies clean existing
                  winning.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("Services6")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-wire-and-cable">
        <div className="s-about-us-left">
          <div className="s-about-us-heading">
            <p>Wire and Cable Capabilities</p>
          </div>
          <p className="s-about-us-heading-para">
            All wires will be purchased from standard, trusted suppliers
            according to the specified grades below, ensuring reliability and
            quality.
          </p>
        </div>
        <div className="s-wire-and-cable-container">
          <div
            className="s-wire-and-cable-set"
            style={{ background: "#5770AC" }}
          >
            <p style={{ fontWeight: "600", color: "#FFF" }}>Cable Type</p>
            <p style={{ fontWeight: "600", color: "#FFF" }}>
              Applicable Standards
            </p>
          </div>
          <div
            className="s-wire-and-cable-set"
            style={{ background: "#D3DDF8" }}
          >
            <p>Automotive Cables</p>
            <p>JIS C-3406; JASO D-609, DIN-72551 and ISO 6722</p>
          </div>
          <div className="s-wire-and-cable-set" style={{ background: "#FFF" }}>
            <p>Flexible Cables</p>
            <p>IS 694; UL-1007; 1013; 1015 & 1569</p>
          </div>
          <div
            className="s-wire-and-cable-set"
            style={{ background: "#D3DDF8" }}
          >
            <p>Multicore Cables</p>
            <p>IS 694.</p>
          </div>
          <div className="s-wire-and-cable-set" style={{ background: "#FFF" }}>
            <p>Battery Cables</p>
            <p>IS 694, JIS, JASO, DIN, ISO- 6722 & ISO-19642.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
