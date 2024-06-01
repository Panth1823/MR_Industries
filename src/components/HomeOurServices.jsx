import React, { useState, useEffect } from "react";
import KnowMoreButtton from "./KnowMoreButtton.jsx";
import Services1 from "../assets/Services1.jpg"
import Services2 from "../assets/Services2.jpg"

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
    const interval = setInterval(() => {
      const nextIndex = (activeDot + 1) % 3;
      setActiveDot(nextIndex);
      slideToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeDot]);

  return (
    <div className="s-our-services">
      <div className="s-our-services-heading">
        <div className="s-about-us-heading">
          <span>OUR SERVICES</span>
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
            <div className="s-our-services-set">
              <img src={Services1} alt="Services 1"></img>
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
              <img src={Services2} alt="Services 1"></img>
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
          <div className="s-our-services-two-set">
            <div className="s-our-services-set">
              <img src={Services1} alt="Services 1"></img>
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
              <img src={Services1} alt="Services 1"></img>
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
          <div className="s-our-services-two-set">
            <div className="s-our-services-set">
              <img src={Services2} alt="Services 1"></img>
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
              <img src={Services2} alt="Services 1"></img>
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
    </div>
  );
};

export default HomeOurServices;
