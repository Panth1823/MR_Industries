import React, { useState } from "react";

import KnowMoreButton from "./KnowMoreButtton";
import HV_Harness_06_MR_Industries from "../assets/serviceDetails/HV Harness/HV Harness 06 - MR Industries.png";
import HV_Harness_MR_Industries from "../assets/serviceDetails/HV Harness/HV Harness - MR Industries.png";
import LV_Harness_MR_Industries from "../assets/serviceDetails/LV Harness/LV Harness - MR Industries.png";
import Custom_Harness_MR_Industries from "../assets/serviceDetails/Custom Harness/Custom Harness - MR Industries.png";
import ICE_Vehicle_Harness_01_MR_Industries from "../assets/serviceDetails/ICE Vehicle Harness/ICE Vehicle Harness 01 - MR Industries.png";
import charger_cables_MR_Industries from "../assets/serviceDetails/charger cables/charger cables - MR Industries.png";
import PIGTAIL_HARNESS_ICE_Vehicle_Harness_MR_Industries from "../assets/serviceDetails/ICE Vehicle Harness/PIGTAIL HARNESS - ICE Vehicle Harness - MR Industries.png";

const Services = ({ onLinkClick }) => {
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const handleSeeLess = () => {
    setShowMore(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="s-service-banner">
        <div className="s-breadcrum">
          <p
            className="s-services-home-link"
            onClick={() => onLinkClick("Home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </p>
          <p>\</p>
          <p style={{ fontWeight: "600" }}>Services</p>
        </div>
        <div className="s-service-banner-heading">
          <h1>Our Services</h1>
          <p>
            Providing top-tier EV, HV, LV, and custom wiring harnesses,
            including charger cables and ICE vehicle solutions, tailored for
            superior performance and reliability.
          </p>
        </div>
      </div>
      <div className="s-service-catalogue">
        <div className="s-about-us-left">
          <div className="s-about-us-heading">
            <p>Comprehensive Wiring Solutions</p>
          </div>
          <p className="s-about-us-heading-para">
            With unparalleled expertise and a commitment to quality, we deliver
            superior EV, HV, and LV wiring harnesses. Our custom solutions and
            reliable performance set us apart in the industry.
          </p>
        </div>
        <div className="s-service-catalogue-container">
          <div className="s-service-catalogue-set-container">
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("EVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={HV_Harness_06_MR_Industries}
                  alt="HV_Harness_06_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>EV Vehicle Harness</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture EV harnesses using automated assembly,
                  precision crimping, and testing for applications like electric
                  cars.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("EVHarness")}
                />
              </div>
            </div>
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("HVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={HV_Harness_MR_Industries}
                  alt="HV_Harness_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>HV Harness </span>
                <p className="s-services-catalogue-set-para">
                  We manufacture HV harnesses using advanced wire extrusion,
                  automated crimping, and thorough testing for applications like
                  EVs.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("HVHarness")}
                />
              </div>
            </div>
          </div>
          <div className="s-service-catalogue-set-container">
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("LVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={LV_Harness_MR_Industries}
                  alt="LV_Harness_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>LV Harness</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture LV harnesses using precision cutting and
                  automated crimping, for reliable applications in consumer
                  electronics.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("LVHarness")}
                />
              </div>
            </div>
            <div className="s-service-catalogue-set">
              <div
                className="s-service-catalogue-set-img"
                onClick={() => {
                  onLinkClick("CustomisedHarness");
                }}
              >
                <img
                  src={Custom_Harness_MR_Industries}
                  alt="Custom_Harness_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Customised Wiring harness </span>
                <p className="s-services-catalogue-set-para">
                  We manufacture customized wiring harnesses using CAD design,
                  precision cutting, and testing for specialized applications.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => {
                    onLinkClick("CustomisedHarness");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="s-service-catalogue-set-container">
            <div
              className="s-service-catalogue-set"
              onClick={() => {
                onLinkClick("ICEHarness");
              }}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={ICE_Vehicle_Harness_01_MR_Industries}
                  alt="ICE_Vehicle_Harness_01_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>ICE Vehicle wiring harness</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture ICE vehicle harnesses using automated wire
                  cutting, stripping, crimping, and soldering for precision and
                  reliability.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => {
                    onLinkClick("ICEHarness");
                  }}
                />
              </div>
            </div>
            <div
              className="s-service-catalogue-set"
              onClick={() => {
                onLinkClick("ChargerCables");
              }}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={charger_cables_MR_Industries}
                  alt="charger_cables_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>Charger Cables</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture durable charger cables with advanced extrusion
                  and precision soldering, ensuring high reliability and safety.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => {
                    onLinkClick("ChargerCables");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-services-catalouge">
        <div className="s-about-us-left">
          <div className="s-about-us-heading">
            <p>Comprehensive Wiring Solutions</p>
          </div>
          <p className="s-about-us-heading-para">
            With unparalleled expertise and a commitment to quality, we
            manufacture and deliver superior EV, HV, and LV wiring harnesses.
            Our custom solutions and reliable performance set us apart in the
            industry.
          </p>
        </div>
        <div className="s-service-catalogue-container">
          <div className="s-service-catalogue-set-container">
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("EVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={HV_Harness_06_MR_Industries}
                  alt="HV_Harness_06_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>EV Vehicle Harness</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture EV harnesses using automated assembly,
                  precision crimping, and testing for applications like electric
                  cars.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("EVHarness")}
                />
              </div>
            </div>
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("HVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={HV_Harness_MR_Industries}
                  alt="HV_Harness_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>HV Harness </span>
                <p className="s-services-catalogue-set-para">
                  We manufacture HV harnesses using advanced wire extrusion,
                  automated crimping, and thorough testing for applications like
                  EVs.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("HVHarness")}
                />
              </div>
            </div>
            <div
              className="s-service-catalogue-set"
              onClick={() => onLinkClick("LVHarness")}
            >
              <div className="s-service-catalogue-set-img">
                <img
                  src={LV_Harness_MR_Industries}
                  alt="LV_Harness_MR_Industries"
                ></img>
              </div>
              <div className="s-service-catalogue-set-text">
                <span>LV Harness</span>
                <p className="s-services-catalogue-set-para">
                  We manufacture LV harnesses using precision cutting and
                  automated crimping, for reliable applications in consumer
                  electronics.
                </p>
                <KnowMoreButton
                  KnowMoreText={"View Details"}
                  onClick={() => onLinkClick("LVHarness")}
                />
              </div>
            </div>
            {showMore && (
              <>
                <div
                  className="s-service-catalogue-set"
                  onClick={() => {
                    onLinkClick("CustomisedHarness");
                  }}
                >
                  <div className="s-service-catalogue-set-img">
                    <img
                      src={Custom_Harness_MR_Industries}
                      alt="Custom_Harness_MR_Industries"
                    ></img>
                  </div>
                  <div className="s-service-catalogue-set-text">
                    <span>Customised Wiring harness </span>
                    <p className="s-services-catalogue-set-para">
                      We manufacture customized wiring harnesses using CAD
                      design, precision cutting, and testing for specialized
                      applications.
                    </p>
                    <KnowMoreButton
                      KnowMoreText={"View Details"}
                      onClick={() => {
                        onLinkClick("CustomisedHarness");
                      }}
                    />
                  </div>
                </div>
                <div
                  className="s-service-catalogue-set"
                  onClick={() => {
                    onLinkClick("ICEHarness");
                  }}
                >
                  <div className="s-service-catalogue-set-img">
                    <img
                      src={PIGTAIL_HARNESS_ICE_Vehicle_Harness_MR_Industries}
                      alt="PIGTAIL_HARNESS_ICE_Vehicle_Harness_MR_Industries"
                    ></img>
                  </div>
                  <div className="s-service-catalogue-set-text">
                    <span>ICE Vehicle wiring harness</span>
                    <p className="s-services-catalogue-set-para">
                      We manufacture ICE vehicle harnesses using automated wire
                      cutting, stripping, crimping, and soldering for precision
                      and reliability.
                    </p>
                    <KnowMoreButton
                      KnowMoreText={"View Details"}
                      onClick={() => {
                        onLinkClick("ICEHarness");
                      }}
                    />
                  </div>
                </div>
                <div
                  className="s-service-catalogue-set"
                  onClick={() => {
                    onLinkClick("ChargerCables");
                  }}
                >
                  <div className="s-service-catalogue-set-img">
                    <img
                      src={charger_cables_MR_Industries}
                      alt="charger_cables_MR_Industries"
                    ></img>
                  </div>
                  <div className="s-service-catalogue-set-text">
                    <span>Charger Cables</span>
                    <p className="s-services-catalogue-set-para">
                      We manufacture durable charger cables with advanced
                      extrusion and precision soldering, ensuring high
                      reliability and safety.
                    </p>
                    <KnowMoreButton
                      KnowMoreText={"View Details"}
                      onClick={() => {
                        onLinkClick("ChargerCables");
                      }}
                    />
                  </div>
                </div>
                <div className="see-less-services" onClick={handleSeeLess}>
                  <p>See Less</p>
                  <svg
                    style={{ transform: "rotate(180deg)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M0.235013 0.705987C-0.0783367 0.979698 -0.0783367 1.42099 0.235013 1.6947L5.54916 6.33661C5.79856 6.55446 6.20144 6.55446 6.45084 6.33661L11.765 1.6947C12.0783 1.42099 12.0783 0.979698 11.765 0.705987C11.4516 0.432276 10.9464 0.432276 10.6331 0.705987L5.9968 4.75021L1.36051 0.700401C1.05356 0.432276 0.541966 0.432276 0.235013 0.705987Z"
                      fill="#355094"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          {!showMore && (
            <div className="view-all-services" onClick={handleLoadMore}>
              <p>Load More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
              >
                <path
                  d="M0.235013 0.705987C-0.0783367 0.979698 -0.0783367 1.42099 0.235013 1.6947L5.54916 6.33661C5.79856 6.55446 6.20144 6.55446 6.45084 6.33661L11.765 1.6947C12.0783 1.42099 12.0783 0.979698 11.765 0.705987C11.4516 0.432276 10.9464 0.432276 10.6331 0.705987L5.9968 4.75021L1.36051 0.700401C1.05356 0.432276 0.541966 0.432276 0.235013 0.705987Z"
                  fill="#355094"
                />
              </svg>
            </div>
          )}
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
