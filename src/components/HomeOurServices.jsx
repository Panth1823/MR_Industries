import React, { useState, useEffect } from "react";
import KnowMoreButtton from "./KnowMoreButtton.jsx";
import HV_Harness_06_MR_Industries from "../assets/serviceDetails/HV Harness/HV Harness 06 - MR Industries.png";
import HV_Harness_MR_Industries from "../assets/serviceDetails/HV Harness/HV Harness - MR Industries.png";
import LV_Harness_MR_Industries from "../assets/serviceDetails/LV Harness/LV Harness - MR Industries.png";
import Custom_Harness_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness - MR Industries.png";
import ICE_Vehicle_Harness_01_MR_Industries from "../assets/serviceDetails/ICE Vehicle Harness/ICE Vehicle Harness 01 - MR Industries.png";
import charger_cables_MR_Industries from "../assets/serviceDetails/charger cables/charger cables - MR Industries.png";

const HomeOurServices = ({ onLinkClick }) => {
  const [activeDot, setActiveDot] = useState(0);

  const slideToIndex = (index) => {
    const setContainer = document.querySelector(
      ".s-our-services-set-container"
    );
    const setWidth = setContainer.offsetWidth;
    setContainer.style.transform = `translateX(-${setWidth * index}px)`;
  };

  const handleDotClick = (index) => {
    setActiveDot(index);
    slideToIndex(index);
  };

  useEffect(() => {
    if (window.innerWidth > 1200) {
      const interval = setInterval(() => {
        const nextIndex = (activeDot + 1) % 3;
        setActiveDot(nextIndex);
        slideToIndex(nextIndex);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [activeDot]);

  return (
    <div className="s-our-services">
      <div className="s-our-services-heading">
        <div className="s-about-us-heading">
          <div
            className="s-mobile-our-services-heading"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span>OUR SERVICES</span>{" "}
            <KnowMoreButtton
              KnowMoreText={"View all"}
              onClick={() => onLinkClick("Services")}
            />
          </div>
          <p>Trusted Manufacturers of</p>
        </div>
        <KnowMoreButtton
          KnowMoreText={"View all"}
          onClick={() => onLinkClick("Services")}
        />
      </div>
      <div className="s-our-services-container">
        <div className="s-our-services-set-container">
          <div className="s-our-services-two-set">
            <div
              className="s-our-services-set"
              onClick={() => onLinkClick("EVHarness")}
            >
              <img
                src={HV_Harness_06_MR_Industries}
                alt="HV_Harness_06_MR_Industries"
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>EV Vehicle Harness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture EV harnesses using automated assembly,
                  precision crimping, and testing for applications like electric
                  cars.
                </p>
              </div>
            </div>
            <div
              className="s-our-services-set"
              onClick={() => onLinkClick("HVHarness")}
            >
              <img
                src={HV_Harness_MR_Industries}
                alt="HV_Harness_MR_Industries"
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>HV Harness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture HV harnesses using advanced wire extrusion,
                  automated crimping, and thorough testing for applications like
                  EVs.
                </p>
              </div>
            </div>
          </div>
          <div className="s-our-services-two-set">
            <div
              className="s-our-services-set"
              onClick={() => onLinkClick("LVHarness")}
            >
              <img
                src={LV_Harness_MR_Industries}
                alt="LV_Harness_MR_Industries"
                style={{ objectFit: "cover", scale: "0.8" }}
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>LV Harness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture LV harnesses using precision cutting and
                  automated crimping, for reliable applications in consumer
                  electronics.
                </p>
              </div>
            </div>
            <div
              className="s-our-services-set"
              onClick={() => {
                onLinkClick("CustomisedHarness");
              }}
            >
              <img
                src={Custom_Harness_MR_Industries}
                alt="Custom_Harness_MR_Industries"
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>Customised Wiring Harness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture customized wiring harnesses using CAD design,
                  precision cutting, and testing for specialized applications.
                </p>
              </div>
            </div>
          </div>
          <div className="s-our-services-two-set">
            <div
              className="s-our-services-set"
              onClick={() => {
                onLinkClick("ICEHarness");
              }}
            >
              <img
                src={ICE_Vehicle_Harness_01_MR_Industries}
                alt="ICE_Vehicle_Harness_01_MR_Industries"
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>ICE Harness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture ICE vehicle harnesses using automated wire
                  cutting, stripping, crimping, and soldering for precision and
                  reliability.
                </p>
              </div>
            </div>
            <div
              className="s-our-services-set"
              onClick={() => {
                onLinkClick("ChargerCables");
              }}
            >
              <img
                src={charger_cables_MR_Industries}
                alt="charger_cables_MR_Industries"
              ></img>
              <div className="s-our-services-set-text">
                <div className="s-our-services-set-heading">
                  <p>Charger Cables</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
                <p>
                  We manufacture durable charger cables with advanced extrusion
                  and precision soldering, ensuring high reliability and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s-our-services-dot-container">
          <div
            className={`s-our-services-dot ${
              activeDot === 0 ? "s-active-dot" : ""
            }`}
            onClick={() => handleDotClick(0)}
          ></div>
          <div
            className={`s-our-services-dot ${
              activeDot === 1 ? "s-active-dot" : ""
            }`}
            onClick={() => handleDotClick(1)}
          ></div>
          <div
            className={`s-our-services-dot ${
              activeDot === 2 ? "s-active-dot" : ""
            }`}
            onClick={() => handleDotClick(2)}
          ></div>
        </div>
      </div>
      <div className="s-mobile-our-services-container">
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("EVHarness")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={HV_Harness_06_MR_Industries}
              alt="HV_Harness_06_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>EV Vehicle Harness</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture EV harnesses using automated assembly, precision
              crimping, and testing for applications like electric cars.
            </p>
          </div>
        </div>
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("HVHarness")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={HV_Harness_MR_Industries}
              alt="HV_Harness_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>HV Harness</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture HV harnesses using advanced wire extrusion,
              automated crimping, and thorough testing for applications like
              EVs.
            </p>
          </div>
        </div>
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("LVHarness")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={LV_Harness_MR_Industries}
              alt="LV_Harness_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>LV Harness</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture LV harnesses using precision cutting and automated
              crimping, for reliable applications in consumer electronics.
            </p>
          </div>
        </div>
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("CustomisedHarness")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={Custom_Harness_MR_Industries}
              alt="Custom_Harness_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>Customised Wiring Harness</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture customized wiring harnesses using CAD design,
              precision cutting, and testing for specialized applications.
            </p>
          </div>
        </div>
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("ICEHarness")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={ICE_Vehicle_Harness_01_MR_Industries}
              alt="ICE_Vehicle_Harness_01_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>ICE Vehicle Wiring Harness</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture ICE vehicle harnesses using automated wire cutting,
              stripping, crimping, and soldering for precision and reliability.
            </p>
          </div>
        </div>
        <div
          className="s-mobile-our-services-set"
          onClick={() => onLinkClick("ChargerCables")}
        >
          <div className="s-mobile-our-services-set-img">
            <img
              src={charger_cables_MR_Industries}
              alt="charger_cables_MR_Industries"
              style={{ objectPosition: "top" }}
            ></img>
          </div>
          <div className="s-mobile-our-services-set-text">
            <div className="s-mobile-our-services-set-heading">
              <span>Charger Cables</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                  fill="#355094"
                />
              </svg>
            </div>
            <p>
              We manufacture durable charger cables with advanced extrusion and
              precision soldering, ensuring high reliability and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurServices;
