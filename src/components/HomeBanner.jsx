import React from "react";
import ISO from "../assets/iso.jpg";
import BannerImg from "../assets/Banner-Image.png";
import Logo1 from "../assets/imago.png";
import Logo2 from "../assets/emo.png";
import Logo3 from "../assets/Log9.png";
import Logo4 from "../assets/HTL_group.png";
import Logo5 from "../assets/CSE_power.png";
import Logo6 from "../assets/SunMobility.png";
import Logo7 from "../assets/vishesh.png";
import Logo8 from "../assets/exponent.png";
import Logo9 from "../assets/syrma.png";
import Logo10 from "../assets/amp.png";
import Logo11 from "../assets/aoSmith.png";

const HomeBanner = ({ onLinkClick }) => {
  return (
    <div className="s-banner">
      <div className="s-banner-main">
        <div className="s-banner-left">
          <div className="s-banner-left-main">
            <div className="s-banner-left-heading">
              <h1>MR INDUSTRIES</h1>
              <p>
                Leading Producer of Superior Wiring Harnesses, EV Battery
                Cables, and Power Cords. Your Trusted Source for All Industrial
                Electronics and Electrical Supplies.
              </p>
            </div>
            <img src={ISO} alt="ISO"></img>
          </div>
          <div className="s-banner-left-buttons">
            <div
              className="s-banner-contact-button"
              onClick={() => onLinkClick("Contact Now")}
            >
              <p>Contact Now</p>
            </div>
            <div
              className="s-banner-explore-button"
              onClick={() => onLinkClick("Services")}
            >
              <p>Explore</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.00047 6.99997C6.00047 7.54997 6.45047 7.99997 7.00047 7.99997H14.5905L5.71047 16.88C5.32047 17.27 5.32047 17.9 5.71047 18.29C6.10047 18.68 6.73047 18.68 7.12047 18.29L16.0005 9.40997V17C16.0005 17.55 16.4505 18 17.0005 18C17.5505 18 18.0005 17.55 18.0005 17V6.99997C18.0005 6.44997 17.5505 5.99997 17.0005 5.99997H7.00047C6.45047 5.99997 6.00047 6.44997 6.00047 6.99997Z"
                  fill="url(#paint0_linear_133_89)"
                  fillOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_133_89"
                    x1="5.41797"
                    y1="12.2912"
                    x2="18.0005"
                    y2="12.2912"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#12307B" />
                    <stop offset="1" stopColor="#569DD0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="s-banner-right">
          <img src={BannerImg} alt="MR Industries Banner Image" />
        </div>
      </div>
      <div className="s-banner-wrapper">
        <div className="s-banner-marquee">
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
          <img src={Logo5} />
          <img src={Logo6} style={{ transform: "scale(0.9)" }} />
          <img src={Logo7} />
          <img src={Logo8} />
          <img src={Logo9} />
          <img src={Logo10} />
          <img src={Logo11} />
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
          <img src={Logo5} />
          <img src={Logo6} style={{ transform: "scale(0.9)" }} />
          <img src={Logo7} />
          <img src={Logo8} />
          <img src={Logo9} />
          <img src={Logo10} />
          <img src={Logo11} />
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
          <img src={Logo5} />
          <img src={Logo6} style={{ transform: "scale(0.9)" }} />
          <img src={Logo7} />
          <img src={Logo8} />
          <img src={Logo9} />
          <img src={Logo10} />
          <img src={Logo11} />
        </div>
      </div>
      <div className="s-mobile-banner-logos">
        <div
          className="s-mobile-banner-logo-set"
          style={{ justifyContent: "space-between" }}
        >
          <img
            src={Logo6}
            alt="Sun Mobility"
            style={{ width: "100px", height: "52px" }}
          ></img>
          <img
            src={Logo1}
            alt="Imago"
            style={{ width: "80.283px", height: "37px" }}
          ></img>
          <img
            src={Logo5}
            alt="CSE Power"
            style={{ width: "88px", height: "34px" }}
          ></img>
        </div>
        <div
          className="s-mobile-banner-logo-set"
          style={{ justifyContent: "space-around" }}
        >
          <img
            src={Logo7}
            alt="Vishesh Innovative Technologies"
            style={{ width: "94px", height: "37px" }}
          ></img>
          <img
            src={Logo8}
            alt="Exponent Energy"
            style={{ width: "97px", height: "27px" }}
          ></img>
          <img
            src={Logo9}
            alt="Syrma SGS"
            style={{ width: "84px", height: "26px" }}
          ></img>
        </div>
        <div
          className="s-mobile-banner-logo-set"
          style={{ justifyContent: "space-evenly" }}
        >
          <img
            src={Logo10}
            alt="AMP"
            style={{ width: "48px", height: "20px" }}
          ></img>
          <img
            src={Logo4}
            alt="HTL Group"
            style={{ width: "100px", height: "20px" }}
          ></img>
          <img
            src={Logo2}
            alt="EMO"
            style={{ width: "66px", height: "15px" }}
          ></img>
        </div>
        <div
          className="s-mobile-banner-logo-set"
          style={{ justifyContent: "centre", gap:"24px" }}
        >
          <img
            src={Logo3}
            alt="Log9"
            style={{ width: "100px", height: "19px" }}
          ></img>
          <img
            src={Logo11}
            alt="AO Smith"
            style={{ width: "99px", height: "30px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
