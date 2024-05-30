import React from "react";
import ISO from "../assets/iso.jpg";
import BannerImg from "../assets/Banner-Image.png";
import Logo1 from "../assets/imago.png";
import Logo2 from "../assets/emo.png";
import Logo3 from "../assets/Log9.png";
import Logo4 from "../assets/HTL_group.png";
import Logo5 from "../assets/CSE_power.png";
import TestIMG from "../assets/TestImg.png";
import testimony from "../assets/testimony.jpg";
import ProductGallery from "./Productgallery.jsx";

const Homepage = ({ onLinkClick }) => {
  return (
    <div>
      <div className="s-banner">
        <div className="s-banner-main">
          <div className="s-banner-left">
            <div className="s-banner-left-main">
              <div className="s-banner-left-heading">
                <h1>MR INDUSTRIES</h1>
                <p>
                  Leading Producer of Superior Wiring Harnesses, EV Battery
                  Cables, and Power Cords. Your Trusted Source for All
                  Industrial Electronics and Electrical Supplies.
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
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
            <img src={Logo4} />
            <img src={Logo5} />
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
            <img src={Logo4} />
            <img src={Logo5} />
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
            <img src={Logo4} />
            <img src={Logo5} />
          </div>
        </div>
      </div>
      <div className="s-about-us">
        <div className="s-about-us-left">
          <div className="s-about-us-heading">
            <span>ABOUT US</span>
            <p>Who we are</p>
          </div>
          <p>
            Incorporated in 2017, MR Industries has established a respected
            position in the market. Operating as a Sole Proprietorship, Our
            fully equipped in-house capability for product and process design,
            as well as tooling and infrastructure development, enables us to
            deliver excellent products. With a dedicated team and advanced
            technology, we continuously strive to meet and exceed our customers'
            expectations.
          </p>
          <a onClick={() => onLinkClick("About Us")}>
            <p>Know More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.00047 7C6.00047 7.55 6.45047 8 7.00047 8H14.5905L5.71047 16.88C5.32047 17.27 5.32047 17.9 5.71047 18.29C6.10047 18.68 6.73047 18.68 7.12047 18.29L16.0005 9.41V17C16.0005 17.55 16.4505 18 17.0005 18C17.5505 18 18.0005 17.55 18.0005 17V7C18.0005 6.45 17.5505 6 17.0005 6H7.00047C6.45047 6 6.00047 6.45 6.00047 7Z"
                fill="#5770AC"
              />
            </svg>
          </a>
        </div>
        <div className="s-about-us-right">
          <img src={TestIMG}></img>
        </div>
      </div>
      <ProductGallery></ProductGallery>
      <div className="s-testimony">
        <div className="s-about-us-heading">
          <span>TESTIMONIALS</span>
          <p>Trust Their Experience</p>
        </div>
        <div className="s-testimony-set-container">
          <div className="s-testimony-set">
            <img src={testimony}></img>
            <div className="s-testimony-content">
              <span>Rajesh R</span>
              <p>
                MR Industries consistently delivers top-quality wiring harnesses
                and EV battery cables.
              </p>
            </div>
          </div>
          <div className="s-testimony-set">
            <img src={testimony}></img>
            <div className="s-testimony-content">
              <span>Anil S.</span>
              <p>
                Their power cords and industrial electronics always meet our
                high standards.
              </p>
            </div>
          </div>
          <div className="s-testimony-set">
            <img src={testimony}></img>
            <div className="s-testimony-content">
              <span>Vijay P.</span>
              <p>
                Reliable service and excellent electrical materials every time,
                without fail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
