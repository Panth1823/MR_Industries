import TestImg from "../assets/TestImg.png";
import ProductGallerywDots from "./ProductGallerywDots.jsx";
import Services1 from "../assets/Services1.jpg";
const EVHarness = ({ onLinkClick }) => {
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
            <p>EV Vehicle Harness</p>
          </div>
        </div>
        <div className="p-mobile-title">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Et miat sit velit. </p>
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

      <ProductGallerywDots />

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
        <div className="s-mobile-our-services-container">
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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
                Office ipsum you must be muted. Problem exploratory switch busy
                hard board. Better roll strategies clean existing winning.
              </p>
            </div>
          </div>
          <div className="s-mobile-our-services-set">
            <div className="s-mobile-our-services-set-img">
              <img src={Services1}></img>
            </div>
            <div className="s-mobile-our-services-set-text">
              <div className="s-mobile-our-services-set-heading">
                <span>Header</span>
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

export default EVHarness;
