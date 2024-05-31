import React from 'react'
import Process1 from "../assets/Process-1.png";
import Process2 from "../assets/Process-2.png";
import Process3 from "../assets/Process-3.png";
import Process4 from "../assets/Process-4.png";

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
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="1210"
          viewBox="0 0 11 1210"
          fill="none"
        >
          <path
            d="M5.5 5.8877L5.5 1204.02"
            stroke="url(#paint0_linear_11_876)"
            stroke-opacity="0.8"
            stroke-width="10"
            stroke-linecap="round"
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
              <stop stop-color="#12307B" />
              <stop offset="0.531" stop-color="#569DD0" />
              <stop offset="0.926" stop-color="white" />
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
      </div>
    </div>
  );
}

export default HomeProcess
