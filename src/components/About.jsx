import MR_industries from "../assets/MR_industries.jpeg";
import { useState } from "react";
import ISO9001 from "../assets/ISO 9001.png";
import ISO14001 from "../assets/ISO 14001.png";
import ISO45001 from "../assets/ISO 45001.png";
import Six_Ton_Gear_Transmission_Crimping_Machine from "../assets/machine-infrastructure/6-Ton-Gear-Transmission-Crimping-Machine-MR-Industries.png";
import Motorized_Push_Pull_Load_tester_MR_Industries from "../assets/machine-infrastructure/Motorized-Push-Pull-Load-tester-MR-Industries.png";
import Motorized_Push_Pull_Load_tester_Digital_read_out_MR_Industries from "../assets/machine-infrastructure/Motorized-Push-Pull-Load-tester-Digital-read-out-MR-Industries.png";
import Fully_Automatic_Cable_Cutting_Stripping_Machine_MR_Industries from "../assets/machine-infrastructure/Fully-Automatic-Cable-Cutting & Stripping-Machine-MR-Industries.png";
import Ton_Gear_Transmission_Crimping_Machine from "../assets/machine-infrastructure/Ton Gear Transmission Crimping Machine - MR Industries.png";
import Ton_Gear_Transmission_Crimping_Machine_1 from "../assets/machine-infrastructure/Ton Gear Transmission Crimping Machine MR Industries.png";
import ReactCardFlip from "react-card-flip";
import Ferrule_Printing_MR_Industries from "../assets/serviceDetails/infrastructure/Ferrule Printing - MR Industries.png";
import IQC_Area_MR_Industries from "../assets/serviceDetails/infrastructure/IQC Area - MR Industries.png";
import Machinery_unit_MR_Industries from "../assets/serviceDetails/infrastructure/Machinery unit -MR Industries.png";
import machinery_MR_Industries from "../assets/serviceDetails/infrastructure/machinery- MR Industries.png";
import shop_floor_MR_Industries from "../assets/serviceDetails/infrastructure/shop floor - MR Industries.png";
import Shop_Floor_MR_Industries_2 from "../assets/serviceDetails/infrastructure/Shop Floor- MR Industries (2).png";
import Shop_Floor_MR_Industries from "../assets/serviceDetails/infrastructure/Shop Floor- MR Industries.png";
import visual_Inspection_MR_Industries from "../assets/serviceDetails/infrastructure/visual Inspection- MR Industries.png";
import Automotive_Connector_Anderson_Trading_parts_MR_Industries from "../assets/Trading Parts/Automotive connector -  Anderson - trading parts- MR Industries.png";
import EV_Grade_Wire_Trading_Parts_MR_Industries from "../assets/Trading Parts/EV Grade Wire - Trading Parts- MR Industries.png";
import Lugs_and_Terminals from "../assets/Trading Parts/Lugs and Terminals.png";
import Mid_joint_and_lug_terminal_Trading_Parts_MR_Industries from "../assets/Trading Parts/Mid joint and lug terminal - Trading Parts - MR Industries.png";
import MR_Industries from "../assets/Trading Parts/MR Industries.png";
import VFS_Sleeve_Lugh_Trading_Parts_MR_Industries from "../assets/Trading Parts/VFS Sleeve Lugh - Trading Parts - MR Industries.png";
import "../santosh.css";

const About = ({ onLinkClick }) => {
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

  // Mobile Card Logic V1
  const [isVisible4, setIsVisible4] = useState(false);
  const [rotateDeg4, setRotateDeg4] = useState(180);
  const [marginTop, setMarginTop] = useState(-80);

  const toggleVisibility4 = () => {
    const newVisibility = !isVisible4;
    setIsVisible4(newVisibility);
    setRotateDeg4(newVisibility ? 0 : 180);
    setMarginTop(newVisibility ? -234 : -80);
  };

  // Mobile Card Logic V2
  const [isVisible5, setIsVisible5] = useState(false);
  const [rotateDeg5, setRotateDeg5] = useState(180);
  const [marginTop1, setMarginTop1] = useState(-80);

  const toggleVisibility5 = () => {
    const newVisibility = !isVisible5;
    setIsVisible5(newVisibility);
    setRotateDeg5(newVisibility ? 0 : 180);
    setMarginTop1(newVisibility ? -154 : -80);
  };

  // Mobile Card Logic V3
  const [isVisible6, setIsVisible6] = useState(false);
  const [rotateDeg6, setRotateDeg6] = useState(180);
  const [marginTop2, setMarginTop2] = useState(-80);

  const toggleVisibility6 = () => {
    const newVisibility = !isVisible6;
    setIsVisible6(newVisibility);
    setRotateDeg6(newVisibility ? 0 : 180);
    setMarginTop2(newVisibility ? -244 : -80);
  };

  // Mobile Card Logic V4
  const [isVisible7, setIsVisible7] = useState(false);
  const [rotateDeg7, setRotateDeg7] = useState(180);
  const [marginTop3, setMarginTop3] = useState(-80);

  const toggleVisibility7 = () => {
    const newVisibility = !isVisible7;
    setIsVisible7(newVisibility);
    setRotateDeg7(newVisibility ? 0 : 180);
    setMarginTop3(newVisibility ? -154 : -80);
  };

  // Mobile Card Logic V5
  const [isVisible8, setIsVisible8] = useState(false);
  const [rotateDeg8, setRotateDeg8] = useState(180);
  const [marginTop4, setMarginTop4] = useState(-80);

  const toggleVisibility8 = () => {
    const newVisibility = !isVisible8;
    setIsVisible8(newVisibility);
    setRotateDeg8(newVisibility ? 0 : 180);
    setMarginTop4(newVisibility ? -234 : -80);
  };

  // Mobile Card Logic V6
  const [isVisible9, setIsVisible9] = useState(false);
  const [rotateDeg9, setRotateDeg9] = useState(180);
  const [marginTop5, setMarginTop5] = useState(-80);

  const toggleVisibility9 = () => {
    const newVisibility = !isVisible9;
    setIsVisible9(newVisibility);
    setRotateDeg9(newVisibility ? 0 : 180);
    setMarginTop5(newVisibility ? -234 : -80);
  };

  const [startIndex, setStartIndex] = useState(0);
  const items = [
    { img: Ferrule_Printing_MR_Industries, text: "Ferrule Printing" },
    { img: IQC_Area_MR_Industries, text: "IQC Area" },
    { img: Machinery_unit_MR_Industries, text: "Machinery unit" },
    { img: machinery_MR_Industries, text: "Machinery" },
    { img: shop_floor_MR_Industries, text: "Shop floor" },
    { img: Shop_Floor_MR_Industries_2, text: "Shop floor" },
    { img: Shop_Floor_MR_Industries, text: "Shop floor" },
    { img: visual_Inspection_MR_Industries, text: "Visual Inspection" },
  ];

  const numberOfItems = items.length;

  const screenSizeCurrent = window.innerWidth;
  const itemsToShow = screenSizeCurrent < 1200 ? 1 : 4;

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
                <img src={MR_Industries} alt="Heat Shrinkable Sleeve" />
              </div>
              <p className="p-card-text">Heat Shrinkable Sleeve</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <img src={Lugs_and_Terminals} alt="Lugs_and_Terminals" />
              </div>
              <p className="p-card-text">Lugs & terminals</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <img
                  src={
                    Automotive_Connector_Anderson_Trading_parts_MR_Industries
                  }
                  alt="Automotive_Connector_Anderson_Trading_parts_MR_Industries"
                />
              </div>
              <p className="p-card-text">All types of Automotive Connectors</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <div className="p-circle-svg-container">
                <img
                  src={VFS_Sleeve_Lugh_Trading_Parts_MR_Industries}
                  alt="VFS_Sleeve_Lugh_Trading_Parts_MR_Industries"
                />
              </div>
              <p className="p-card-text">VFG Sleeves lug</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <img
                  src={Mid_joint_and_lug_terminal_Trading_Parts_MR_Industries}
                  alt="Mid_joint_and_lug_terminal_Trading_Parts_MR_Industries"
                />
              </div>
              <p className="p-card-text">Mid joint and Lug terminals</p>
            </div>
            <div className="p-card">
              <div className="p-circle-svg-container">
                <img
                  src={EV_Grade_Wire_Trading_Parts_MR_Industries}
                  alt="EV_Grade_Wire_Trading_Parts_MR_Industries"
                />
              </div>
              <p className="p-card-text">Ev Grade wires</p>
            </div>
          </div>
        </div>
        <div className="p-card-grid mobile">
          <div className="p-card-row1">
            <div className="p-card">
              <img src={MR_Industries} alt="Heat Shrinkable Sleeve" />
              <p className="p-card-text">Heat Shrinkable Sleeve</p>
            </div>
            <div className="p-card">
              <img src={Lugs_and_Terminals} alt="Lugs_and_Terminals" />
              <p className="p-card-text">Lugs & terminals</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <img
                src={Automotive_Connector_Anderson_Trading_parts_MR_Industries}
                alt="Automotive_Connector_Anderson_Trading_parts_MR_Industries"
              />
              <p className="p-card-text">All types of Automotive Connectors</p>
            </div>
            <div className="p-card">
              <img
                src={VFS_Sleeve_Lugh_Trading_Parts_MR_Industries}
                alt="VFS_Sleeve_Lugh_Trading_Parts_MR_Industries"
              />
              <p className="p-card-text">VFG Sleeves lug</p>
            </div>
          </div>
          <div className="p-card-row2">
            <div className="p-card">
              <img
                src={Mid_joint_and_lug_terminal_Trading_Parts_MR_Industries}
                alt="Mid_joint_and_lug_terminal_Trading_Parts_MR_Industries"
              />
              <p className="p-card-text">Mid joint and Lug terminals</p>
            </div>
            <div className="p-card">
              <img
                src={EV_Grade_Wire_Trading_Parts_MR_Industries}
                alt="EV_Grade_Wire_Trading_Parts_MR_Industries"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              zoomAndPan="magnify"
              viewBox="0 0 112.5 112.499997"
              height="90"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="09eb10a58b">
                  <path
                    d="M 13 66 L 99 66 L 99 96.488281 L 13 96.488281 Z M 13 66 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="99a4ff0578">
                  <path
                    d="M 30 15.847656 L 82 15.847656 L 82 31 L 30 31 Z M 30 15.847656 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="f4bbe45097">
                  <path
                    d="M 11.199219 33 L 100.800781 33 L 100.800781 70 L 11.199219 70 Z M 11.199219 33 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#09eb10a58b)">
                <path
                  fill="#000000"
                  d="M 29.394531 73.359375 C 23.199219 73.359375 17.621094 70.765625 13.636719 66.617188 L 13.636719 87.863281 C 13.636719 92.625 17.484375 96.488281 22.226562 96.488281 L 89.773438 96.488281 C 94.519531 96.488281 98.363281 92.625 98.363281 87.863281 L 98.363281 66.617188 C 94.382812 70.765625 88.800781 73.359375 82.609375 73.359375 L 65.082031 73.359375 L 65.082031 79.796875 C 65.082031 81.78125 63.480469 83.386719 61.507812 83.386719 L 50.492188 83.386719 C 48.519531 83.386719 46.921875 81.78125 46.921875 79.796875 L 46.921875 73.359375 Z M 29.394531 73.359375 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <path
                fill="#000000"
                d="M 51.984375 79.929688 L 60.015625 79.929688 C 60.914062 79.929688 61.640625 79.199219 61.640625 78.300781 L 61.640625 65.296875 C 61.640625 64.394531 60.914062 63.667969 60.015625 63.667969 L 51.984375 63.667969 C 51.089844 63.667969 50.363281 64.394531 50.363281 65.296875 L 50.363281 78.300781 C 50.363281 79.199219 51.089844 79.929688 51.984375 79.929688 Z M 51.984375 79.929688 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <g clip-path="url(#99a4ff0578)">
                <path
                  fill="#000000"
                  d="M 67.175781 15.847656 L 44.824219 15.847656 C 40.441406 15.847656 36.886719 19.417969 36.886719 23.820312 L 36.886719 26.261719 C 36.886719 26.765625 36.480469 27.175781 35.976562 27.175781 L 33.917969 27.175781 C 32.226562 27.175781 30.855469 28.550781 30.855469 30.246094 L 43.765625 30.246094 L 43.765625 23.820312 C 43.765625 23.234375 44.242188 22.757812 44.824219 22.757812 L 67.175781 22.757812 C 67.761719 22.757812 68.234375 23.234375 68.234375 23.820312 L 68.234375 30.246094 L 81.148438 30.246094 C 81.144531 28.550781 79.773438 27.175781 78.085938 27.175781 L 76.023438 27.175781 C 75.523438 27.175781 75.117188 26.765625 75.117188 26.261719 L 75.117188 23.820312 C 75.117188 19.417969 71.5625 15.847656 67.175781 15.847656 Z M 67.175781 15.847656 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#f4bbe45097)">
                <path
                  fill="#000000"
                  d="M 93.273438 33.238281 L 18.726562 33.238281 C 14.609375 33.238281 11.273438 36.589844 11.273438 40.726562 L 11.273438 50.785156 C 11.273438 62.445312 20.6875 69.902344 32.296875 69.902344 L 46.921875 69.902344 L 46.921875 63.796875 C 46.921875 61.816406 48.519531 60.210938 50.492188 60.210938 L 61.507812 60.210938 C 63.480469 60.210938 65.082031 61.816406 65.082031 63.796875 L 65.082031 69.902344 L 79.703125 69.902344 C 91.316406 69.902344 100.730469 62.445312 100.730469 50.785156 L 100.730469 40.726562 C 100.730469 36.589844 97.390625 33.238281 93.273438 33.238281 Z M 93.273438 33.238281 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <div className="p-desc-info">
              <p>14+ years of Experience</p>
              <p className="p-why-us-subtext">
                Extensive expertise ensuring top-quality results.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              zoomAndPan="magnify"
              viewBox="0 0 112.5 112.499997"
              height="90"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="bf58ad6ab3">
                  <path
                    d="M 19 11.199219 L 94 11.199219 L 94 85 L 19 85 Z M 19 11.199219 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="4b31e2c65e">
                  <path
                    d="M 65.039062 74 L 94.238281 74 L 94.238281 101.203125 L 65.039062 101.203125 Z M 65.039062 74 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="2083c5b14b">
                  <path
                    d="M 18.074219 75 L 48 75 L 48 101.546875 L 18.074219 101.546875 Z M 18.074219 75 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <path
                fill="#040606"
                d="M 54.375 49.832031 L 44.515625 43.796875 L 42.730469 45.949219 L 50.113281 54.457031 L 56.40625 61.746094 L 71.792969 35.289062 L 69.535156 33.585938 L 54.375 49.832031 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <g clip-path="url(#bf58ad6ab3)">
                <path
                  fill="#040606"
                  d="M 56.199219 72.539062 C 42.695312 72.539062 31.707031 61.570312 31.707031 48.097656 C 31.707031 34.613281 42.695312 23.652344 56.199219 23.652344 C 69.710938 23.652344 80.703125 34.613281 80.703125 48.097656 C 80.703125 61.570312 69.710938 72.539062 56.199219 72.539062 Z M 75.304688 79.816406 L 77.609375 72.660156 L 85.019531 71.378906 L 84.738281 63.878906 L 91.261719 60.140625 L 88.421875 53.183594 L 93.28125 47.453125 L 88.222656 41.878906 L 90.824219 34.835938 L 84.164062 31.324219 L 84.1875 23.820312 L 76.730469 22.792969 L 74.179688 15.726562 L 66.824219 17.316406 L 62.007812 11.546875 L 55.632812 15.550781 L 49.125 11.769531 L 44.507812 17.707031 L 37.105469 16.378906 L 34.800781 23.527344 L 27.382812 24.808594 L 27.671875 32.3125 L 21.136719 36.054688 L 23.984375 43.003906 L 19.128906 48.742188 L 24.175781 54.304688 L 21.585938 61.355469 L 28.246094 64.859375 L 28.21875 72.371094 L 35.671875 73.390625 L 38.230469 80.460938 L 45.585938 78.875 L 50.402344 84.648438 L 56.773438 80.644531 L 63.28125 84.421875 L 67.894531 78.484375 L 75.304688 79.816406 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#4b31e2c65e)">
                <path
                  fill="#040606"
                  d="M 84.476562 74.324219 L 79.761719 75.144531 L 77.984375 80.675781 L 77.226562 83.015625 L 74.808594 82.578125 L 69.074219 81.550781 L 65.84375 85.707031 L 76.148438 101.203125 L 80.925781 88.691406 L 94.332031 89.152344 L 84.476562 74.324219 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#2083c5b14b)">
                <path
                  fill="#040606"
                  d="M 38.820312 83.207031 L 36.417969 83.722656 L 35.582031 81.414062 L 33.613281 75.945312 L 27.835938 75.160156 L 27.421875 75.101562 L 18.074219 89.152344 L 31.484375 88.691406 L 36.261719 101.203125 L 47.042969 84.996094 L 44.515625 81.980469 L 38.820312 83.207031 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              zoomAndPan="magnify"
              viewBox="0 0 112.5 112.499997"
              height="90"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="0d4d8cffec">
                  <path
                    d="M 7.976562 21.542969 L 104.300781 21.542969 L 104.300781 42 L 7.976562 42 Z M 7.976562 21.542969 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="c836b4a7f8">
                  <path
                    d="M 7.976562 46 L 104.300781 46 L 104.300781 66 L 7.976562 66 Z M 7.976562 46 "
                    clip-rule="nonzero"
                  />
                </clipPath>
                <clipPath id="e43bd6aaf9">
                  <path
                    d="M 7.976562 70 L 104.300781 70 L 104.300781 90.238281 L 7.976562 90.238281 Z M 7.976562 70 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#0d4d8cffec)">
                <path
                  fill="#000000"
                  d="M 96.554688 23.695312 L 49.195312 23.695312 L 49.195312 23.242188 C 49.195312 22.335938 48.398438 21.542969 47.488281 21.542969 L 44.527344 21.542969 C 43.617188 21.542969 42.820312 22.335938 42.820312 23.242188 L 42.820312 23.695312 L 15.722656 23.695312 C 11.511719 23.695312 7.980469 27.089844 7.980469 31.390625 C 7.980469 35.691406 11.398438 39.085938 15.722656 39.085938 L 42.820312 39.085938 L 42.820312 39.539062 C 42.820312 40.445312 43.617188 41.234375 44.527344 41.234375 L 47.488281 41.234375 C 48.398438 41.234375 49.195312 40.445312 49.195312 39.539062 L 49.195312 39.085938 L 96.554688 39.085938 C 100.765625 39.085938 104.296875 35.691406 104.296875 31.390625 C 104.296875 27.089844 100.765625 23.695312 96.554688 23.695312 Z M 96.554688 34.445312 L 49.195312 34.445312 L 49.195312 28.222656 L 96.554688 28.222656 C 98.261719 28.222656 99.742188 29.578125 99.742188 31.390625 C 99.742188 33.199219 98.261719 34.445312 96.554688 34.445312 Z M 96.554688 34.445312 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#c836b4a7f8)">
                <path
                  fill="#000000"
                  d="M 96.554688 48.253906 L 39.632812 48.253906 L 39.632812 47.800781 C 39.632812 46.894531 38.835938 46.101562 37.921875 46.101562 L 34.964844 46.101562 C 34.050781 46.101562 33.253906 46.894531 33.253906 47.800781 L 33.253906 48.253906 L 15.722656 48.253906 C 11.511719 48.253906 7.980469 51.648438 7.980469 55.949219 C 7.980469 60.25 11.398438 63.644531 15.722656 63.644531 L 33.253906 63.644531 L 33.253906 63.984375 C 33.253906 64.890625 34.050781 65.679688 34.964844 65.679688 L 37.921875 65.679688 C 38.835938 65.679688 39.632812 64.890625 39.632812 63.984375 L 39.632812 63.53125 L 96.554688 63.53125 C 100.765625 63.53125 104.296875 60.136719 104.296875 55.835938 C 104.296875 51.535156 100.765625 48.253906 96.554688 48.253906 Z M 96.554688 59.003906 L 39.632812 59.003906 L 39.632812 52.78125 L 96.554688 52.78125 C 98.261719 52.78125 99.742188 54.136719 99.742188 55.949219 C 99.742188 57.757812 98.261719 59.003906 96.554688 59.003906 Z M 96.554688 59.003906 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
              <g clip-path="url(#e43bd6aaf9)">
                <path
                  fill="#000000"
                  d="M 96.554688 72.699219 L 84.941406 72.699219 L 84.941406 72.246094 C 84.941406 71.339844 84.144531 70.546875 83.234375 70.546875 L 80.273438 70.546875 C 79.363281 70.546875 78.566406 71.339844 78.566406 72.246094 L 78.566406 72.699219 L 15.722656 72.699219 C 11.511719 72.699219 7.980469 76.09375 7.980469 80.394531 C 7.980469 84.695312 11.398438 88.089844 15.722656 88.089844 L 78.453125 88.089844 L 78.453125 88.542969 C 78.453125 89.445312 79.25 90.238281 80.160156 90.238281 L 83.121094 90.238281 C 84.03125 90.238281 84.828125 89.445312 84.828125 88.542969 L 84.828125 88.089844 L 96.441406 88.089844 C 100.652344 88.089844 104.183594 84.695312 104.183594 80.394531 C 104.183594 76.09375 100.765625 72.699219 96.554688 72.699219 Z M 96.554688 83.449219 L 84.941406 83.449219 L 84.941406 77.222656 L 96.554688 77.222656 C 98.261719 77.222656 99.742188 78.582031 99.742188 80.394531 C 99.742188 82.203125 98.261719 83.449219 96.554688 83.449219 Z M 96.554688 83.449219 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <div className="p-desc-info">
              <p>Customized Solutions</p>
              <p className="p-why-us-subtext">
                Tailored manufacturing to meet your exact needs.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              zoomAndPan="magnify"
              viewBox="0 0 112.5 112.499997"
              height="90"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="11cec7b71c">
                  <path
                    d="M 17.269531 12 L 94.925781 12 L 94.925781 100 L 17.269531 100 Z M 17.269531 12 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#11cec7b71c)">
                <path
                  fill="#000000"
                  d="M 56.726562 67.871094 L 56.726562 75.039062 C 56.726562 75.242188 56.824219 75.417969 57.003906 75.519531 L 62.628906 78.757812 C 63 78.972656 63.460938 78.707031 63.460938 78.277344 L 63.460938 68.707031 L 86.683594 55.339844 L 94.003906 59.550781 C 94.59375 59.890625 94.929688 60.472656 94.929688 61.148438 L 94.929688 85.757812 C 94.929688 86.433594 94.59375 87.015625 94.003906 87.351562 L 72.628906 99.660156 C 72.039062 99.996094 71.367188 99.996094 70.78125 99.660156 L 49.402344 87.351562 C 48.816406 87.015625 48.480469 86.433594 48.480469 85.757812 L 48.480469 63.488281 L 55.078125 67.285156 C 55.597656 67.585938 56.15625 67.78125 56.726562 67.871094 Z M 58.402344 12.320312 C 57.8125 11.980469 57.140625 11.980469 56.554688 12.320312 L 35.175781 24.625 C 34.589844 24.964844 34.253906 25.542969 34.253906 26.21875 L 34.253906 50.832031 C 34.253906 51.507812 34.589844 52.089844 35.175781 52.425781 L 56.554688 64.730469 C 57.140625 65.070312 57.8125 65.070312 58.402344 64.730469 L 79.777344 52.425781 C 80.367188 52.089844 80.703125 51.507812 80.703125 50.832031 L 80.703125 26.21875 C 80.703125 25.542969 80.367188 24.964844 79.777344 24.625 L 72.457031 20.410156 L 49.234375 33.78125 L 49.234375 43.351562 C 49.234375 43.777344 48.773438 44.042969 48.402344 43.832031 L 42.777344 40.589844 C 42.597656 40.488281 42.5 40.316406 42.5 40.113281 L 42.5 29.902344 L 65.722656 16.535156 Z M 31.296875 43.53125 L 25.511719 46.863281 L 25.511719 57.070312 C 25.511719 57.273438 25.613281 57.449219 25.789062 57.550781 L 31.414062 60.789062 C 31.785156 61.003906 32.246094 60.738281 32.246094 60.308594 L 32.246094 53.695312 C 32.628906 54.207031 33.121094 54.644531 33.699219 54.976562 L 45.523438 61.785156 L 45.523438 79.324219 L 41.414062 81.691406 C 40.828125 82.027344 40.152344 82.027344 39.566406 81.691406 L 18.191406 69.386719 C 17.601562 69.046875 17.265625 68.464844 17.265625 67.789062 L 17.265625 43.179688 C 17.265625 42.503906 17.601562 41.921875 18.191406 41.585938 L 31.296875 34.039062 Z M 31.296875 43.53125 "
                  fill-opacity="1"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
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
          <p className="p-where-we-work-text">Where We Work</p>
        </div>
        <div>
          <p className="p-where-we-work-desc">
            In our state-of-the-art facility, equipped with advanced machinery,
            we ensure to meet your special wiring needs with tailor-made
            solutions.
          </p>
        </div>
        <div className="p-six-card-grid">
          <div className="card-row-top">
            <ReactCardFlip flipDirection="horizontal" isFlipped={card1Flipped}>
              <div className="front" onMouseEnter={() => flipCard(1)}>
                <img
                  src={Six_Ton_Gear_Transmission_Crimping_Machine}
                  alt="Six_Ton_Gear_Transmission_Crimping_Machine"
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
                  src={Motorized_Push_Pull_Load_tester_MR_Industries}
                  alt="Motorized_Push_Pull_Load_tester_MR_Industries"
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(2)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>
                      Motorized Push Pull Load Tester With Variable Speed
                      Controller
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
                  src={
                    Fully_Automatic_Cable_Cutting_Stripping_Machine_MR_Industries
                  }
                  alt="Fully_Automatic_Cable_Cutting_Stripping_Machine_MR_Industries"
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
                  src={
                    Motorized_Push_Pull_Load_tester_Digital_read_out_MR_Industries
                  }
                  alt="Motorized_Push_Pull_Load_tester_Digital_read_out_MR_Industries"
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(4)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>Motorized Push Pull Load Tester digital read out</p>
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
                      <p>0 to 100Kg</p>
                      <p>PPT - 100 </p>
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
                  src={Ton_Gear_Transmission_Crimping_Machine}
                  alt="Ton_Gear_Transmission_Crimping_Machine"
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(5)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>Fully Automatic Cable Cutting and Stripping Machine</p>
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

            <ReactCardFlip flipDirection="horizontal" isFlipped={card6Flipped}>
              <div className="front" onMouseEnter={() => flipCard(6)}>
                <img
                  src={Ton_Gear_Transmission_Crimping_Machine_1}
                  alt="Ton_Gear_Transmission_Crimping_Machine_1"
                />
              </div>
              <div className="back" onMouseLeave={() => flipCard(6)}>
                <div className="p-card-back-main">
                  <div className="p-card-back-title">
                    <p>Motorized Push Pull Load Tester digital read out</p>
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
                      <p>0 to 100Kg</p>
                      <p>PPT - 100 </p>
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
                src={Six_Ton_Gear_Transmission_Crimping_Machine}
                alt="Six_Ton_Gear_Transmission_Crimping_Machine"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>6 Ton Gear Transmission Crimping Machine </p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility4}
                      style={{ transform: `rotate(${rotateDeg4}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible4 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                        <p>Type</p>
                        <p>Max Crimp Cross</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>16 Ton</p>
                        <p>HF - 16 Ton </p>
                        <p>Gear Transmission</p>
                        <p>6.00 to 120.0 MM2 Cable</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-mobile-card">
              <img
                src={Motorized_Push_Pull_Load_tester_MR_Industries}
                alt="Motorized_Push_Pull_Load_tester_MR_Industries"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop1}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>
                      {" "}
                      Motorized Push Pull Load Tester With Variable Speed
                      Controller
                    </p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility5}
                      style={{ transform: `rotate(${rotateDeg5}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible5 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>0 to 500Kg</p>
                        <p>PPT - 500 </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-mobile-card">
              <img
                src={
                  Fully_Automatic_Cable_Cutting_Stripping_Machine_MR_Industries
                }
                alt="Fully_Automatic_Cable_Cutting_Stripping_Machine_MR_Industries"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop2}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>Fully Automatic Cable Cutting and Stripping Machine </p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility6}
                      style={{ transform: `rotate(${rotateDeg6}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible6 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                        <p>Length Accuracy</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>3.00 mm2 TO 16.00 mm2</p>
                        <p>UNISTRIP - 999 + </p>
                        <p>+- 0.5 mm( l*0.5%) Depends on the material</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-mobile-card">
              <img
                src={
                  Motorized_Push_Pull_Load_tester_Digital_read_out_MR_Industries
                }
                alt="Motorized_Push_Pull_Load_tester_Digital_read_out_MR_Industries"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop3}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>Motorized Push Pull Load Tester digital read out</p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility7}
                      style={{ transform: `rotate(${rotateDeg7}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible7 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>0 to 100Kg</p>
                        <p>PPT - 100 </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-mobile-card">
              <img
                src={Ton_Gear_Transmission_Crimping_Machine}
                alt="Ton_Gear_Transmission_Crimping_Machine"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop4}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>Fully Automatic Cable Cutting and Stripping Machine</p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility8}
                      style={{ transform: `rotate(${rotateDeg8}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible8 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                        <p>Length Accuracy</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>3.00 mm2 TO 16.00 mm2</p>
                        <p>UNISTRIP - 999 + </p>
                        <p>+- 0.5 mm( l*0.5%) Depends on the material</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-mobile-card">
              <img
                src={Ton_Gear_Transmission_Crimping_Machine_1}
                alt="Ton_Gear_Transmission_Crimping_Machine_1"
                style={{
                  width: "300px",
                  height: "369px",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
              <div
                className="p-mobile-card-back-main"
                style={{ marginTop: `${marginTop5}px` }}
              >
                <div className="p-card-back-title mobile">
                  <div className="svg-container">
                    <p>Motorized Push Pull Load Tester digital read out</p>
                    <svg
                      className="p-arrow-down-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      onClick={toggleVisibility9}
                      style={{ transform: `rotate(${rotateDeg9}deg)` }}
                    >
                      <path
                        d="M11.6843 0.266515C11.2652 -0.0888383 10.5881 -0.0888384 10.169 0.266515L5.99932 3.80182L1.82962 0.266514C1.4105 -0.0888392 0.73346 -0.0888392 0.314341 0.266514C-0.10478 0.621867 -0.10478 1.1959 0.31434 1.55125L5.24706 5.73348C5.66618 6.08884 6.34322 6.08884 6.76233 5.73348L11.6951 1.55125C12.1034 1.20501 12.1034 0.621868 11.6843 0.266515Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  {isVisible9 && (
                    <div className="p-card-back-subtext mobile">
                      <div className="p-subtext-back-p ">
                        <p>Capacity</p>
                        <p>Model</p>
                      </div>
                      <div className="p-subtext-back-p ">
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="p-subtext-back-p btm ">
                        <p>0 to 100Kg</p>
                        <p>PPT - 100 </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-product-gallery">
        <div className="s-product-gallery-container">
          <div
            className="s-product-gallery-left-button"
            onClick={handleLeftClick}
          >
            <svg
              style={{ opacity: startIndex === 0 ? 0.3 : 1 }}
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
            style={{ opacity: endIndex >= numberOfItems ? 0.3 : 1 }}
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
