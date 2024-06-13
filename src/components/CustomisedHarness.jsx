import { useEffect, useState } from "react";
import LV_Harness_MR_Industries from "../assets/serviceDetails/LV Harness/LV Harness - MR Industries.png";
import HV_Harness_MR_Industries from "../assets/serviceDetails/HV Harness/HV Harness - MR Industries.png";
import Custom_Harness_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness - MR Industries.png";
import Custom_Harness_01_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 01 - MR Industries.png";
import Custom_Harness_02_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 02 - MR Industries.png";
import Custom_Harness_03_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 03 - MR Industries.png";
import Custom_Harness_04_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 04 - MR Industries.png";
import Custom_Harness_05_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 05 - MR Industries.png";
import Custom_Harness_06_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 06 - MR Industries.png";
import Custom_Harness_07_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 07 - MR Industries.png";
import Custom_Harness_08_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 08 - MR Industries.png";
import Custom_Harness_09_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 09 - MR Industries.png";
import Custom_Harness_10_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 10 - MR Industries.png";
import Custom_Harness_11_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 11 - MR Industries.png";
import Custom_Harness_12_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness 12 - MR Industries.png";
import charger_cables_MR_Industries from "../assets/serviceDetails/charger cables/charger cables - MR Industries.png";

import ICE_Vehicle_Harness_01_MR_Industries from "../assets/serviceDetails/ICE Vehicle Harness/ICE Vehicle Harness 01 - MR Industries.png";
const CustomisedHarness = ({ onLinkClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenSizeCurrent = window.innerWidth;
      setItemsToShow(screenSizeCurrent < 1200 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: Custom_Harness_01_MR_Industries },
    { img: Custom_Harness_02_MR_Industries },
    { img: Custom_Harness_03_MR_Industries },
    { img: Custom_Harness_04_MR_Industries },
    { img: Custom_Harness_05_MR_Industries },
    { img: Custom_Harness_06_MR_Industries },
    { img: Custom_Harness_07_MR_Industries },
    { img: Custom_Harness_08_MR_Industries },
    { img: Custom_Harness_09_MR_Industries },
    { img: Custom_Harness_10_MR_Industries },
    { img: Custom_Harness_11_MR_Industries },
    { img: Custom_Harness_12_MR_Industries },
  ];

  useEffect(() => {
    setIsLeftDisabled(startIndex === 0);
    setIsRightDisabled(startIndex + itemsToShow >= items.length);
  }, [startIndex, itemsToShow, items.length]);

  const totalSets = Math.ceil(items.length / itemsToShow);
  const currentSet = Math.floor(startIndex / itemsToShow);

  const handleRightClick = () => {
    if (startIndex + itemsToShow < items.length) {
      setStartIndex(startIndex + itemsToShow);
    }
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsToShow);
    }
  };

  const handleDotClick = (index) => {
    setStartIndex(index * itemsToShow);
  };
  return (
    <>
      <div className="p-service-details-main">
        <div
          className="p-breadcrumb"
          style={{
            display: "flex",
            paddingBottom: "0",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div>
            <a
              onClick={() => onLinkClick("Home")}
              className="p-breadcrumb-current"
              style={{
                color: "var(--Blue-100, #9CAFDD)",
                fontWeight: "400",
                cursor: "pointer",
              }}
            >
              Home
            </a>{" "}
            <span
              style={{ color: "var(--Blue-100, #9CAFDD)", padding: "0 8px" }}
            >
              \
            </span>
            <a
              className="p-breadcrumb-current"
              onClick={() => onLinkClick("Services")}
              style={{
                color: "var(--Blue-100, #9CAFDD)",
                fontWeight: "400",
                cursor: "pointer",
              }}
            >
              Services
            </a>
            <span
              style={{ color: "var(--Blue-100, #9CAFDD)", padding: "0 8px" }}
            >
              \
            </span>
            <a
              style={{
                color: " var(--Blue-450, var(--blue, #355094))",
                fontWeight: "600",
              }}
            >
              Customised Wiring Harness Manufacturing
            </a>
          </div>
          <div className="p-breadcrumb-subtitle">
            <p>Customised Wiring harness</p>
          </div>
        </div>
        <div className="p-mobile-title">
          <h1>Customised Wiring harness</h1>
          <p>
            We engineer custom wiring harnesses tailored to your requirements,
            using advanced materials and precise manufacturing for optimal
            performance and durability.{" "}
          </p>
        </div>
        <div className="p-img-desc-main">
          <div className="p-sd-img-cover">
            <img
              src={Custom_Harness_MR_Industries}
              alt="Custom_Harness_MR_Industries"
              style={{
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                borderRadius: "8px",
                objectFit: "none",
              }}
            />
          </div>
          <div className="p-img-desp-main">
            <div className="p-img-desc-top">
              <p>Description</p>
              <span className="p-sd-li">
                We engineer custom wiring harnesses tailored to your
                requirements, using advanced materials and precise manufacturing
                for optimal performance and durability.
              </span>
            </div>
            <div className="p-sd-list-container">
              <li className="p-sd-li">
                We use premium materials to construct harnesses that meet
                industry standards for safety and reliability.
              </li>
              <li className="p-sd-li">
                Our state-of-the-art processes ensure each harness is crafted
                with superior accuracy and consistency.
              </li>
              <li className="p-sd-li">
                Every custom harness undergoes comprehensive testing to ensure
                exceptional performance and longevity.
              </li>
              <li className="p-sd-li">
                We guarantee our work, ensuring complete customer satisfaction
                with tailored solutions and unwavering support.
              </li>
            </div>
            <div className="p-enquire-now-btn-div">
              <div
                className="s-banner-contact-button"
                onClick={() => onLinkClick("Contact Now")}
              >
                <p>Enquire Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-product-gallery">
        <p
          className="p-product-gallery-heading"
          style={{
            width: "100%",
            borderBottom: "1px solid #E2E2E2",
            paddingBottom: "24px",
          }}
        >
          Manufactured Products
        </p>
        <div className="p-product-gallery-container">
          <div
            className={`p-product-gallery-left-button ${
              isLeftDisabled ? "disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
            >
              <path
                d="M42.8279 44.9055C43.6729 44.0605 43.6729 42.6955 42.8279 41.8505L34.4213 33.4438L42.8279 25.0372C43.6729 24.1922 43.6729 22.8272 42.8279 21.9822C41.9829 21.1372 40.6179 21.1372 39.7729 21.9822L29.8279 31.9272C28.9829 32.7722 28.9829 34.1372 29.8279 34.9822L39.7729 44.9272C40.5963 45.7505 41.9829 45.7505 42.8279 44.9055Z"
                fill="#12307B"
              />
            </svg>
          </div>
          <div className="p-gallery-set-container">
            {items
              .slice(startIndex, startIndex + itemsToShow)
              .map((item, index) => (
                <div className="p-gallery-set" key={index}>
                  <img src={item.img} alt={`Product ${index + 1}`} />
                  <p>{item.text}</p>
                </div>
              ))}
          </div>
          <div
            className={`p-product-gallery-right-button ${
              isRightDisabled ? "disabled" : ""
            }`}
            onClick={handleRightClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
            >
              <path
                d="M31.1721 44.9055C30.3271 44.0605 30.3271 42.6955 31.1721 41.8505L39.5787 33.4438L31.1721 25.0372C30.3271 24.1922 30.3271 22.8272 31.1721 21.9822C32.0171 21.1372 33.3821 21.1372 34.2271 21.9822L44.1721 31.9272C45.0171 32.7722 45.0171 34.1372 44.1721 34.9822L34.2271 44.9272C33.4037 45.7505 32.0171 45.7505 31.1721 44.9055Z"
                fill="#12307B"
              />
            </svg>
          </div>
        </div>
        <div className="p-gallery-dots">
          {Array.from({ length: totalSets }).map((_, index) => (
            <span
              key={index}
              className={`p-gallery-dot ${
                index === currentSet ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="s-our-services" style={{ gap: "40px" }}>
        <div
          className="s-our-services-heading"
          style={{ borderBottom: "1px solid #E2E2E2", paddingBottom: "24px" }}
        >
          <div className="s-about-us-heading">
            <p>Similar Services</p>
          </div>
        </div>
        <div className="s-our-services-container">
          <div className="s-our-services-set-container">
            <div className="s-our-services-two-set">
              <div className="s-our-services-set">
                <img
                  src={HV_Harness_MR_Industries}
                  alt="HV_Harness_MR_Industries"
                  style={{ objectFit: "none" }}
                ></img>
                <div className="s-our-services-set-text">
                  <div className="s-our-services-set-heading">
                    <p>High Voltage Harness</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      onClick={() => onLinkClick("HVHarness")}
                    >
                      <path
                        d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                        fill="#355094"
                      />
                    </svg>
                  </div>
                  <p>
                    Office ipsum you must be muted. Problem exploratory switch
                    busy hard board. Better roll strategies clean existing
                    winning.
                  </p>
                </div>
              </div>
              <div className="s-our-services-set">
                <img
                  src={LV_Harness_MR_Industries}
                  alt="LV_Harness_MR_Industries"
                  style={{ objectFit: "none" }}
                ></img>
                <div className="s-our-services-set-text">
                  <div className="s-our-services-set-heading">
                    <p>Low Voltage Harness</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      onClick={() => onLinkClick("LVHarness")}
                    >
                      <path
                        d="M6.00047 7.8877C6.00047 8.4377 6.45047 8.8877 7.00047 8.8877H14.5905L5.71047 17.7677C5.32047 18.1577 5.32047 18.7877 5.71047 19.1777C6.10047 19.5677 6.73047 19.5677 7.12047 19.1777L16.0005 10.2977V17.8877C16.0005 18.4377 16.4505 18.8877 17.0005 18.8877C17.5505 18.8877 18.0005 18.4377 18.0005 17.8877V7.8877C18.0005 7.3377 17.5505 6.8877 17.0005 6.8877H7.00047C6.45047 6.8877 6.00047 7.3377 6.00047 7.8877Z"
                        fill="#355094"
                      />
                    </svg>
                  </div>
                  <p>
                    Office ipsum you must be muted. Problem exploratory switch
                    busy hard board. Better roll strategies clean existing
                    winning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-mobile-our-services-container">
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img
                src={HV_Harness_MR_Industries}
                alt="HV_Harness_MR_Industries"
              ></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>High Voltage Harness </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  onClick={() => onLinkClick("HVHarness")}
                >
                  <path
                    d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                    fill="#355094"
                  />
                </svg>
              </div>
              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img
                src={LV_Harness_MR_Industries}
                alt="LV_Harness_MR_Industries"
              ></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Low Voltage Harness</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  onClick={() => onLinkClick("LVHarness")}
                >
                  <path
                    d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                    fill="#355094"
                  />
                </svg>
              </div>
              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img
                src={Custom_Harness_MR_Industries}
                alt="Custom_Harness_MR_Industries"
              ></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Customised Wiring harness </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  onClick={() => onLinkClick("CustomisedHarness")}
                >
                  <path
                    d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                    fill="#355094"
                  />
                </svg>
              </div>
              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img
                src={ICE_Vehicle_Harness_01_MR_Industries}
                alt="ICE_Vehicle_Harness_01_MR_Industries"
              ></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>ICE Vehicle wiring harness</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  onClick={() => onLinkClick("ICEHarness")}
                >
                  <path
                    d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                    fill="#355094"
                  />
                </svg>
              </div>
              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img
                src={charger_cables_MR_Industries}
                alt="charger_cables_MR_Industries"
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
                  onClick={() => onLinkClick("ChargerCables")}
                >
                  <path
                    d="M5.50049 5.83333C5.50049 6.29167 5.87549 6.66667 6.33383 6.66667H12.6588L5.25883 14.0667C4.93383 14.3917 4.93383 14.9167 5.25883 15.2417C5.58383 15.5667 6.10883 15.5667 6.43383 15.2417L13.8338 7.84167V14.1667C13.8338 14.625 14.2088 15 14.6672 15C15.1255 15 15.5005 14.625 15.5005 14.1667V5.83333C15.5005 5.375 15.1255 5 14.6672 5H6.33383C5.87549 5 5.50049 5.375 5.50049 5.83333Z"
                    fill="#355094"
                  />
                </svg>
              </div>
              <p>
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomisedHarness;
