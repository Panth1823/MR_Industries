import { useState } from "react";
import TestImg from "../assets/TestImg.png";
import productImg from "../assets/productImg.png";
import KnowMoreButtton from "./KnowMoreButtton.jsx";
const ServiceDetails = ({ onLinkClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const items = [
    { img: productImg, text: "Lorem Ipsum1" },
    { img: productImg, text: "Lorem Ipsum2" },
    { img: productImg, text: "Lorem Ipsum3" },
    { img: productImg, text: "Lorem Ipsum4" },
    { img: productImg, text: "Lorem Ipsum5" },
    { img: productImg, text: "Lorem Ipsum6" },
  ];

  const itemsToShow = 4;
  const endIndex = startIndex + itemsToShow;

  const handleRightClick = () => {
    if (endIndex < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
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
              Services Details
            </a>
          </div>
          <div className="p-breadcrumb-subtitle">
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className="p-img-desc-main">
          <div className="p-sd-img-cover">
            <img
              src={TestImg}
              alt="TestImg"
              style={{
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="p-img-desp-main">
            <div className="p-img-desc-top">
              <p>Lorem Ipsum</p>
              <span className="p-sd-li">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit. Orci
                pellentesque auctor massa ornare ultrices diam magnis.
              </span>
            </div>
            <div className="p-sd-list-container">
              <li className="p-sd-li">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit. Orci
                pellentesque auctor massa ornare ultrices diam magnis.
              </li>
              <li className="p-sd-li">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit. Orci
                pellentesque auctor massa ornare ultrices diam magnis.
              </li>
              <li className="p-sd-li">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit. Orci
                pellentesque auctor massa ornare ultrices diam magnis.
              </li>
              <li className="p-sd-li">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit. Orci
                pellentesque auctor massa ornare ultrices diam magnis.
              </li>
            </div>
            <div>
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

      <div className="s-product-gallery" style={{ gap: "40px" }}>
        <p
          className="s-product-gallery-heading"
          style={{width:"100%", borderBottom: "1px solid #E2E2E2", paddingBottom: "24px" }}
        >
          Manufactured Products
        </p>
        <div className="s-product-gallery-container">
          <div
            className="s-product-gallery-left-button"
            onClick={handleLeftClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
            >
              <path
                d="M31.8279 37.9055C32.6729 37.0605 32.6729 35.6955 31.8279 34.8505L23.4213 26.4438L31.8279 18.0372C32.6729 17.1922 32.6729 15.8272 31.8279 14.9822C30.9829 14.1372 29.6179 14.1372 28.7729 14.9822L18.8279 24.9272C17.9829 25.7722 17.9829 27.1372 18.8279 27.9822L28.7729 37.9272C29.5963 38.7505 30.9829 38.7505 31.8279 37.9055Z"
                fill="#355094"
              />
            </svg>
          </div>
          <div className="s-gallery-set-container">
            {items.slice(startIndex, endIndex).map((item, index) => (
              <div className="s-gallery-set" key={index}>
                <img src={item.img} alt={`Product ${index + 1}`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div
            className="s-product-gallery-right-button"
            onClick={handleRightClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
            >
              <path
                d="M20.1721 37.9055C19.3271 37.0605 19.3271 35.6955 20.1721 34.8505L28.5787 26.4438L20.1721 18.0372C19.3271 17.1922 19.3271 15.8272 20.1721 14.9822C21.0171 14.1372 22.3821 14.1372 23.2271 14.9822L33.1721 24.9272C34.0171 25.7722 34.0171 27.1372 33.1721 27.9822L23.2271 37.9272C22.4037 38.7505 21.0171 38.7505 20.1721 37.9055Z"
                fill="#355094"
              />
            </svg>
          </div>
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
                <img src={TestImg} alt="TestImg"></img>
                <div className="s-our-services-set-text">
                  <div className="s-our-services-set-heading">
                    <p>Header</p>
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
                    Office ipsum you must be muted. Problem exploratory switch
                    busy hard board. Better roll strategies clean existing
                    winning.
                  </p>
                </div>
              </div>
              <div className="s-our-services-set">
                <img src={TestImg} alt="TestImg"></img>
                <div className="s-our-services-set-text">
                  <div className="s-our-services-set-heading">
                    <p>Header</p>
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
                    Office ipsum you must be muted. Problem exploratory switch
                    busy hard board. Better roll strategies clean existing
                    winning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
