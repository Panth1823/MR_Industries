import MR_industries from "../assets/MR_industries.jpeg";
import { useState } from "react";
import Productgallery from "./Productgallery.jsx";
import productImg from "../assets/productImg.png";
import TestImg from "../assets/TestImg.png";
import ISO9001 from "../assets/ISO 9001.png";
import ISO14001 from "../assets/ISO 14001.png";
import ISO45001 from "../assets/ISO 45001.png";
import ReactCardFlip from "react-card-flip";
import "../santosh.css";

const About = ({ onLinkClick }) => {
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

  const [card1Flipped, setCard1Flipped] = useState(false);
  const [card2Flipped, setCard2Flipped] = useState(false);
  const [card3Flipped, setCard3Flipped] = useState(false);
  const [card4Flipped, setCard4Flipped] = useState(false);
  const [card5Flipped, setCard5Flipped] = useState(false);
  const [card6Flipped, setCard6Flipped] = useState(false);

  function flipCard(cardIndex) {
    switch (cardIndex) {
      case 1:
        setCard1Flipped(!card1Flipped);
        break;
      case 2:
        setCard2Flipped(!card2Flipped);
        break;
      case 3:
        setCard3Flipped(!card3Flipped);
        break;
      case 4:
        setCard4Flipped(!card4Flipped);
        break;
      case 5:
        setCard5Flipped(!card5Flipped);
        break;
      case 6:
        setCard6Flipped(!card6Flipped);
        break;
    }
  }

  // Version 1
  const [isVisible1, setIsVisible1] = useState(false);
  const [rotateDeg1, setRotateDeg1] = useState(0);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
    setRotateDeg1(isVisible1 ? 0 : 180);
  };

  // Version 2
  const [isVisible2, setIsVisible2] = useState(false);
  const [rotateDeg2, setRotateDeg2] = useState(0);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
    setRotateDeg2(isVisible2 ? 0 : 180);
  };

  // Version 3
  const [isVisible3, setIsVisible3] = useState(false);
  const [rotateDeg3, setRotateDeg3] = useState(0);

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
    setRotateDeg3(isVisible3 ? 0 : 180);
  };
  return (
    <div className="p-aboutUs">
      <div className="p-aboutUs-banner-background">
        <div className="p-breadcrumb">
          <a
            onClick={() => onLinkClick("Home")}
            className="p-breadcrumb-current"
            style={{ cursor: "pointer" }}
          >
            Home
          </a>
          <span style={{ color: "white", padding: "0 8px" }}>\</span>
          <a href="">About us</a>
        </div>
        <div className="p-aboutUs-text">
          <h1>About Us</h1>
        </div>
        <div className="p-aboutUs-description">
          <p>
            With over 14 years of experience, we’re your trusted partner for
            top-quality wiring harnesses, EV battery cables, and power cords.
            Count on us for all your industrial electronics and electrical
            supply needs.
          </p>
        </div>
      </div>
      <div className="p-about-section">
        <div>
          <div className="p-about-text">ABOUT</div>
          <div className="p-mr-inds-text">M R Industries</div>
          <div className="p-mr-desc">
            Incorporated in 2017, MR Industries has established a respected
            position in the market. Operating as a Sole Proprietorship, our
            office and manufacturing facility are located in a 5,000 sq. ft.
            building in Jigani, near Bengaluru. Currently, we utilize 2,000 sq.
            ft. and have 3,000 sq. ft. available to accommodate new customers.
            Our extensive manufacturing facilities enable us to deliver
            excellent products, ensuring high quality and precision in every
            order. With a dedicated team and advanced technology, we
            continuously strive to meet and exceed our customers expectations.
          </div>
        </div>
        <div className="p-industry-img">
          <img
            className="MR_industries"
            src={MR_industries}
            alt="MR Industries Building Image"
          />
          <div className="p-mr-desc mobile">
            Incorporated in 2017, MR Industries has established a respected
            position in the market. Operating as a Sole Proprietorship, our
            office and manufacturing facility are located in a 5,000 sq. ft.
            building in Jigani, near Bengaluru. Currently, we utilize 2,000 sq.
            ft. and have 3,000 sq. ft. available to accommodate new customers.
            Our extensive manufacturing facilities enable us to deliver
            excellent products, ensuring high quality and precision in every
            order. With a dedicated team and advanced technology, we
            continuously strive to meet and exceed our customers expectations.
          </div>
        </div>
      </div>
      <div className="p-what-we-do">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div className="p-about-text">OTHER PARTS AVAILABLE</div>
          <div className="p-mr-inds-text" style={{ paddingBottom: "0px" }}>
            Trading Parts Catalogue
          </div>
        </div>
        <div className="p-card-grid">
          <div className="p-card-row1">
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">Heat Shrinkable Sleeve</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">Lugs & terminals</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">All types of Automotive Connectors</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">VFG Sleeves lug</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">Mid joint and Lug terminals</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <svg
                  className="circle-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="93"
                  viewBox="0 0 94 93"
                  fill="none"
                >
                  <ellipse
                    cx="46.7663"
                    cy="46.4756"
                    rx="46.6027"
                    ry="45.7705"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="p-card-text">Ev Grade wires</p>
            </div>
          </div>
        </div>
        <div className="p-card-grid mobile">
          <div className="p-card-row1">
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">Heat Shrinkable Sleeve</p>
            </div>
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">Lugs & terminals</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">All types of Automotive Connectors</p>
            </div>
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">VFG Sleeves lug</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">Mid joint and Lug terminals</p>
            </div>
            <div className="p-card">
              <svg
                className="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="93"
                viewBox="0 0 94 93"
                fill="none"
              >
                <ellipse
                  cx="46.7663"
                  cy="46.4756"
                  rx="46.6027"
                  ry="45.7705"
                  fill="#D9D9D9"
                />
              </svg>
              <p className="p-card-text">Ev Grade wires</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-policy-mission">
        <div className="p-policy-text">
          <p className="p-our-policy">Our Policy</p>
          <div className="p-policy-desc-text">
            <p>
              We are committed to delivering quality products at the right cost,
              on time, through continual improvement of our quality management
              system and adherence to all applicable statutory and regulatory
              requirements.
            </p>
          </div>
        </div>
        <div className="p-policy-text">
          <p className="p-our-policy">Our Mission</p>
          <div className="p-policy-desc-text">
            <p>
              To be a preferred partner for our customers by addressing industry
              and customer needs, to act as a responsible corporate citizen with
              initiatives for environmental and community development, and to
              achieve a 25% year-over-year revenue increase.
            </p>
          </div>
        </div>
      </div>
      <div className="p-why-choose-us">
        <div className="p-choose-us-text">
          <p>Why Choose Us</p>
        </div>
        <div className="p-why-us-row">
          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>14+ years of Experience</p>
              <p className="p-why-us-subtext">
                Extensive expertise ensuring top-quality results.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Certified Quality</p>
              <p className="p-why-us-subtext">
                Industry-certified products for guaranteed reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="p-why-us-row" style={{ paddingTop: "24px" }}>
          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Customized Solutions</p>
              <p className="p-why-us-subtext">
                Tailored manufacturing to meet your exact needs.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Comprehensive Product Range</p>
              <p className="p-why-us-subtext">
                One-stop shop for all industrial electronics and electrical
                supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-where-we-work">
        <div>
          <p className="p-infrastructure">INFRASTRUCTURE</p>
          <p className="p-where-we-work-text">Where we Work</p>
        </div>
        <div>
          <p className="p-where-we-work-desc">
            Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis
            quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg
            hynm Lorem ipsum
          </p>
        </div>
        <div className="p-six-card-grid">
          <div className="card-row-top">
            <ReactCardFlip flipDirection="horizontal" isFlipped={card1Flipped}>
              <div className="front" onMouseEnter={() => flipCard(1)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(1)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Type</p>
                      <p>Max Crimp Cross</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>16 Ton</p>
                      <p>HF - 16 Ton </p>
                      <p>Gear Transmission</p>
                      <p>6.00 to 120.0 MM2 Cable</p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={card2Flipped}>
              <div className="front" onMouseEnter={() => flipCard(2)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(2)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>
                      Motorized Push Pull Load Tester With Variable Speed
                      Controller{" "}
                    </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p top">
                      <p>Capacity</p>
                      <p>Model</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p btm">
                      <p>0 to 500Kg</p>
                      <p>PPT - 500 </p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="card-row-mid">
            <ReactCardFlip flipDirection="horizontal" isFlipped={card3Flipped}>
              <div className="front" onMouseEnter={() => flipCard(3)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(3)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>Fully Automatic Cable Cutting and Stripping Machine </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p top">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Length Accuracy</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p btm">
                      <p>3.00 mm2 TO 16.00 mm2</p>
                      <p>UNISTRIP - 999 + </p>
                      <p>+- 0.5 mm( l*0.5%) Depends on the material</p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={card4Flipped}>
              <div className="front" onMouseEnter={() => flipCard(4)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(4)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p top">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Type</p>
                      <p>Max Crimp Cross</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p btm">
                      <p>16 Ton</p>
                      <p>HF - 16 Ton </p>
                      <p>Gear Transmission</p>
                      <p>6.00 to 120.0 MM2 Cable</p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="card-row-btm">
            <ReactCardFlip flipDirection="horizontal" isFlipped={card5Flipped}>
              <div className="front" onMouseEnter={() => flipCard(5)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(5)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p top">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Type</p>
                      <p>Max Crimp Cross</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p btm">
                      <p>16 Ton</p>
                      <p>HF - 16 Ton </p>
                      <p>Gear Transmission</p>
                      <p>6.00 to 120.0 MM2 Cable</p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={card6Flipped}>
              <div className="front" onMouseEnter={() => flipCard(6)}>
                <img
                  src={TestImg}
                  alt="TestImg"
                  style={{
                    width: "548px",
                    height: "457px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(6)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p top">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Type</p>
                      <p>Max Crimp Cross</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p btm">
                      <p>16 Ton</p>
                      <p>HF - 16 Ton </p>
                      <p>Gear Transmission</p>
                      <p>6.00 to 120.0 MM2 Cable</p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
        <div className="p-mb-container">
          <div className="p-mobile-card-container">
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              {/* <div className="p-card-back-main mobile">
                  <div className="p-card-back-title mobile">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility1}
                      style={{
                        cursor: "pointer",
                        transform: `rotate(${rotateDeg1}deg)`,
                      }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  <div className="p-card-back-subtext">
                    <div className="p-subtext-back-p">
                      <p>Capacity</p>
                      <p>Model</p>
                      <p>Type</p>
                      <p>Max Crimp Cross</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className="p-subtext-back-p">
                      <p>16 Ton</p>
                      <p>HF - 16 Ton </p>
                      <p>Gear Transmission</p>
                      <p>6.00 to 120.0 MM2 Cable</p>
                    </div>
                  </div>
                </div> */}
            </div>
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-mobile-card">
              <img
                src={TestImg}
                alt=""
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Productgallery />
      <div className="p-certifications-qualification">
        <div className="p-certi-quali-text">
          <p>Certifications & Qualifications</p>
        </div>
        <div className="p-certi-main">
          <div className="p-certi-quali-divs">
            <div className="p-certi-qual-card">
              <div className="p-top-half">
                <img src={ISO9001} alt="ISO 9001 Logo" />
                <p className="p-iso-title">ISO 9001:2015</p>
              </div>
              <div className="p-btm-half">
                <p>Quality Objectives</p>
                <li>Introducing new products to the market.</li>
                <li>
                  Eliminating errors and defects in products and services.
                </li>
                <li>
                  Improving product delivery lead time and customer
                  satisfaction.
                </li>
                <li>Reducing costs without compromising quality.</li>
              </div>
            </div>
          </div>

          <div className="p-certi-quali-divs">
            <div className="p-certi-qual-card">
              <div className="p-top-half">
                <img src={ISO14001} alt="ISO 14001 Logo" />
                <p className="p-iso-title">ISO 14001:2015</p>
              </div>
              <div className="p-btm-half">
                <p>Environmental Objectives</p>
                <li>Conserving valuable energy resources.</li>
                <li>Reducing, reusing, and recycling materials.</li>
                <li>Minimizing significant environmental impacts.</li>
                <li>Promoting sustainable business practices.</li>
              </div>
            </div>
          </div>

          <div className="p-certi-quali-divs">
            <div className="p-certi-qual-card">
              <div className="p-top-half">
                <img src={ISO45001} alt="ISO 45001 Logo" />
                <p className="p-iso-title">ISO 45001:2018</p>
              </div>
              <div className="p-btm-half">
                <p>Health & Safety Objectives</p>
                <li>
                  Improving ergonomic conditions in all production processes.
                </li>
                <li>
                  Preventing work-related ill health issues.Preventing
                  work-related ill health issues.
                </li>
                <li>Preventing workplace accidents effectively.</li>
                <li>Enhancing overall employee well-being and safety.</li>
              </div>
            </div>
          </div>
        </div>
        <div className="p-certi-main-container">
          <div className="p-certi-main mobile">
            <div className="p-certi-quali-divs">
              <div className="p-certi-qual-card">
                <div className="p-top-half">
                  <img src={ISO9001} alt="ISO 9001 Logo" />
                  <p className="p-iso-title">ISO 9001:2015</p>
                </div>
                <div className="p-btm-half">
                  <div
                    className="p-certi-mobile-div"
                    onClick={toggleVisibility1}
                  >
                    <p>Quality Objectives</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      style={{
                        cursor: "pointer",
                        transform: `rotate(${rotateDeg1}deg)`,
                      }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#355094"
                      />
                    </svg>
                  </div>

                  {isVisible1 && (
                    <div className="p-mobile-list">
                      <li>Introducing new products to the market.</li>
                      <li>
                        Eliminating errors and defects in products and services.
                      </li>
                      <li>
                        Improving product delivery lead time and customer
                        satisfaction.
                      </li>
                      <li>Reducing costs without compromising quality.</li>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-certi-quali-divs">
              <div className="p-certi-qual-card">
                <div className="p-top-half">
                  <img src={ISO14001} alt="ISO 14001 Logo" />
                  <p className="p-iso-title">ISO 14001:2015</p>
                </div>
                <div className="p-btm-half">
                  <div
                    className="p-certi-mobile-div"
                    onClick={toggleVisibility2}
                  >
                    <p>Environmental Objectives</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      style={{
                        cursor: "pointer",
                        transform: `rotate(${rotateDeg2}deg)`,
                      }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#355094"
                      />
                    </svg>
                  </div>

                  {isVisible2 && (
                    <div className="p-mobile-list">
                      <li>Conserving valuable energy resources.</li>
                      <li>Reducing, reusing, and recycling materials.</li>
                      <li>Minimizing significant environmental impacts.</li>
                      <li>Promoting sustainable business practices.</li>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-certi-quali-divs">
              <div className="p-certi-qual-card">
                <div className="p-top-half">
                  <img src={ISO45001} alt="ISO 45001 Logo" />
                  <p className="p-iso-title">ISO 45001:2018</p>
                </div>
                <div className="p-btm-half">
                  <div
                    className="p-certi-mobile-div"
                    onClick={toggleVisibility3}
                  >
                    <p>Health & Safety Objectives</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      style={{
                        cursor: "pointer",
                        transform: `rotate(${rotateDeg3}deg)`,
                      }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#355094"
                      />
                    </svg>
                  </div>

                  {isVisible3 && (
                    <div className="p-mobile-list">
                      <li>
                        Improving ergonomic conditions in all production
                        processes.
                      </li>
                      <li>
                        Preventing work-related ill health issues.Preventing
                        work-related ill health issues.
                      </li>
                      <li>Preventing workplace accidents effectively.</li>
                      <li>Enhancing overall employee well-being and safety.</li>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
