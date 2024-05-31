import MR_industries from "../assets/MR_industries.jpeg";
import { useState } from "react";
import productImg from "../assets/productImg.png";
import TestImg from "../assets/TestImg.png";
const About = () => {
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
    <div className="p-aboutUs">
      <div className="p-aboutUs-banner-background">
        <div className="p-breadcrumb">
          <a href="" className="p-breadcrumb-current">
            Home<span style={{ color: "white", padding: "0 8px" }}>\</span>
          </a>
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
        </div>
      </div>
      <div className="p-what-we-do">
        <div className="p-about-text">DELIVERING EXCELLENT SOLUTIONS IN</div>
        <div className="p-mr-inds-text" style={{ paddingBottom: "0px" }}>
          What we do
        </div>
        <div className="p-card-grid">
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
              <p className="p-card-text">Wiring Harness</p>
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
              <p className="p-card-text">Design & Engineering</p>
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
              <p className="p-card-text">Design & Engineering</p>
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
              <p className="p-card-text">Design & Engineering</p>
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
              <p className="p-card-text">Design & Engineering</p>
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
              <p className="p-card-text">Design & Engineering</p>
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
              <p>Lorem Ipsum</p>
              <p className="p-why-us-subtext">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Lorem Ipsum</p>
              <p className="p-why-us-subtext">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit.
              </p>
            </div>
          </div>
        </div>
        <div className="p-why-us-row" style={{ paddingTop: "24px" }}>
          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Lorem Ipsum</p>
              <p className="p-why-us-subtext">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit.
              </p>
            </div>
          </div>

          <div className="p-why-us-desc">
            <div className="p-why-rectangle"></div>
            <div className="p-desc-info">
              <p>Lorem Ipsum</p>
              <p className="p-why-us-subtext">
                Lorem ipsum dolor sit amet consectetur. Et mi at sit velit.
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
            hynm Lorem ipsum{" "}
          </p>
        </div>
        <div className="p-six-card-grid">
          <div className="card-row-top">
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
          </div>
          <div className="card-row-mid">
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
          </div>
          <div className="card-row-btm">
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
            <img
              src={TestImg}
              alt="TestImg"
              style={{ width: "548px", height: "457px", borderRadius: "8px" }}
            />
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
      <div className="p-certifications-qualification">
        <div className="p-certi-quali-text">
          <p>Certifications & Qualifications</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
