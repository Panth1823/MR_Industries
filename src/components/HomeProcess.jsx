import React from "react";
import Process1 from "../assets/Process-1.png";
import Process2 from "../assets/Process-2.png";
import Process3 from "../assets/Process-3.png";
import Process4 from "../assets/Process-4.png";

import MobileProcess1 from "../assets/mobile-process1.png";
import MobileProcess2 from "../assets/mobile-process2.png";
import MobileProcess3 from "../assets/mobile-process3.png";
import MobileProcess4 from "../assets/mobile-process4.png";

function HomeProcess() {
  return (
    <div className="s-process">
      <div className="s-about-us-left">
        <div className="s-about-us-heading">
          <span>THE PROCESS</span>
          <p>Process Development for Business</p>
        </div>
        <p className="s-about-us-heading-para">
          Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis
          quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm
          Lorem ipsum
        </p>
      </div>
      <div className="s-process-container">
        <svg
          className="s-process-line"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="1210"
          viewBox="0 0 11 1210"
          fill="none"
        >
          <path
            d="M5.5 5.8877L5.5 1204.02"
            stroke="url(#paint0_linear_11_876)"
            strokeOpacity="0.8"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11_876"
              x1="5"
              y1="5.8877"
              x2="5"
              y2="1204.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#12307B" />
              <stop offset="0.531" stopColor="#569DD0" />
              <stop offset="0.926" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        <img className="process-1" src={Process1}></img>
        <img className="process-2" src={Process2}></img>
        <img className="process-3" src={Process3}></img>
        <img className="process-4" src={Process4}></img>
        <div className="process-dot process-dot-1"></div>
        <div className="process-dot process-dot-2"></div>
        <div className="process-dot process-dot-3"></div>
        <div className="process-dot process-dot-4"></div>
        <div className="mobile-process1">
          <div className="mobile-process-set">
            <span>CONCEPT</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M4 2.84157L4 7.15823C4 7.4874 4.435 7.6874 4.77 7.50823L8.84 5.3499C9.15 5.1874 9.15 4.8124 8.84 4.64573L4.77 2.49157C4.435 2.3124 4 2.5124 4 2.84157Z"
                  fill="#AD2A27"
                />
              </svg>
              <hr className="mobile-process-dotted-line"></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle cx="3.5" cy="4" r="3.5" fill="#0E2662" />
                </svg>
                <img src={MobileProcess1}></img>
              </div>
            </div>
            <p>Analysis of requirements and the creation of a concept design</p>
          </div>
        </div>
        <div className="mobile-process2">
          <div className="mobile-process-set">
            <span>DEVELOP</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M4 2.84157L4 7.15823C4 7.4874 4.435 7.6874 4.77 7.50823L8.84 5.3499C9.15 5.1874 9.15 4.8124 8.84 4.64573L4.77 2.49157C4.435 2.3124 4 2.5124 4 2.84157Z"
                  fill="#AD2A27"
                />
              </svg>
              <hr className="mobile-process-dotted-line"></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle cx="3.5" cy="4" r="3.5" fill="#0E2662" />
                </svg>
                <img src={MobileProcess2}></img>
              </div>
            </div>
            <p>Development and elaboration of concept design</p>
          </div>
        </div>
        <div className="mobile-process3">
          <div className="mobile-process-set">
            <span>Test</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M4 2.84157L4 7.15823C4 7.4874 4.435 7.6874 4.77 7.50823L8.84 5.3499C9.15 5.1874 9.15 4.8124 8.84 4.64573L4.77 2.49157C4.435 2.3124 4 2.5124 4 2.84157Z"
                  fill="#AD2A27"
                />
              </svg>
              <hr className="mobile-process-dotted-line"></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle cx="3.5" cy="4" r="3.5" fill="#0E2662" />
                </svg>
                <img src={MobileProcess3}></img>
              </div>
            </div>
            <p>Testing the quality and strength of the design on samples</p>
          </div>
        </div>
        <div className="mobile-process4">
          <div className="mobile-process-set">
            <span>IMPLEMENT</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M4 2.84157L4 7.15823C4 7.4874 4.435 7.6874 4.77 7.50823L8.84 5.3499C9.15 5.1874 9.15 4.8124 8.84 4.64573L4.77 2.49157C4.435 2.3124 4 2.5124 4 2.84157Z"
                  fill="#AD2A27"
                />
              </svg>
              <hr className="mobile-process-dotted-line"></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle cx="3.5" cy="4" r="3.5" fill="#0E2662" />
                </svg>
                <img src={MobileProcess4}></img>
              </div>
            </div>
            <p>
              Implement the approved design and manufacturing procedures when
              producing and delivering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProcess;
